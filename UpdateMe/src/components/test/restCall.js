import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import Key from '../../config/keys.js'
import { formatNumber } from '../../utils/StringUtils'
import InfluencerCard from '../InfluencerCard';

import { database } from '../../config/backend';
const cards = [];
const id = 0;
export default class TestRest extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, timePassed:false };
    }

    /* Hit the Database in the future */
    componentDidMount() {
        //setTimeout(() => {this.setState({timePassed: true})}, 10000)
        database.ref('influencer').once('value', (snapshot) => {
            snapshot.forEach(function (profile) {

                profileRef = profile.val();
                cards.push(
                    <InfluencerCard
                        key={profile.key}
                        avatar={profileRef.profileImage}
                        user={{
                            name: profileRef.username,
                            title: profileRef.title,
                            platform: profileRef.mPlatform,
                            followers: profileRef.followerCount,
                            socialInd: profileRef.socials
                        }}
                        onPress={() => {

                        }}
                        onLongPress={() => {
                            Alert.alert('Calm Down')
                        }}
                    />
                )
            });
            this.setState({
                isLoaded: true,
                source: cards,
            });
        });
    }




    render() {
        if (!this.state.isLoaded) {
            return (
                <Text>waiting for response..</Text>
            );
        }
        else if(this.state.timePassed){
            return(
                <Text> Request has timed out</Text>
            );
        }
        else {
            return (
                <View>{this.state.source}</View>
            );
        }
    }
}