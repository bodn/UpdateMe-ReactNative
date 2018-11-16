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


class ProfileInfo extends Component {

    constructor(props) {
        super(props);
        this.state = { toggle: false, youtube: false, twitch: false };
    }

    filterSelected(state, id) {
        console.log(state);
        if (state) {
            if (id == 4) {
                return {
                    flex: 1,
                    borderRightWidth: 1,
                    borderRightColor: '#c0c0c0',
                    backgroundColor: 'rgb(255,0,0)',
                    padding: 10,
                    justifyContent: "center",
                    alignItems: 'center',
                }
            }
            else if (id == 1) {
                return {
                    flex: 1,
                    borderRightWidth: 1,
                    borderRightColor: '#c0c0c0',
                    backgroundColor: '#6441a5',
                    padding: 10,
                    justifyContent: "center",
                    alignItems: 'center',
                }
            }
        }
        else {
            if (id == 4) {
                return {
                    flex: 1,
                    borderRightWidth: 1,
                    borderRightColor: '#c0c0c0',
                    // backgroundColor: 'rgb(255,0,0)',
                    padding: 10,
                    justifyContent: "center",
                    alignItems: 'center',
                }
            }
            else if (id == 1) {
                return {
                    borderRadius:12,
                    flex: 1,
                    borderRightWidth: 1,
                    borderRightColor: '#c0c0c0',
                    // backgroundColor: 'rgb(255,0,0)',
                    padding: 10,
                    justifyContent: "center",
                    alignItems: 'center',
                }
            }
        }
    }

    renderFilterBar() {
        return (
            <View style={s.filterBar}>
                <TouchableOpacity
                    onPress={() => {
                        this.setState({
                            youtube: !this.state.youtube
                        })
                    }}
                    style={this.filterSelected(this.state.youtube, 4)}
                    >
                    <Image style={s.socialIcon} source={require('../../../assets/icon/youtubeIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity
                    style={this.filterSelected(this.state.twitch, 1)}
                    onPress={() => {
                        this.setState({
                            twitch: !this.state.twitch
                        })
                    }}>
                    <Image style={s.socialIcon} source={require('../../../assets/icon/twitchIcon.png')} />
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        var platform = getPlatform(this.props.user.platform)
        var differenceTime = toTimeAgo(this.props.user.lastActiveTime).trim();
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
            }}>
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

                        </View>
                    </View>

                    <View style={s.statsContainer}>

                        <View style={s.followersColumn}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 16,
                            }}> Followers</Text>
                            <Text style={s.userCount}>
                                {this.props.user.followers}
                            </Text>
                        </View>
                        <View style={s.lastActiveColumn}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 16,
                            }}>Last active</Text>
                            <View>
                                <Text style={s.lastActiveMessage}>
                                    {differenceTime}
                                </Text>
                            </View>
                            <TouchableOpacity
                                style={s.filterContainer}
                                onPress={() => {
                                    this.setState({
                                        toggle: !this.state.toggle
                                    })
                                }}
                            >
                                <Image style={s.filterIcon} source={require('../../../assets/icon/filterIcon.png')} />
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
                {this.state.toggle && this.renderFilterBar()}
            </View>

        )
    }

}



ProfileInfo.propTypes = {
    id: PropTypes.string,
    user: PropTypes.object,
    avatar: PropTypes.string,
    onPress: PropTypes.func
}

export default ProfileInfo