'use strict';

var React = require('react-native');
var {
    AppRegistry,
    Navigator,
    StatusBarIOS,
    StyleSheet,
    TabBarIOS,
    View
} = React;

var ExploreTab = require('./tabs/ExploreTab');
var SearchTab = require('./tabs/SearchTab');

var SketchfabApp = React.createClass({

    componentDidMount: function() {
        StatusBarIOS.setStyle('light-content', true)
    },

    getInitialState: function() {
        return {
            selectedTab: 'exploreTab'
        }
    },

    render: function() {
        return (
            <TabBarIOS>
                <TabBarIOS.Item
                    title="Featured"
                    systemIcon={'featured'}
                    selected={this.state.selectedTab === 'exploreTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'exploreTab',
                        });
                    }}
                >
                    <ExploreTab />
                </TabBarIOS.Item>
                <TabBarIOS.Item
                    title="Explore"
                    systemIcon={'search'}
                    selected={this.state.selectedTab === 'searchTab'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'searchTab',
                        });
                    }}
                >
                    <SearchTab />
                </TabBarIOS.Item>
            </TabBarIOS>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});

module.exports = SketchfabApp;
