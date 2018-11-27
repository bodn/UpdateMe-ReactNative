import { StyleSheet, Platform } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../utils/ScalingUtils'


const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingLeft: moderateScale(10),
    flexDirection: 'row',
    // justifyContent: 'flex-start',
    borderColor: '#c0c0c0',
    borderBottomWidth: 1,
  },
  infoContainer: {
    // backgroundColor:'red',
    flexDirection: 'column',
    marginLeft: moderateScale(16),
  },

  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: moderateScale(16),
    paddingTop: moderateScale(10),
    // alignSelf: 'baseline',
  },

  titleContainer: {
    flex: 1,
  },

  name: {
    fontSize: moderateScale(32),
    color: 'black',
  //  fontFamily: 'roboto'
  },

  description: {
    fontSize: moderateScale(11),
    color: 'gray',
  //  fontFamily: 'roboto'
  },

  socialIndicators: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: moderateScale(8),
    paddingRight: 32,
  },

  twitchDot: {
    backgroundColor: '#6441a5',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  twitterDot: {
    backgroundColor: '#00aced',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  youtubeDot: {
    backgroundColor: '#ff0000',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  facebookDot: {
    backgroundColor: '#3B5998',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  userCount: {
    flex: 1,
    textAlign: 'center',
    fontSize: moderateScale(24),
   // fontFamily: 'Roboto',
    color: 'black',
  },

  liveCount: {
    fontSize: moderateScale(8),
    color: 'gray',
    fontFamily: 'PTSans',
    flex: 1,
    justifyContent: 'flex-end',
  },

  lastActiveMessage: {
    fontSize: 24,
    color: '#6e6e6e',
    fontFamily: 'PTSans',
    flex: 1,
    justifyContent: 'flex-end',
    textAlign: 'center',
  },

  followersColumn: {
    justifyContent: 'center',
    paddingRight: 10,
    flex: 1,
  },
  lastActiveColumn: {
    //backgroundColor:'purple',
    flex: 1,
    flexDirection: 'column',

  },

  filterContainer: {
   // backgroundColor: 'red',
    justifyContent: "center",
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    borderRadius: 8,

  },

  filterIcon: {
    borderRadius:8,
    resizeMode:'cover',
    width: (Platform.OS === 'ios' ? moderateScale(48) / 2 : moderateScale(36)),
    height: (Platform.OS === 'ios' ? moderateScale(48) / 2 : moderateScale(36)),
  },

  followerIcon: {
    resizeMode:'center',
    width: (Platform.OS === 'ios' ? moderateScale(24) / 2 : moderateScale(24)),
    height: (Platform.OS === 'ios' ? moderateScale(24) / 2 : moderateScale(24)),

  },

  socialIcon: {
    backgroundColor:'white',
    borderRadius:100,
    width: (Platform.OS === 'ios' ? moderateScale(48) / 2 : moderateScale(52)),
    height: (Platform.OS === 'ios' ? moderateScale(48) / 2 : moderateScale(52)),
  },

  filterBar:{
    flex:1,
    flexDirection:'row',
    borderColor: '#c0c0c0',
    borderBottomWidth: 1,
  },

  filterItem:{
    flex:1,
    borderRightWidth: 1,
    borderRightColor: '#c0c0c0',
    //backgroundColor: 'green',
    padding: 10,
    justifyContent: "center",
    alignItems: 'center',
  }
})

export default styles