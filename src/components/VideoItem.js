import React from 'react'
import PropTypes from 'prop-types';
import './VideoItem.css';

const VideoItem = ({video, onVideoSelect}) => {
  return (
      <div className="video-item item" onClick={() => onVideoSelect(video)}>
        <img
          className="ui image"
          src={video.snippet.thumbnails.medium.url}
          alt="missing item"
        />
        <div className="content">
          <div className="header">
            {video.snippet.title}
          </div>
        </div>
      </div>
  )
}

VideoItem.propTypes = {
  video: PropTypes.instanceOf(Object),
  onVideoSelect: PropTypes.func.isRequired,
}

VideoItem.defaultProps = {
  video: {},
}

export default VideoItem;