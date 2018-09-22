import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image,ScrollView } from 'react-native'
import ProfileFeedItem from './src/screens/ProfileFeedItem';


export default class App extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
        <View style={styles.feed}>
          <ProfileFeedItem
            avatar='https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png'
            name='Shroud'
            followerCount={400000}
            onPress={() => {
              Alert.alert('hello')
            }}
            onLongPress={() => {
              Alert.alert('Calm Down')
            }}
          />
        </View>
      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({
  feed: {
    marginHorizontal: '5%',
    paddingVertical: 10,

  },
  header: {

  }
});
