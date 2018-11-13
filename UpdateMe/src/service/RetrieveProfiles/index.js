import React, { Component } from 'react';
import { View, Text, RefreshControl, TouchableOpacity, ScrollView } from 'react-native';
import InfluencerCard from '../../components/InfluencerCard';
import { createStackNavigator } from 'react-navigation';
import Header from '../../components/Header';

//Testing Component
import YoutubePost from '../../components/YoutubePostCard';

export default class RetrieveProfiles extends Component {
    static navigationOptions = {
        header: props => <Header />
    };
    constructor(props) {
        super(props);
        this.state = { isLoaded: false, timePassed: false, refreshing: false };
    }

    componentDidMount() {
        this.fetchData();
    }


    fetchData() {
        fetch('http://192.168.1.100:8080/v1/profiles/all')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({
                    isLoaded: true,
                    results: responseData
                });
            })
            .done();
    }

    _onRefresh = () => {
        this.setState({ refreshing: true });
        this.fetchData();
        this.setState({ refreshing: false });

    }


    render() {
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
                    <TouchableOpacity key={profile.id}
                        onPress={() => {
                            console.log(profile.id);
                            this.props.navigation.navigate('Details', {
                                id: profile.id,
                                name: profile.name,
                                title: profile.title,
                                platform: profile.mainPlatform,
                                followers: profile.followerCount,
                                socialInd: profile.platforms,
                                lastActiveTime: profile.lastActive
                            });
                        }}>
                        <InfluencerCard
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
                    </TouchableOpacity>
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
                      }
                >
                    <YoutubePost/>
                    <View>
                        {contents}
                    </View>
                </ScrollView>

            );
        }
    }
}