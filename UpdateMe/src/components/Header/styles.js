import { StyleSheet, Platform } from 'react-native'
import { getStatusBarHeight } from '../../config/index'

const styles = StyleSheet.create({

  title: {
    fontSize: 32,
    color: 'black',
    fontFamily: 'PermanentMarker'
  },

  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  outerContainer: {
    backgroundColor: 'white',
    borderColor: '#c3c3c3',
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    height: Platform.OS === 'ios' ? 70 + getStatusBarHeight() : 75,
    ...Platform.select({
      ios: {
        paddingTop: getStatusBarHeight(),

      }
    }),
  },
  centerComponent: {
    flex: 1,
    marginHorizontal: Platform.OS === 'ios' ? 15 : 16,
  },

  appIcon: {
    resizeMode: 'contain',
    width: Platform.OS === 'ios' ? 36 : 64,
    height: Platform.OS === 'ios' ? 36 : 82,
  },

  menuIcon: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
  },

  searchIcon: {
    width: 24,
    height: 24,
    resizeMode: 'contain',

  },
});

export default styles