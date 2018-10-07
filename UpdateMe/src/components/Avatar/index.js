import PropTypes from 'prop-types'
import React from 'react'
import {Image} from 'react-native';
import { moderateScale, scale } from '../../utils/ScalingUtils'
import {Platform} from 'react-native';

const Avatar = ({src, size, platform}) => {
    return(
        <Image
            style={{
                width: moderateScale(size),
                height: moderateScale(size),
                borderRadius:(Platform.OS === 'ios' ? size/2 : size)
            }}
            source={{uri: src}} />
    )
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number
}

export default Avatar