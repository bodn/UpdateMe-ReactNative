import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, span } from 'react-native';
import s from './styles'

import { toTimeAgo } from '../../utils/DateUtils';
import Avatar from '../Avatar'


const socialIconEnum = {
    YOUTUBE: require('../../resources/icon/youtubeIcon.png'),
    TWITCH: require('../../resources/icon/twitchIcon.png')
};

function getPlatform(str) {
    switch (str) {
        case 'Twitch': return socialIconEnum.TWITCH;
        case 'Youtube': return socialIconEnum.YOUTUBE;
        default: return null;
    }
}

function showSocialInd(arg) {

    const indicators = [];

    if (arg != null) {
        for (let i = 0; i < arg.length; i++) {
            if (arg[i] === 'Twitch') {
                indicators.push(
                    <View key={i + 10} style={s.twitchDot}></View>
                );
            }

            else if (arg[i] === 'Youtube') {
                indicators.push(
                    <View key={i + 30} style={s.youtubeDot}></View>
                );
            }

            else if (arg[i] === 'Twitter') {
                indicators.push(
                    <View key={i + 20} style={s.twitterDot}></View>
                );
            }

            else if (arg[i] === 'Facebook') {
                indicators.push(
                    <View key={i + 40} style={s.facebookDot}></View>
                );
            }
        }
    }

    return indicators;
}




class InfluencerCard extends Component {
    lastActiveMessage = function (str) {
        if (str) {
            if (str.includes("moment")) {
                return {
                    fontSize: 14,
                    color: '#6e6e6e',
                    fontFamily: 'PTSans',
                    flex: 1,
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                };
            }
            else if (str.includes("minute")) {
                return {
                    fontSize: 14,
                    color: '#949494',
                    fontFamily: 'PTSans',
                    flex: 1,
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                };
            }
            else if (str.includes("hour")) {
                return {
                    fontSize: 14,
                    color: '#adadad',
                    fontFamily: 'PTSans',
                    flex: 1,
                    justifyContent: 'center',
                    textAlign: 'center',
                };
            }
            else if (str.includes("day")) {
                return {
                    fontSize: 14,
                    color: '#D3D3D3',
                    fontFamily: 'PTSans',
                    flex: 1,
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                }
            }
            else if (str.includes("LIVE")) {
                return {
                    fontSize: 14,
                    color: '#ff0000',
                    fontFamily: 'PTSans',
                    flex: 1,
                    justifyContent: 'flex-end',
                    textAlign: 'center',
                }
            }
        }
        return;
    }
    render() {
        var platform = getPlatform(this.props.user.platform)
        var differenceTime = toTimeAgo(this.props.user.lastActiveTime).trim();
        return (
            <View style={s.container} onPress={this.props.onPress}>
                <View style={s.infoContainer}>
                    <Avatar
                        src={this.props.avatar}
                        size={100} />
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

                <View style={[s.statsContainer, {
                    borderColor: (this.props.user.platform === 'Twitch' ? "rgba(100,65,165, 1)" : "rgba(255,0,0,1)"),
                }]}>
                    <Text style={s.userCount}>
                        <Image style={s.followerIcon} source={require('../../resources/icon/follower-icon.png')} />
                        <Text> {this.props.user.followers}</Text>
                        <Text style={{ fontSize: 8 }}> followers</Text>
                    </Text>
                    <Text style={this.lastActiveMessage(differenceTime)}>
                        <Text> {differenceTime}</Text>
                    </Text>
                </View>
            </View>
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