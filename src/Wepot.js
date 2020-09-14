import React, { useState } from 'react'

import { Container } from './components/styles'

export default ( props ) => {
	const { src } = props

	const containerStyle = {
		"position": "relative"
	}

	if ( !isNaN(props.width) ) {
		containerStyle[ 'width' ] = ( props.width ) + 'px'
	}

	if ( !isNaN(props.width) ) {
		containerStyle[ 'width' ] = ( props.width ) + 'px'
	}

	return (
		<Container style={ containerStyle }>
			<h1>Hello, { src }</h1>
		</Container>
	)
}
