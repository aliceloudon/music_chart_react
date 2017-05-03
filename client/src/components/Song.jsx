import React from 'react'

const Song = (props) => {
  return (
    <div>
      <p>{props.chartPosition}. <strong>{props.title}</strong> {props.artist}</p>
      <img src={props.image}/>
    </div>
  )
}

export default Song