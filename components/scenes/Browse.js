'use strict';

var React = require('react-native');
var _ = require('lodash');
var {
    StyleSheet,
    Text,
    View
} = React;
var GridView = require('react-native-grid-view');

var Model = require('../common/Model');

var Browse = React.createClass({

    modelData: [],

    propTypes: {
        onSelectModel: React.PropTypes.func,
        onBack: React.PropTypes.func
    },

    render: function() {
        return (
            <View style={styles.container}>
                {this.renderHeader()}
                {this.renderList()}
            </View>
        );
    },

    renderHeader: function() {
        if (this.props.onBack) {
            return (
                <View style={styles.header}>
                    <Text style={styles.headerBack} onPress={() => this.onTitlePress()}>Back</Text>
                    <Text style={styles.headerTitle}>{this.props.browse.name}</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        {this.props.browse.name}
                    </Text>
                </View>
            );
        }
    },

    renderList: function() {
        return (
            <GridView
                items={this.props.models}
                itemsPerRow={2}
                renderItem={this.renderItem}
                onEndReached={this.props.onEndReached}
            />
        );
    },

    renderItem: function(model) {
        return (
            <Model
                key={model.uid}
                model={model}
                navigator={this.props.navigator}
                onSelect={() => this.selectModel(model)}
            ></Model>
        );
    },

    selectModel: function(model) {
        if (this.props.onSelectModel) {
            this.props.onSelectModel(model);
        }
    },

    onTitlePress: function() {
        if (this.props.onBack) {
            this.props.onBack();
        }
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F2',
    },
    header: {
        flexDirection: 'row',
        padding: 10,
        paddingTop: 30,
        backgroundColor: '#1CAAD9'
    },
    headerBack: {
        flex: 0,
        color:'#ffffff'
    },
    headerTitle: {
        flex: 1,
        color:'#ffffff',
        textAlign: 'center'
    }
});

module.exports = Browse;
