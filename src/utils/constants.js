
 const GOOGLE_API_KEY="AIzaSyCiYQGeImQ5IJ9p15wkz_wi1altVFOe83U";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

//export const GET_VIDEOS_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=US&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`

export const YOUTUBE_SEARCH_API="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="


export const SEARCH_RESULTS_API="https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&&key "+GOOGLE_API_KEY;


export const RESULT_API="https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key="+GOOGLE_API_KEY+"&q="

export const SEARCH_API=(query)=>{
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=`+GOOGLE_API_KEY;
}
 export const VIDEO_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" +
 GOOGLE_API_KEY +
  "&id=";

   export const COMMENTS_API =
 "https://www.googleapis.com/youtube/v3/commentThreads?textFormat=plainText&part=snippet&maxResults=50&key=" +
   GOOGLE_API_KEY +
   "&videoId=";

  export const kFormatter = (num) => {
    return Math.abs(num) > 99
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k" 
          : Math.sign(num) * Math.abs(num);
  };