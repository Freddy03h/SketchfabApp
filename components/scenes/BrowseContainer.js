'use strict';

var React = require('react-native');
var _ = require('lodash');
var {
    View
} = React;
var Browse = require('./Browse');

var BASE_URL = 'https://api.sketchfab.com/v2/models';

var BrowseContainer = React.createClass({

    propTypes: {
        onSelectModel: React.PropTypes.func,
        onBack: React.PropTypes.func
    },

    getInitialState: function() {
        return {
            browse: this.props.browse,
            models: [],
            loaded: false,
            isLoading: false,
            nextOffset: 0
        };
    },

    componentDidMount: function() {
        this.fetchData();
    },

    componentWillUpdate: function(nextProps, nextState) {
        // console.log(JSON.stringify(nextState), null, 4);
    },

    fetchData: function() {
        if (this.state.isLoading) {
            return;
        }

        this.setState({
            isLoading: true,
        });

        var defaults = {
            count: 20,
            sort_by: '-createdAt'
        };

        var params = _.defaults( this.state.browse.query, defaults);
        params.offset = this.state.nextOffset;
        var queryParams = _.map(params, function(val, key){ return key + '=' + val }).join('&');
        var url = BASE_URL + '?' + queryParams;

        console.log('Fetching ' + url);

        fetch(url)
            .then((response) => response.json())
            .then((responseData) => {
                if (this.isMounted()) {
                    this.setState({
                        models: this.state.models.concat(responseData.results),
                        loaded: true,
                        isLoading: false,
                        nextOffset: responseData.offset + responseData.count
                    });
                }
            })
            .done();
    },

    render: function() {
        return (
            <Browse
                models={this.state.models}
                browse={this.state.browse}
                isLoading={this.state.isLoading}
                onSelectModel={this.props.onSelectModel}
                onBack={this.props.onBack}
                onEndReached={()=>{this.fetchData()}}
                navigator={this.props.navigator}
            />
        );
    }

});

module.exports = BrowseContainer;
