import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, WebView, Button, Linking } from 'react-native';
import s from './styles'


class YoutubePost extends Component {

    render() {
        return (
            <View style={s.container}>
                <View style={s.topInfoContainer}>
                    <View style={s.titleContainer}>
                        <Text style={s.name}> Hello World</Text>
                    </View>
                </View>
                <View style={s.contentContainer}>
                    <WebView
                        javaScriptEnabled={true}
                        source={{ uri: 'https://www.youtube.com/embed/SVpocyF3SHI' }}
                    />
                </View>
                <View style={s.bottomInfoContainer}>
                    <View style={s.infoContentsContainer}>
                        <Text>Views and information</Text>
                    </View>
                    <Button  title="Open in Youtube"
                        onPress={()=> Linking.openURL('https://www.youtube.com/embed/SVpocyF3SHI')}
                    />

                </View>
            </View>
        );
    }

}

export default YoutubePost;
