import { StyleSheet, Platform } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../utils/ScalingUtils'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    paddingLeft: moderateScale(10),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#c3c3c3',
    borderBottomWidth: 1,
    borderRadius: 12,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(16)
  },

  statsContainer: {
    justifyContent: 'flex-start',
    flex: 1,
    flexDirection: 'row',
    marginLeft: moderateScale(16),
    paddingTop: moderateScale(10),
    alignSelf: 'baseline',
  },

  titleContainer: {
    flex: 1,
  },

  name: {
    fontSize: moderateScale(24),
    color: 'black',
    fontFamily: 'roboto'
  },

  description: {
    fontSize: moderateScale(11),
    color: 'gray',
    fontFamily: 'roboto'
  },

  socialIndicators: {
    justifyContent: 'flex-end',
    flexDirection: 'column',
    width: moderateScale(8),
    paddingRight: moderateScale(16),
  },

  twitchDot: {
    backgroundColor: '#6441a5',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  twitterDot: {
    backgroundColor: '#0084b4',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  youtubeDot:{
    backgroundColor: '#ff0000',
    borderRadius: moderateScale(8),
    width: moderateScale(5),
    height: moderateScale(5),
    marginTop: moderateScale(2),
  },

  facebookDot:{
    backgroundColor: '#3B5998',
    borderRadius: moderateScale(8),
    width: moderateScale(8),
    height: moderateScale(8),
    marginTop: moderateScale(2),
  },

  userCount: {
    flex: 1.5,
    marginLeft: moderateScale(10),
    fontSize: moderateScale(14),
    color: 'gray',
  },

  liveCount: {
    fontSize: moderateScale(8),
    color: 'gray',
    fontFamily: 'PTSans',
    flex: 1,
    justifyContent: 'flex-end',
  },

  lastActiveMessage: {
    fontSize: moderateScale(11),
    color: '#D3D3D3',
    fontFamily: 'PTSans',
    flex: 1,
    justifyContent: 'flex-end',
  },

  followerIcon: {
    width: moderateScale(24,1.25),
    height: moderateScale(24),

  },

  socialIcon: {
    width: (Platform.OS === 'ios' ? moderateScale(48)/2 : moderateScale(52)),
    height: (Platform.OS === 'ios' ? moderateScale(48)/2 : moderateScale(52)),
  }
})

export default styles