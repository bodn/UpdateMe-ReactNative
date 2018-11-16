import React, { Component } from 'react';
import { Text } from 'react-native'
import { Font } from 'expo';
/*Custom Components, Screens */
import InfluencerProfile from './src/screens/InfluencerProfile';
import { createStackNavigator } from 'react-navigation';
import RetrieveProfiles from './src/service/RetrieveProfiles';

import transitionConfig from './src/config/transitionConfig';
import Loaded from './src/screens/loading/main'

const Routes = createStackNavigator({
  Home: {
    screen: RetrieveProfiles
  },
  Details: {
    screen: InfluencerProfile,
  }
},
  {
    initialRouteName: 'Home',
    transitionConfig,
  }
);



export default class App extends Component {
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
      roboto: require('./assets/fonts/RobotoCondensed.ttf'),
      OpenSans: require('./assets/fonts/OpenSans.ttf'),
      PTSans: require('./assets/fonts/PTSans.ttf'),
      PermanentMarker: require('./assets/fonts/PermanentMarker.ttf'),
      Acme: require('./assets/fonts/Acme.ttf'),
    });
    await
      this.setState({ loaded: true });
  };

  render() {
    if (this.state.loaded) {
      return (
        <Routes />
      );
    }
    else
      return (
        <Loaded />
      );
  }
}

