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
                borderColor: 'rgba(0,0,0,0.1)',
                borderWidth: 0.1
            }}
            source={{uri: src}} />
    )
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.number
}

export default Avatar