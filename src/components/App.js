import React, { Component } from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  }

  onSearch = async (searchParam) => {
    const response = await youtube.get('/search', {
      params: {
        q: searchParam,
      }
    })
    this.setState({ videos: response.data.items.slice(1,5), selectedVideo: response.data.items[0] })
  }

  componentDidMount = () => {
    this.onSearch('welcome here')
  }

  onVideoSelect = (video) => {
    const { videos, selectedVideo } = this.state;
    const newVideoList = [...videos, selectedVideo]

    this.setState({
      videos: newVideoList.filter(currentVid => currentVid.id.videoId !== video.id.videoId),
      selectedVideo: video,
    })
  }

  render() {
    const { videos } = this.state;
    const { selectedVideo } = this.state;
    return (
    <div className="ui container">
      <SearchBar onFormSubmit={this.onSearch} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail
              video={selectedVideo}
            />
          </div>
          <div className="five wide column">
            <VideoList
              videos={videos}
              onVideoSelect={this.onVideoSelect}
            />
          </div>
        </div>
      </div>
    </div>)
  }
}

export default App;