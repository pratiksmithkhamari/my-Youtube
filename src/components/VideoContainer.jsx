import React, { useEffect, useState } from "react";
import { youtube_video_api } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link, json } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allVideo } from "../utils/navSlice";
import store from "../utils/store";
import MainShimmer from "./MainShimmer";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const selector = useSelector((store) => store.navBar.home);
  useEffect(() => {
    getYoutubeVideo();
  }, []);

  const [videos, setVideos] = useState([]);

  const getYoutubeVideo = async () => {
    const fetchData = await fetch(youtube_video_api);
    const json = await fetchData.json();
    console.log(json);

    dispatch(allVideo(json?.items));
  };
  if (selector.length === 0) {
    return <MainShimmer />;
  }
  return (
    <div className="flex flex-wrap justify-center gap-4">
      {selector.map((video) => {
        return (
          <Link to={"/watch?v=" + video.id}>
            <VideoCard videoData={video} key={video.catagoryId} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
