import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../utils/navSlice";
import { json, useSearchParams } from "react-router-dom";
import CommentBox from "./CommentBox";
import LiveChat from "./LiveChat";
import { youtube_api_key } from "../utils/constant";
import WatchVideoDetails from "./WatchVideoDetails";

const WatchVideo = () => {
  const [loadvideo] = useSearchParams();
  const videoId = loadvideo.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
    fetchData();
  }, []);

  const [videoTitle, setVideoTitle] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&regionCode=IN&key=${youtube_api_key}`
    );
    const jsonData = await data.json();
    console.log(jsonData.items[0]);
    if (jsonData.items && jsonData.items.length > 0) {
      setVideoTitle(jsonData.items[0]);
    } else {
      console.log("No items found in the response.");
    }
  };
  return (
    <div className="w-full">
      <div className="flex ">
        <div className="m-5 ">
          <iframe
          className="rounded-md"
            width="800"
            height="450"
            src={"https://www.youtube.com/embed/" + videoId}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full h-80">
          <LiveChat name="pratik" data="awesome video" />
        </div>
      </div>
    <div className="mt-0 ml-5">
      <WatchVideoDetails data={videoTitle} />
      </div>
      <CommentBox />
    </div>
  );
};

export default WatchVideo;
