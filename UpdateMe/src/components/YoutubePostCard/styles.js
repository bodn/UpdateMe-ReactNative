import { StyleSheet, Platform } from 'react-native'
import { moderateScale, scale, verticalScale } from '../../utils/ScalingUtils'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: moderateScale(20),
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderRadius: 12,
  },
  topInfoContainer: {
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(16),
  },

  contentContainer: {
    justifyContent: 'flex-start',
    height: 240,
    flexDirection: 'row',
    marginLeft: moderateScale(16),
    marginRight: moderateScale(16),
    paddingTop: moderateScale(10),
    alignSelf: 'baseline',
  },

  bottomInfoContainer: {
    paddingTop: moderateScale(24),
    width:'100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: moderateScale(16),
  },

  infoContentsContainer:{
    borderTopWidth: 1,
  },

  titleContainer: {
    paddingTop: moderateScale(24),
    flex: 1,
    borderBottomWidth: 1,
  },

  name: {
    textAlign: 'left',
    fontSize: moderateScale(24),
    color: 'black',
    fontFamily: 'roboto'
  },

})

export default styles