import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

import s from './styles'



export default class ProfileHeader extends Component {

    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <View style={s.outerContainer}>
                    <View style={s.innerContainer}>
                        <View style={s.innerContainer}>
                            <Text style={s.title}>{this.props.name}</Text>
                        </View>
                    </View>
                </View>
            </View>

        );
    }
}