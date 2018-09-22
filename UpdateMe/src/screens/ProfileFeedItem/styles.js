import {StyleSheet} from 'react-native'
import {AppLoading } from "expo";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    paddingLeft: 20,
    alignSelf: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor:'#c3c3c3',
    borderWidth: 1,
    borderRadius: 12,
    backgroundColor: 'white',
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 16
  },
  name: {
    fontSize: 24,
    color: 'black'
  },
  userCount: {
    fontSize: 14,
    color: 'gray'
  },

  followerIcon:{
    width: 32,
    height:32,
    
  },

  socialIcon:{
      width: 64,
      height: 64,
  }
})

export default styles