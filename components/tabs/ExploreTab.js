'use strict';

var React = require('react-native');
var {
    BackAndroid,
    Navigator,
    Text
} = React;
var BrowseScreen = require('../scenes/BrowseContainer');
var ModelScreen = require('../scenes/Model');

var config = require('../../config');
var NAVIGATOR_REF = 'navigator';

var ExploreTab = React.createClass({

    componentDidMount: function() {
        BackAndroid.addEventListener('hardwareBackPress', () => {
            if (this.refs.navigator) {
                this.refs.navigator.pop();
                return true;
            }
            return true;
        });
    },

    renderModel: function(route, navigator) {
        return (
            <ModelScreen
                model={route.model}
                onBack={
                    () => {
                        if (route.index > 0) {
                            navigator.pop();
                        }
                    }
                }
            />
        );
    },

    renderBrowse: function(route, navigator) {
        return (
            <BrowseScreen
                browse={config.explore.data['highlights_staffpicks']}
                onSelectModel={
                    (model)=>{
                        var nextIndex = route.index + 1;
                        navigator.push({
                            name: 'model',
                            index: nextIndex,
                            model: model
                        });
                    }
                }
            />
        );
    },

    render: function() {

        return (
            <Navigator
                ref={NAVIGATOR_REF}
                initialRoute={{name: 'Staff Picks', index: 0}}
                renderScene={(route, navigator) => {
                    if (route.name === 'model') {
                        return this.renderModel(route, navigator);
                    } else {
                        return this.renderBrowse(route, navigator);
                    }
                }}
            />
        );

    },
});

module.exports = ExploreTab;
