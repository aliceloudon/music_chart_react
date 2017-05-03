import React from 'react'

class SongList extends React.Component {

  render(){
    console.log(this.props.songs)
    
    const songNodes = this.props.songs.map((song) => {
      return (
        console.log(song.title.label)
      )
    })

    return(
      <div>
        
      </div>
    )
  }

}

// {songNodes}
export default SongList