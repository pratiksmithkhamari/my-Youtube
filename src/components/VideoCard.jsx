import React from "react";
import { value_converter } from "../utils/constant";
import moment from "moment";

const VideoCard = ({ videoData }) => {
  const { snippet, statistics } = videoData;
  const { channelTitle, publishedAt, thumbnails, title } = snippet;

  return (
    <div className="p-2 m-4 max-w-96 rounded-lg shadow-lg bg-slate-100">
      <img
        className="rounded-lg min-w-[370px]"
        src={thumbnails?.medium?.url}
        alt="thumbnail"
      />
      <div className="flex gap-2">
        <div>
          <img
            src="avtar"
            className="h-10 w-10 mt-2 rounded-full border"
            alt=""
          />
        </div>
        <div>
          <h1 className="mt-1 font-[600] py-2">{title}</h1>
          <h2>{channelTitle}</h2>
          <span>{value_converter(statistics.viewCount)} views •</span>
          <span>{moment(publishedAt).fromNow()}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
