import { Image, Text, View, Animated, Easing } from 'react-native';

spinValue = new Animated.Value(0)

// First set up animation 
Animated.timing(
  this.spinValue,
  {
    toValue: 1,
    duration: 3000,
    easing: Easing.linear
  }
).start()



// Second interpolate beginning and end values (in this case 0 and 1)
const spin = this.spinValue.interpolate({
  inputRange: [0, 1],
  outputRange: ['-45deg', '45deg']
})

export default spin;