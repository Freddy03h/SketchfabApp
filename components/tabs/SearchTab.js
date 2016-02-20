'use strict';

var React = require('react-native');
var {
    Navigator,
    Text
} = React;
var BrowseScreen = require('../scenes/BrowseContainer');
var SearchScreen = require('../scenes/Search');
var ModelScreen = require('../scenes/Model');

var config = require('../../config');

var SearchTab = React.createClass({

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
                browse={route.params}
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

    renderSearch: function(route, navigator) {
        return (
            <SearchScreen onBrowse={
                ( params ) => {
                    var nextIndex = route.index + 1;
                    navigator.push({
                        name: 'browse',
                        index: nextIndex,
                        params: params
                    });
                }
            }/>
        );
    },

    render: function() {

        return (
            <Navigator
                initialRoute={{name: 'search', index: 0}}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case 'model':
                            return this.renderModel(route, navigator);
                        case 'browse':
                            return this.renderBrowse(route, navigator);
                        case 'search':
                        default:
                            return this.renderSearch(route, navigator);
                    }
                }}
            />
        );

    },
});

module.exports = SearchTab;
