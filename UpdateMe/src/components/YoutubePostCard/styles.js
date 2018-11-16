import { StyleSheet, Platform } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../utils/ScalingUtils'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: moderateScale(20),
    paddingBottom: moderateScale(20),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    // borderColor: '#c0c0c0',
    // borderBottomWidth: 2,
  },
  topInfoContainer: {
    marginLeft: moderateScale(16),
    width: '100%',
    flexDirection: 'row',
  },

  contentContainer: {
    justifyContent: 'flex-start',
    height: 240,
    flexDirection: 'row',
    flex:1,
    paddingTop: moderateScale(10),
    alignSelf: 'baseline',
    alignItems: 'center',
  },

  bottomInfoContainer: {
    paddingTop: moderateScale(24),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },

  infoContentsContainer: {
    flexDirection: 'row',

  },

  titleContainer: {
    paddingTop: moderateScale(24),
    // borderBottomWidth: 2,
    // borderBottomColor: 'gray',
    flexDirection:'row',
  },

  name: {
    textAlign: 'left',
    fontSize: moderateScale(24),
    color: 'black',
    fontFamily: 'PTSans'
  },

  viewsContainer: {
    flex: 1,
  },
  viewsText: {
    color: 'black',
    fontFamily: 'PTSans',
    fontSize: 14,
    textAlign: 'center',
    padding: 12,
  },

  dateContainer: {
    flex: 1,
  },
  dateText: {
    color: 'black',
    fontFamily: 'PTSans',
    fontSize: 12,
    textAlign: 'center',
    padding: 12,
  },

  youtubeButton: {
    backgroundColor: "rgb(255,0,0)",
    borderRadius: 10,
  },

  youtubeButtonText: {
    color: 'white',
    fontFamily: 'PTSans',
    fontSize: 12,
    textAlign: 'center',
    padding: 12,
  },

  buttonContainer: {
    flex:1,
    marginRight:5,
    paddingHorizontal:10,
  },
  socialIconContainer: {
    width: (Platform.OS === 'ios' ? moderateScale(48)/2 : moderateScale(24)),
    height: (Platform.OS === 'ios' ? moderateScale(48)/2 : moderateScale(24)),
    justifyContent : 'center',
    // backgroundColor:'blue'
  },
  stretch: {
    resizeMode:'cover',
    minWidth:'100%',
    minHeight:'100%'
  },
  playButton: {
    marginLeft:'35%',
    position:'absolute',
    resizeMode:'contain',
    justifyContent: 'center',
    alignItems: 'center',
    maxWidth:'10%',
    maxHeight:'10%'
  },
  closeButton: {
    flex:1,
    backgroundColor: 'red',
//    alignSelf:'flex-end',
//    paddingTop: 15,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  closeButtonText: {
    color: 'white',
    fontFamily: 'PTSans',
    fontSize: 24,
    textAlign: 'center',
  },
  socialIcon: {
    // resizeMode:'center',
    width: (Platform.OS === 'ios' ? moderateScale(48)/2 : moderateScale(52)),
    height: (Platform.OS === 'ios' ? moderateScale(48)/2 : moderateScale(52)),
    // backgroundColor:'red'
    
  }

})

export default styles