import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import s from './styles'

import Avatar from '../../components/Avatar'

class ProfileFeedItem extends Component {
    render() {
        return (
            <TouchableOpacity
                onPress={this.props.onPress}
                onLongPress={this.props.onLongPress}
            >
                <View style={s.container} onPress={this.props.onPress}>
                    <Avatar
                        src={this.props.avatar}
                        size={75} />
                    <View style={s.infoContainer}>
                        <Text
                            numberOfLines={1}
                            ellipsizeMode="tail"
                            style={s.name}>
                            {this.props.name}
                            <Image style={s.socialIcon} source={require('../../resources/icon/twitchIcon.png')} />
                        </Text>
                        <Text style={s.userCount}>  <Image style={s.followerIcon} source={require('../../resources/icon/follower-icon.png')} />{this.props.followerCount} followers</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

}

ProfileFeedItem.propTypes = {
    name: PropTypes.string,
    followerCount: PropTypes.number,
    id: PropTypes.string,
    user: PropTypes.object,
    avatar: PropTypes.string,
    onPress: PropTypes.func
}

export default ProfileFeedItem