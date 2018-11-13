import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native'
import Header from '../../components/Header';
import { Font } from 'expo';
import { navigation } from 'react-navigation';

import ProfileHeader from '../../components/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo';

export default class InfluencerProfile extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, timePassed: false };
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: props => <ProfileHeader name={navigation.getParam('name')} />,
      gesturesEnabled: true,
    }
  };



  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.fetchData(id.toString());
  }


  fetchData(id) {
    fetch('http://192.168.1.100:8080/v1/profiles/' + id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          isLoaded: true,
          results: responseData
        });
      })
      .done();
  }


  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    if (!this.state.isLoaded) {
      return (
        <Text>waiting for response..</Text>
      );
    }
    else if (this.state.timePassed) {
      return (
        <Text> Request has timed out</Text>
      );
    }
    else {

      contents = this.state.results.profiles.map((profile) => {
        return (
            <ProfileInfo key={profile.id}
              avatar={profile.profileImage}
              user={{
                name: profile.name,
                title: profile.title,
                platform: profile.mainPlatform,
                followers: profile.followerCount,
                socialInd: profile.platforms,
                lastActiveTime: profile.lastActive
              }}
            />
            
        );
      });
      return (

        <ScrollView style={{ backgroundColor: 'white', height: '100%', }}>
          <View>
            {contents}
          </View>
        </ScrollView>

      );
    }
  }
}