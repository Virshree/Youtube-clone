import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard';
import { YOUTUBE_VIDEOS_API } from '../utils/constants';
import { Link, useSearchParams } from 'react-router-dom';

const VideoContainer = () => {

  const [video,setVideo]=useState([]);
  const searchParams=useSearchParams();
  // const filter=useSearchParams.get("filter");
  useEffect(()=>{
    getVideos().catch((e) => {
  
      setVideo(null);
    });
  },[searchParams])

  const getVideos=async()=>{
    const data=await fetch(YOUTUBE_VIDEOS_API);
   
    const json=await data.json();
  // console.log(json);
    setVideo(json.items);
  }
 

  return (
    <div className='flex flex-wrap m-2 p-2  cursor-pointer text-left'>
      {video?.map((item,index)=>{
        // const videoId=!filter?video.id:video.id.videoId;
        return(
          <Link to={"/watch?v="+ item.id} >
             <VideoCard info={item}  key={index}  className="cursor-pointer"/></Link>
        )
      }      
      )}
      </div>
  )
}

export default VideoContainer