import React from 'react'

const VideoCard = ({info}) => {
  // console.log(info);
  // const {snippet,statistics}=info;
  // const{channelTitle,title,thumbnails}=snippet;
  return (
    <div className='m-2 p-2 w-72 shadow-lg'>
      <img src={info?.snippet?.thumbnails?.high?.url} alt="video" className='rounded-lg'/>
      <ul>
        <li className='font-bold  py-2'>{info?.snippet?.title}</li>
        <li>{info?.snippet?.channelTitle}</li>
        <li>{info?.statistics?.viewCount} views</li>
      </ul>
    </div>
  )
}

export default VideoCard