export const youtube_api_key = "AIzaSyDhXpLOJSOEx5Bvc7JDRkEuzYAtFewoZao";

export const youtube_video_api =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  youtube_api_key;

export const searchApi =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

export const SEARCH_API_RESULT =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&regionCode=IN&type=video&key=" +
  youtube_api_key +
  "&q=";

export const value_converter = function (value) {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M";
  } else {
    if (value >= 1000) {
      return Math.floor(value / 1000) + "K";
    }
    return value;
  }
};

export const LIVE_CHART_COUNT = 10;
