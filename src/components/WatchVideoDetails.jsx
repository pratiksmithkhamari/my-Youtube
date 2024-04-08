import React, { useEffect, useState } from "react";
import {  value_converter, youtube_video_api } from "../utils/constant";
import { useSearchParams } from "react-router-dom";
import moment from "moment";

const WatchVideoDetails = ({ data }) => {
  console.log(data);

  const [showdesc,setShowdesc] = useState(false)
const [videoData,setVideoData] = useState()
const [param] = useSearchParams()
const id = param.get('v')
const {snippet} = data
//   useEffect(()=>{
// fetchData()
//   },[])
//   const fetchData = async ()=>{
//     const data = await fetch(youtube_video_api+"&q="+id)
//     const json = await data.json()
//     setVideoData(json)
//     console.log(json);
//   }
const handleDesc = ()=>{
  setShowdesc(!showdesc)
}
  return (
    <>

    <div>
      <h1 className="font-bold">{snippet?.localized?.title}</h1>
    </div>
    {/* video description */}
  <div className="flex my-3 items-center gap-2">
    <div className="flex my-3 items-center gap-4">
    <img src="" alt="" className="h-10 w-10 rounded-full"/>
  <div className="font-bold">{snippet?.channelTitle}</div>
  <button className="p-2  border border-black bg-black text-white rounded-3xl w-28">Subscribe</button>
  </div>
  </div>
  <div className="flex flex-col w-[70%] ">
    <div className="flex gap-3 whitespace-nowrap">
    <span className="font-bold">{value_converter(data?.statistics?.viewCount)} views</span>
    <span>{moment(snippet?.publishedAt).fromNow()}</span>
      {snippet?.tags.slice(0,3).map((tag,i)=>{
        return (
          <div className="flex items-center whitespace-nowrap ">
        <h2 className="flex text-blue-900" key={i}>#{tag}</h2>
        </div>)
      })}
    </div>
    {/* description */}
    <div className="my-3">
      {!showdesc && <h2 className="relative ">{snippet?.description}</h2>}
      <button className="absolute text-blue-900 font-semibold" onClick={handleDesc}>{showdesc ?"more...":"hide..."}</button>
    </div>
  </div>
  
  </>)
};

export default WatchVideoDetails;
