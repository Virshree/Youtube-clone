import { useEffect, useState } from "react";
import { COMMENTS_API } from "../utils/constants";
import { useSearchParams } from "react-router-dom";
import moment from "moment";

const CommentsContainer = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const [comment, setComments] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const getComments = async () => {
    const data = await fetch(COMMENTS_API + searchParams.get("v"));
    const json = await data.json();

    setComments(json.items);
    console.log(comment);
    // console.log(json?.items?.snippet?.topLevelComment?.snippet?.textDisplay);
  };
  return (
    <div className="">
      <h2 className="text-xl font-bold mt-5 px-3">
        Comments : {comment.length}
      </h2>
      <div>
        {comment.map((item) => {
          const {authorDisplayName,authorProfileImageUrl,
            textDisplay,publishedAt}=item.snippet.topLevelComment.snippet
          return (
            <div key={item.id} className="flex  gap-5 my-8">
              <img
                src={
                 authorProfileImageUrl
                }
                alt="user"
                className="h-10 rounded-full  "
              />
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <h2 className="text-md font-semibold text-gray-700  ">
                    {authorDisplayName}
                  </h2>
                  <br />
                  <span className="mx-2 text-gray-500">
                    {moment(
                      publishedAt
                    ).fromNow()}
                  </span>
                </div>
                <h3 className="text-sm ">
                  {textDisplay}
                </h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentsContainer;
