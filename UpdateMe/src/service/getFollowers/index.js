import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import Key from '../../config/keys.js'
import {formatNumber} from '../../utils/StringUtils'
export default class HTTPCheck extends Component {
    constructor(props) {
        super(props);
        this.state = { isLoaded: false };
    }

    /* Hit the Database in the future */
    componentDidMount() {
        return fetch('https://api.twitch.tv/kraken/channels/shroud', {
            method: 'GET',
            headers: {
                "Client-ID": Key.twitchKey
            }
        }).then((response) => response.json())
            .then((responseJson) => {

                this.setState({
                    isLoaded: true,
                    dataSource: (JSON.stringify(responseJson.followers)),
                });

            })
            .catch((error) => {
                console.error(error);
            });
    }




    render() {
        if (!this.state.isLoaded) {
            return (
                <Text></Text>
            );
        }
        else {
            return (
                <Text> {formatNumber(this.state.dataSource)} </Text>
            );
        }
    }
}