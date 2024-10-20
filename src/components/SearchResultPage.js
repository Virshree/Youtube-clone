import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_API } from "../utils/constants";

const SearchResultPage = () => {
  const [searchResult, setSearchResult] = useState([]);
  const [searchQuery] = useSearchParams();

  useEffect(() => {
    getSearchResults();
  }, [searchQuery]);
  const getSearchResults = async () => {
    const data = await fetch(SEARCH_API(searchQuery));
    const json = await data.json();
    console.log(json.items);
    setSearchResult(json.items);
  };
  return (
    <div className="flex justify-center col-span-6">
      <div className="flex flex-col w-4/5">
        <h2 className="text-xl m-2 p-2 ">
          Search result for 
          <b className="text-red-400 text-xl m-2  ">
            {searchQuery.get("search_query")}
          </b>
        </h2>
        {searchResult?.map((video) => {
          const { title, description, thumbnails } = video.snippet;
          return (
            <Link to={`/watch?v=${video.id.videoId}`} key={video.id.videoId}>
              <div className="flex my-3 cursor-pointer">
                <div className="h-[180px] min-w-[420px] rounded-xl overflow-hidden cursor-pointer">
                  <img
                    src={thumbnails?.medium?.url}
                    alt="thumbnail"
                    className="h-66"
                  />
                </div>
                <div className="flex flex-col ml-5 mt-2">
                  <h2 className="text-xl font-semibold">{title}</h2>
                  <p className="mt-5 w-[80%]"> {description}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SearchResultPage;
