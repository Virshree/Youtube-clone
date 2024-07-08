import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { VIDEO_API, kFormatter } from "../utils/constants";
import moment from "moment";

const WatchPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const [video, setVideo] = useState([]);
  const [showDescription, setShowDescription] = useState(false);


  const truncatedDescription = showDescription
    ? video?.snippet?.description
    : `${video?.snippet?.description.substring(0, 200)}...`;
  const toggleDescription = () => setShowDescription(!showDescription);
  const buttonText = showDescription ? "less" : "more";

  const formattedViewCount = kFormatter(video?.statistics?.viewCount);
  const formattedPublishedAt = moment(video?.snippet?.publishedAt).fromNow();
  useEffect(() => {
    getVideo();
  }, []);

  const getVideo = async () => {
    const data = await fetch(VIDEO_API + searchParams.get("v"));
    const json = await data.json();
    console.log(video?.snippet?.publishedAt)
    setVideo(json.items[0]);
 
  };
  // console.log(searchParams.get("v"));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, []);
  return (
    <div className="flex flex-col w-[1220px]">
      <div className="flex">
        <div className="py-5 px-3">
          <iframe
            width="1200"
            height="700"
            src={"https://www.youtube.com/embed/" + searchParams.get("v")}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
      <span className="text-xl my-3 p-2 font-bold">{video?.snippet?.title}</span>
      <div className="flex  items-center ">
        <div className="bg-gray-200 mt-3 ml-3 rounded-full w-2 p-5 md:p-7 h-2">
        
        </div>
        <div className="ml-2">
        <span className="font-semibold text-sm md:text-base">{video?.snippet?.channelTitle}</span>
        </div>
      
      </div>
      <p className="font-semibold text-sm md:text-base">
            {formattedViewCount} views &nbsp; {formattedPublishedAt}
          </p>
        <p className="text-sm md:text-base bg-gray-200 w-[1200px] m-2 p-2">
            {truncatedDescription}
            {showDescription && <br />}
            <button className="font-semibold" onClick={toggleDescription}>
              Show {buttonText}
            </button>
          </p>
        </div>
      
        <div className="">
          <LiveChat />
        </div>
      </div>
      <div>
        <CommentsContainer />
      </div>
    </div>
  );
};

export default WatchPage;
