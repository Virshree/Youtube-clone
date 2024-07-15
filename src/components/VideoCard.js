import React from 'react'
import { kFormatter } from '../utils/constants'

const VideoCard = ({info}) => {

  // const {snippet,statistics}=info;
  //const{channelTitle,title,thumbnails}=snippet;
  const formattedViewCount=kFormatter(info?.statistics?.viewCount)

  return (
    <div className='m-2 p-2 w-72 shadow-lg h-96'>
      <img src={info?.snippet?.thumbnails?.high?.url} alt="video" className='rounded-lg'/>
      <ul>
        <li className='font-bold  py-2'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{formattedViewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard