import React from 'react'
import ReactDOM from 'react-dom'
import SongContainer from './containers/songContainer'

window.onload = function(){
  ReactDOM.render(
    <SongContainer />,
    document.getElementById('app')
  )
}
