import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image, ScrollView } from 'react-native'
import InfluencerCard from './src/components/InfluencerCard';
import { AppLoading, Font } from 'expo';

class UserDetails {
  constructor(name, title, platform, followerCount, socialInd, lastActive) {
    this.name = name;
    this.title = title;
    this.platform = platform;
    this.followerCount = followerCount;
    this.socialInd = socialInd;
    this.lastActive = lastActive;
  }
}


export default class App extends Component {

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
    });
    this.setState({ loaded: true });
  };



  render() {
    if (!this.state.loaded) {
      return (<Text> Loading Font... </Text>)
    }
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'black',
        paddingTop: 50,
      }}>
        <Text>Profile Feed</Text>
        <ScrollView style={{ backgroundColor: '#fafafa' }}>
          <View style={styles.feed}>
            <InfluencerCard
              avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
              user={new UserDetails('Shroud', 'Twitch Streamer', 'TWITCH', '500000', ['TWITCH', 'YOUTUBE'])}
              onPress={() => {
                Alert.alert('hello')
              }}
              onLongPress={() => {
                Alert.alert('Calm Down')
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feed: {
    marginHorizontal: '2%',
    paddingVertical: 10,
  },
  header: {

  }
});
