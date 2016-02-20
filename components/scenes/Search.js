'use strict';

var React = require('react-native');
var config = require('../../config');
var {
    ListView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View,
} = React;

var exploreData = config.explore.data;
var exploreSections = config.explore.sections;
var exploreRows = config.explore.rows;

var SearchScene = React.createClass({

    propTypes: {
        onBrowse: React.PropTypes.func
    },

    getInitialState: function() {

        var dataSource = new ListView.DataSource({
            getRowData: function(dataBlob, sectionID, rowId){
                return dataBlob[rowId];
            },
            getSectionData: function(dataBlob, sectionID) {
                return dataBlob[sectionID];
            },
            rowHasChanged: (row1, row2) => row1 !== row2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
        });

        return {
            dataSource: dataSource.cloneWithRowsAndSections(exploreData, exploreSections, exploreRows)
        };
    },

    render: function() {
        return (
            <View style={styles.container}>
                <View style={{padding: 10, paddingTop: 30, backgroundColor:'#1CAAD9'}}>
                    <Text style={{color:'#fff', textAlign: 'center'}}>Search</Text>
                </View>
                <View style={styles.search}>
                    <TextInput
                        placeholder="Search"
                        returnKeyType="search"
                        style={styles.search_field}
                        onChangeText={(text) => {this.searchText = text;}}
                        onSubmitEditing={(text) => this.onSearch()}
                    />
                </View>
                <ListView
                    style={styles.explore_list}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSectionHeader}
                    automaticallyAdjustContentInsets={false}
                    contentInset={{top: 0, left: 0, bottom: 48, right: 0}}
                />
            </View>
        );
    },

    renderRow: function(rowData) {
        return (
            <TouchableHighlight onPress={() => this.onSelectRow(rowData)}>
                <View style={styles.explore_row}>
                    <Text>{rowData.name}</Text>
                </View>
            </TouchableHighlight>
        );
    },

    renderSectionHeader: function(sectionData) {
        return (
            <View style={styles.section_header}>
                <Text style={styles.section_header_title}>
                {sectionData.name.toUpperCase()}
                </Text>
            </View>
        );
    },

    onSelectRow: function(rowData) {
        this.browse(rowData);
    },

    onSearch: function(query) {
        this.browse({
            name: 'Search results',
            query: {
                search: this.searchText
            }
        })
    },

    browse: function(params) {
        this.props.onBrowse( params );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    },

    search: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },

    search_field: {
        height: 40,
        paddingHorizontal: 10,
        backgroundColor: '#f2f2f2',
        borderRadius: 4
    },

    section_header: {
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee'
    },

    section_header_title: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#1CAAD9'
    },

    explore_list: {
        backgroundColor: '#ffffff'
    },

    explore_row:{
        height: 44,
        paddingTop: 13,
        paddingLeft: 16,
        backgroundColor: '#ffffff',
        borderBottomWidth:1,
        borderBottomColor:'#eeeeee'
    }
});

module.exports = SearchScene;
