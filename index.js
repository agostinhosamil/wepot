import React from 'react'
import ReactDom from 'react-dom'

import { Wepot } from './src'


function App () {
	return <Wepot width="700"src="/video.mp4" />
}

ReactDom.render ( <App />, 
	document.getElementById('root')
)
