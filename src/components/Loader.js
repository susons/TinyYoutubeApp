import React from 'react'

export default function Loader() {
  return (
    <div className="ui segment" style={{minHeight: '200px'}}>
      <div className="ui active inverted dimmer">
        <div className="ui text loader">Loading</div>
      </div>
      <p></p>
    </div>
  )
}
