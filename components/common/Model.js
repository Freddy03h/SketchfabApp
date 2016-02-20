'use strict';

var React = require('react-native');
var _ = require('lodash');
var {
    AppRegistry,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
} = React;

var Model = React.createClass({

    getPreviewUrl: function() {
        var images = _.sortBy(this.props.model.thumbnails.images, 'width');
        var preview;
        for (var j=0; j<images.length; j++) {
            preview = images[j].url;
            if ( images[j].width >= 320 ) {
                break;
            }
        }
        return preview;
    },

    render: function() {

        var preview = this.getPreviewUrl();

        return (
            <View style={styles.container}>
                <TouchableHighlight onPress={this.props.onSelect}>
                    <Image style={styles.thumbnail} source={{uri: preview}} />
                </TouchableHighlight>
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    thumbnail: {
        flex: 1,
        height: 160
    }
});

module.exports = Model;
