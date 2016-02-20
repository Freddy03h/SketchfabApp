'use strict';

var React = require('react-native');
var _ = require('lodash');
var {
    AppRegistry,
    Image,
    ScrollView,
    // StatusBarIOS,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    WebView
} = React;

var WEBVIEW_REF = 'webview';

var ModelScreen = React.createClass({

    getInitialState: function() {
        return {
            url: 'about:blank'
        }
    },

    componentDidMount: function() {
        this.setState({
            url: this.props.model.embedUrl
        });
    },

    getPreviewUrl: function() {
        var images = _.sortBy(this.props.model.thumbnails.images, 'width');
        var preview;
        for (var j=0; j<images.length; j++) {
            preview = images[j].url;
            if ( images[j].width >= 400 ) {
                break;
            }
        }
        return preview;
    },

    render: function() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text onPress={this.goBack} style={{marginTop: 15, color: '#ffffff'}}>Back</Text>
                </View>
                <View style={styles.viewer}>
                    <WebView
                        bounces={false}
                        javaScriptEnabled={true}
                        renderLoading={function(){}}
                        renderError={function(){}}
                        scalesPageToFit={true}
                        scrollEnabled={false}
                        url={this.state.url}
                    />
                </View>
            </View>
        );
    },

    goBack: function() {
        this.setState({
            url: 'about:blank'
        });
        this.props.onBack();
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1caad9'
    },
    header: {
        height: 44,
        marginTop: 20,
        paddingLeft: 15
    },
    viewer: {
        flex: 1,
        backgroundColor: '#000'
    }
});

module.exports = ModelScreen;
