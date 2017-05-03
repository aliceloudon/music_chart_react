import React from 'react'

const Song = (props) => {
  return (
    <div>
      <ul>
        <li>{props.chartPosition}. <strong>{props.title}</strong> {props.artist}</li>
      </ul>
    </div>
  )
}

export default Song