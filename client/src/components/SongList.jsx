import React from 'react'
import Song from './Song'

class SongList extends React.Component {

  render(){
    const songNodes = this.props.songs.map((song, index) => {
      return (
        <Song key={index} title={song["im:name"].label} artist={song["im:artist"].label} chartPosition={index+1}/>
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