import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, span } from 'react-native';
import s from './styles'

import Avatar from '../Avatar'


const socialIconEnum = {
    YOUTUBE: require('../../resources/icon/youtubeIcon.png'),
    TWITCH: require('../../resources/icon/twitchIcon.png')
};

function getPlatform(str) {
    switch (str) {
        case 'TWITCH': return socialIconEnum.TWITCH;
        case 'YOUTUBE': return socialIconEnum.YOUTUBE;
        default: return null;
    }
}

function showSocialInd(arg) {

    const indicators = [];

    if (arg != null) {
        for (let i = 0; i < arg.length; i++) {
            if (arg[i] === 'TWITCH') {
                indicators.push(
                    <View key={i + 10} style={s.twitchDot}></View>
                );
            }

            else if (arg[i] === 'YOUTUBE') {
                indicators.push(
                    <View key={i + 30} style={s.youtubeDot}></View>
                );
            }

            else if (arg[i] === 'TWITTER') {
                indicators.push(
                    <View key={i + 20} style={s.twitterDot}></View>
                );
            }

            else if (arg[i] === 'FACEBOOK') {
                indicators.push(
                    <View key={i + 40} style={s.facebookDot}></View>
                );
            }
        }
    }

    return indicators;
}


class InfluencerCard extends Component {
    render() {
        var platform = getPlatform(this.props.user.platform)
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}
            >
                <View style={s.container} onPress={this.props.onPress}>
                    <View style={s.infoContainer}>
                        <Avatar
                            src={this.props.avatar}
                            size={75} />
                        <View style={s.infoContainer}>
                            <View style={s.titleContainer}>
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={s.name}>
                                    {this.props.user.name}
                                    <Image style={s.socialIcon} source={platform} />
                                </Text>
                                <Text
                                    numberOfLines={1}
                                    ellipsizeMode="tail"
                                    style={s.description}>
                                    {this.props.user.title}
                                </Text>
                            </View>

                        </View>
                        <View style={s.socialIndicators}>
                            {showSocialInd(this.props.user.socialInd)}
                        </View>
                    </View>

                    <View style={s.statsContainer}>
                        <Text style={s.userCount}>
                            <Image style={s.followerIcon} source={require('../../resources/icon/follower-icon.png')} />
                            <Text> 50000 </Text>
                            <Text style={{ fontSize: 8 }}> followers</Text>
                        </Text>
                        <Text style={s.lastActiveMessage}>~ last active null minutes ago</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

InfluencerCard.propTypes = {
    id: PropTypes.string,
    user: PropTypes.object,
    avatar: PropTypes.string,
    onPress: PropTypes.func
}

export default InfluencerCard