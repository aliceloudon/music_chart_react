import React from 'react'
import Song from './Song'

class SongList extends React.Component {

  render(){
    
    const songNodes = this.props.songs.map((song, index) => {
      return (
        <Song title={song.title.label} key={index}/>
      )
    })

    return(
      <div>
        {songNodes}        
      </div>
    )
  }

}

export default SongList