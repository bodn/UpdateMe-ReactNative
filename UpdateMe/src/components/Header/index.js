import PropTypes from 'prop-types'
import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';

import s from './styles'



export default class Header extends Component {
    componentWillMount() {

    }

    render() {
        return (
            <View>
                <View style={s.outerContainer}>
                    <View style={s.innerContainer}>
                        <View style={s.innerContainer}>
                            <Text style={s.title}><Image source={require('../../../assets/icon/updateme.png')} style={s.appIcon} />UpdateMe</Text>
                        </View>
                        <TouchableOpacity>
                            <Image source={require('../../../assets/icon/search.png')} style={s.searchIcon} />
                        </TouchableOpacity>

                    </View>
                </View>
            </View>

        );
    }
}