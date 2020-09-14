import React from 'react'
import WepotCore from './Wepot'

export default () => <WepotCore />

const VIDEO_AVATAR = '/video.mp4'

const Wepot = props => {
	let { src } = props

	if ( typeof 'str' !== typeof src ) {
		src = VIDEO_AVATAR
	}

	const properties = { ...props, src }

	return <WepotCore { ...properties } />
}

export { Wepot }
