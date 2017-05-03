import React from 'react'
import SongList from '../components/SongList'

class SongContainer extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      songs: []
    }
  }

  componentDidMount() {
    const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    const request = new XMLHttpRequest()
    request.open('GET', url)

    request.onload = () => {
      if (request.status === 200) {
        // console.log(request.responseText)
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        // console.log(songs)
        this.setState({ songs: data.feed.entry })
        // console.log(data.feed)
      }
    }
    request.send()

  }

  render(){
    return(
      <div>
        <h2>Top of the Pops!</h2>
        <SongList songs={this.state.songs}/>
      </div>
    )
  }

}

export default SongContainer