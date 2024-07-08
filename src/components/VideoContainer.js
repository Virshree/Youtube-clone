import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [video,setVideo]=useState([]);
  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
    const json=await data.json();
    
    setVideo(json.items);
  }
 

  return (
    <div className='flex flex-wrap m-2 p-2 cursor-pointer text-left'>
      {video?.map((item,index)=>
      <div key={index}>
       <Link to={"/watch?v="+ item.id}> <VideoCard info={item} /></Link>
       </div>
      )}
     </div>
  )
}

export default VideoContainer