
import React from 'react'

const VideoTitle = (title,overview) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black  '>
        <h1 className='text-2xl md:text 6xl font-bold'>{title}</h1>
        <p className=''>{overview}</p>
        <div>
            <button>Play</button>
            <button>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle








