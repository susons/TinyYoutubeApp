import React from 'react'
import Loader from './Loader'

const VideoDetail = ({video}) => {
  if (!video) return <div className="sixteen wide column"><Loader /></div>
  const videiSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div>
      <div className="ui embed">
        <iframe
          title={video.snippet.title}
          src={videiSrc}
        >
        </iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">
          {video.snippet.title}
        </h4>
        <p>
          {video.snippet.description}
        </p>
      </div>
    </div>
  )
}

export default VideoDetail;