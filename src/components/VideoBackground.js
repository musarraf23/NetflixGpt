import React from 'react'
import useMovieTrailer from '../hooks/useMovieTrailer'
import { useSelector } from 'react-redux'
const VideoBackground = () => {
  const trailerVideo = useSelector((store)=>store.movie?.trailerVideo);
  useMovieTrailer(movieId);
  return (
    <div className='w-screen'>
      <iframe className='w-screen aspect-video'
      src={"https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1"}
          title="Youtube Video Player" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >

      </iframe>
    </div>
  )
}

export default VideoBackground
