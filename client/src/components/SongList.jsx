import React from 'react'
import Song from './Song'

class SongList extends React.Component {

  render(){
    // console.log(this.props.songs)
    const songNodes = this.props.songs.map((song, index) => {
      return (
        <Song key={index} title={song["im:name"].label} artist={song["im:artist"].label} chartPosition={index+1} image={song["im:image"][0].label}/>
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