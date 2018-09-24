import PropTypes from 'prop-types'
import React from 'react'
import {Image} from 'react-native';

const Avatar = ({src, size}) => {
    return(
        <Image
            style={{
                width: size,
                height: size,
                borderRadius: size,
            }}
            source={{uri: src}} />
    )
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number
}

export default Avatar