import React from 'react'
import PropTypes from 'prop-types';
import VideoItem from './VideoItem';

const VideoList = ({videos, onVideoSelect}) => (
  videos.map((video, index) => (
    <div key={index} className="ui relaxed divided list">
      <VideoItem video={video} onVideoSelect={onVideoSelect}/>
    </div>
  ))
)

VideoList.propTypes = {
  videos: PropTypes.instanceOf(Array),
  onVideoSelect: PropTypes.func.isRequired,
}

VideoList.defaultProps = {
  videos: [],
}

export default VideoList;