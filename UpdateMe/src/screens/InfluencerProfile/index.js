import React, { Component } from 'react';
import { Text, View, ScrollView, Platform, RefreshControl } from 'react-native'
import Header from '../../components/Header';
import { Font } from 'expo';
import { navigation } from 'react-navigation';
import { getStatusBarHeight } from '../../config/index'
import '../../config/global';

import YoutubePost from '../../components/PostCard';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileInfo from '../../components/ProfileInfo';

import Loader from '../.././screens/loading'
export default class InfluencerProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      profileLoaded: false,
      postsLoaded: false,
      timePassed: false,
      profileResults: null,
      postResults: null,
      refreshing: false
    };

  }

  handleToUpdate = (someArg) => {
    console.log('Filter provided is: Youtube: ' + someArg.youtube + "- Twitch: " + someArg.twitch);
    this.setState({ postsLoaded: false })
    var filter = "filter?";
    if (someArg.youtube)
      filter += "youtube=true";
    else
      filter += "youtube=false";

    filter += "&";
    if (someArg.twitch)
      filter += "twitch=true";
    else
      filter += "twitch=false";

    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.fetchPosts(id, filter);

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: props => <ProfileHeader name={navigation.getParam('name')} />,
      headerStyle: {
        height: Platform.OS === 'ios' ? 40 + getStatusBarHeight() : 40,
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
    const { navigation } = this.props;
    const id = navigation.getParam('id');

    this.fetchProfileInfo(id.toString());
    this.setState({ refreshing: false });

  }

  componentDidMount() {
    const { navigation } = this.props;
    const id = navigation.getParam('id');
    this.fetchProfileInfo(id.toString());
    this.fetchPosts(id.toString());
  }


  fetchProfileInfo(id) {
    console.log("fetchProfileInfo():: Fetching Profile: " + id);
    fetch(global.backendAddress + '/v1/profiles/' + id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          profileLoaded: true,
          profileResults: responseData
        });
      })
      .catch(function (error) {
        console.log("fetchProfileInfo():: Timed out error, unable to reach " + global.backendAddress);
      })
      .done();
  }

  fetchPosts(id, filter) {
    console.log("fetchPosts():: Fetching Posts for : " + id + " with filter: " + filter)
    if (filter == null) {
      fetch(global.backendAddress + '/v1/profile/' + id + '/posts/')
        .then((postResponse) => postResponse.json())
        .then((postResponseData) => {
          this.setState({
            postsLoaded: true,
            postResults: postResponseData
          });
        })
        .catch(function (error) {
          console.log("fetchPosts():: Timed out error, unable to reach " + global.backendAddress);
          console.log(error.toString());
        })
        .done();
    }
    else {
      fetch(global.backendAddress + '/v1/profile/' + id + '/posts/' + filter)
        .then((postResponse) => postResponse.json())
        .then((postResponseData) => {
          this.setState({
            postsLoaded: true,
            postResults: postResponseData
          });
        })
        .catch(function (error) {
          console.log("fetchPosts():: Timed out error, unable to reach " + global.backendAddress);
          console.log(error.toString());
        })
        .done();
    }
  }

  renderProfileCard(profile) {
    if (profile != null) {
      profileContents = profile.profiles.map((profile) => {
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
            handleToUpdate={this.handleToUpdate}
          />
        );
      });
      return profileContents;
    }
    else {
      return (<Text>ERROR</Text>)
    }
  }

  renderLoad() {
    return (
      <View>
        <Loader />
      </View>
    );
  }
  renderPosts(posts) {
    if (posts != null) {
      postsList = posts.posts.map((post) => {
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
      return postsList;
    }
  }

  render() {
    if (!this.state.profileLoaded) {
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
            {this.state.profileLoaded && this.renderProfileCard(this.state.profileResults)}
          </View>
          {!this.state.postsLoaded && this.renderLoad()}
          <View>
            {this.state.postsLoaded && this.renderPosts(this.state.postResults)}
          </View>

        </ScrollView>

      );
    }
  }
}