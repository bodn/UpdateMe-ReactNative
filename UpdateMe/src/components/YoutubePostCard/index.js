import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, WebView, Button, Linking, Alert } from 'react-native';
import s from './styles'
import { toTimeAgo } from '../../utils/DateUtils'
import {formatNumber} from '../../utils/StringUtils';

class YoutubePost extends Component {

    constructor(props) {
        super(props);
        this.state = { toggle: false };
    }

    getPlatform(id) {
        switch (id) {
            case 1: return require('../../../assets/icon/twitchIcon.png');
            case 4: return require('../../../assets/icon/youtubeIcon.png');
            default: return null;
        }
    }


    renderContent(url) {
        return (
            <WebView
                source={{
                    uri: url,
                }}
                onNavigationStateChange={this.onNavigationStateChange}
                startInLoadingState
                scalesPageToFit
                javaScriptEnabled
                style={{ flex: 1 }}
            />
        );
    }

    renderButton(url) {
        return (
            <TouchableOpacity onPress={() => {
                this.setState({
                    toggle: !this.state.toggle
                })
            }}>
                <View style={s.contentContainer}>
                    <Image source={{ uri: url }} style={s.stretch} />

                    <Image source={require("../../../assets/icon/playButton.png")} style={s.playButton} />

                </View>
            </TouchableOpacity>
        );
    }

    renderCloseButton() {
        return (
            <TouchableOpacity
                style={s.closeButton}
                onPress={() => {
                    this.setState({
                        toggle: !this.state.toggle
                    })
                }}>
                <Text style={s.closeButtonText}>Close</Text>
            </TouchableOpacity>
        );
    }

    render() {
        platformButton = function (platformId) {
            if (platformId == 4) {
                return {

                    backgroundColor: "rgb(255,0,0)",
                    borderRadius: 10,

                }
            }
            if (platformId == 1) {
                return {

                    backgroundColor: "rgb(100, 65, 164)",
                    borderRadius: 10,

                }
            }
        }

        platformName = function (platformId) {
            if (platformId == 4) {
                return 'Youtube';
            }
            if (platformId == 1) {
                return 'Twitch';
            }
        }

        formattedTitle = function (str) {
            if (str.length > 30)
                return {
                    textAlign: 'left',
                    fontSize: 16,
                    color: 'black',
                    fontFamily: 'PTSans'
                }
            else
                return {
                    textAlign: 'left',
                    fontSize: 24,
                    color: 'black',
                    fontFamily: 'PTSans'
                };
        }
        var platform = this.getPlatform(this.props.platform);
        var differenceTime = toTimeAgo(this.props.createdDate).trim();
        return (
            <View style={s.container}>
                {this.state.toggle && this.renderCloseButton()}
                <View style={s.topInfoContainer}>
                    <View style={s.titleContainer}>
                        <Text style={formattedTitle(this.props.title)}>
                            <Image style={s.socialIcon} source={platform} />
                            {this.props.title}
                        </Text>
                        <View style={{ flex: 1 }} />
                    </View>
                </View>
                <View style={s.contentContainer}>
                    {!this.state.toggle && this.renderButton(this.props.thumbnailUrl)}
                    {this.state.toggle && this.renderContent(this.props.url)}
                </View>
                <View style={s.bottomInfoContainer}>
                    <View style={s.infoContentsContainer}>
                        <View style={s.viewsContainer}>
                            <Text style={s.viewsText}>{formatNumber(this.props.postViews)} viewes</Text>
                        </View>
                        <View style={s.dateContainer}>
                            <Text style={s.dateText}>{differenceTime}</Text>
                        </View>
                        <View style={s.buttonContainer}>
                            <TouchableOpacity style={platformButton(this.props.platform)}
                                onPress={() => Linking.openURL(this.props.url)}
                            >
                                <Text style={s.youtubeButtonText}>Open {platformName(this.props.platform)} App</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>
            </View>
        );
    }

}


export default YoutubePost;
