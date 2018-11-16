import React from 'react';
import { Image, Text, View, Animated} from 'react-native';
import { Asset, AppLoading } from 'expo';

import spin from '../../../config/rotateImage'

export default class Loader extends React.Component {
  state = {
    isReady: false,
  };

  render() {
   
    if (!this.state.isReady) {
      return (
        <AppLoading
          startAsync={this._cacheResourcesAsync}
          onFinish={() => this.setState({ isReady: true })}
          onError={console.warn}
        />
      );
    }

    return (
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <Animated.Image
          style={{ transform: [{ rotate: spin }] }}
          source={require('../../../../assets/icon/updateme.png')} />

      </View>
    );
  }

  async _cacheResourcesAsync() {
    const images = [
      require('../../../../assets/icon/updateme.png')
    ];

    const cacheImages = images.map((image) => {
      return Asset.fromModule(image).downloadAsync();
    });
    return Promise.all(cacheImages)

  }
}