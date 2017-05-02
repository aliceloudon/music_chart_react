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
        const jsonString = request.responseText
        const data = JSON.parse(jsonString)
        this.setState({ songs: data })
      }
    }
    request.send()
  }

  render(){
    return(
      <div>
        <h2>Top of the Pops!</h2>
        <Songlist />
      </div>
    )
  }

}

export default SongContainer