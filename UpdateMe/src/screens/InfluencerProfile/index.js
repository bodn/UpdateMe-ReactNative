import React, { Component } from 'react';
import { Text, View, ScrollView, Platform,RefreshControl } from 'react-native'
import Header from '../../components/Header';
import { Font } from 'expo';
import { navigation } from 'react-navigation';
import { getStatusBarHeight } from '../../config/index'


import YoutubePost from '../../components/YoutubePostCard';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo';

import Loader from '../.././screens/loading/main'
export default class InfluencerProfile extends Component {

  constructor(props) {
    super(props);
    this.state = { isLoaded: false, timePassed: false, results: null, postResults: null,refreshing: false };
  }


  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: props => <ProfileHeader name={navigation.getParam('name')} />,
      headerStyle: {
        height: Platform.OS === 'ios' ? 70 + getStatusBarHeight() : 40,
        ...Platform.select({
          ios: {
            paddingTop: getStatusBarHeight(),

          }
        }),
      },
      gesturesEnabled: true,
    }
  };

  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData();
    this.setState({ refreshing: false });

}

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.fetchData(id.toString());
  }


  fetchData(id) {
    console.log("Fetching Profile: " + id);
    var postResponse;
    fetch('http://192.168.1.100:8080/v1/profiles/' + id)
      .then((response) => response.json())
      .then((responseData) => {

        this.setState({
          isLoaded: true,
          postResults: postResponse,
          results: responseData
        });
      }).done();

    console.log("Fetching Posts for : " + id)
    fetch('http://192.168.1.100:8080/v1/profile/' + id + '/posts/filter?twitch=true&youtube=true')
      .then((postResponse) => postResponse.json())
      .then((postResponseData) => {
        postResponse = postResponseData;
      })
      .done();
  }



  render() {
    const { navigation } = this.props;
    const name = navigation.getParam('name');
    if (!this.state.isLoaded) {
      return (
        <Loader />
      );
    }
    else if (this.state.timePassed) {
      return (
        <Text> Request has timed out</Text>
      );
    }
    else {

      profileContents = this.state.results.profiles.map((profile) => {
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

      postContents = this.state.postResults.posts.map((post) => {
        console.log(post.postThumbnail);
        return (
          <YoutubePost key={post.postId}
            title={post.postTitle}
            url={post.postUrl}
            postViews={post.postViews}
            createdDate={post.postCreated}
            thumbnailUrl={post.postThumbnail}
            platform={post.platformId}
          />

        );
      });
      return (

        <ScrollView 
        style={{ backgroundColor: 'white', height: '100%', }}
        refreshControl={
          <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this._onRefresh}
          />
      }>
          <View>
            {profileContents}
          </View>
          <View>
            {postContents}
          </View>

        </ScrollView>

      );
    }
  }
}