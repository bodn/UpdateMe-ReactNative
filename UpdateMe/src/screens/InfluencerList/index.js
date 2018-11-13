import React, { Component } from 'react';
import {Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header';
import { Font } from 'expo';


import RetrieveProfiles from '../../components/test/restCall'

export default class InfluencerList extends Component {
  //Ignore native bases warning OPTIONAL
  constructor(props) {
    super(props);
  }

  state = {
    loaded: false,
  };

  componentWillMount() {
    this._loadAssetsAsync();
  }

  _loadAssetsAsync = async () => {
    await Font.loadAsync({
      roboto: require('../../../assets/fonts/RobotoCondensed.ttf'),
      OpenSans: require('../../../assets/fonts/OpenSans.ttf'),
      PTSans: require('../../../assets/fonts/PTSans.ttf'),
      PermanentMarker: require('../../../assets/fonts/PermanentMarker.ttf'),
      Acme: require('../../../assets/fonts/Acme.ttf'),
    });
    await
      this.setState({ loaded: true });
  };



  render() {

    if (!this.state.loaded) {
      return (<Text> Loading Font... </Text>)
    }
    return (
      <View>
        <Header />
        <ScrollView style={{ backgroundColor: 'white', height: '100%', }}>
          {/* this component reaches out to the database and loads the components*/}
          <RetrieveProfiles />
        </ScrollView>
      </View>

    );
  }
}