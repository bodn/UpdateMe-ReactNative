import React, { Component } from 'react';
import {Text} from 'react-native'
/*Custom Components, Screens */
import InfluencerList from './src/screens/InfluencerList';

export default class App extends Component {
  constructor(props) {
    super(props);
    console.ignoredYellowBox = [
      'Setting a timer'
    ];
  }

  state = {
    loaded: true,
  };
  render() {

    if (!this.state.loaded) {
      return (<Text> Loading Font... </Text>)
    }
    return (
      <InfluencerList/>
    );
  }
}

