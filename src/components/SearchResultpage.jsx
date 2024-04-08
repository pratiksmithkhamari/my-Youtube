import React from "react";
import ResultPage from "./ResultPage";
import moment from "moment";
import { useParams } from "react-router-dom";

const SearchResultpage = ({ data }) => {
  const { thumbnails, channelTitle, title, description, publishedAt } =
    data?.snippet;
  
  return (
    <div className="w-full flex mt-2">
      <div className="min-w-[40%]">
        <img
          src={thumbnails.high.url}
          alt=""
          className="rounded-lg min-w-[100%]"
        />
      </div>
      <div className="w-[60%] p-4">
        <h1 className="text-bold text-2xl">{title}</h1>
        <div className="flex items-center gap-2">
          <span>233kviews</span>
          <span>• {moment(publishedAt).fromNow()}</span>
        </div>
        <div className="flex items-center gap-2">
          <img
            src="https://yt3.ggpht.com/eu051krrRNQMMi5h6ynfnvhFJzxzSKulJQ42g5v72MQ9Bvv8KdpNIa6yM-0iGpnDgSF0itAD=s68-c-k-c0x00ffffff-no-rj"
            alt=""
            className="h-5 w-5 rounded-full"
          />
          <h2 className="my-4">{channelTitle}</h2>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SearchResultpage;
