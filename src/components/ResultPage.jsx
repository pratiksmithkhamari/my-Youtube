import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { SEARCH_API_RESULT } from "../utils/constant";
import SearchResultpage from "./SearchResultpage";

const ResultPage = () => {
  const [searchText, setSearchText] = useState([]);

  const [myParam] = useSearchParams();
  const searchQuery = myParam.get("search_query");

  useEffect(() => {
    searchText && getResult();
    console.log(searchText);
  }, [searchQuery]);

  const getResult = async () => {
    const data = await fetch(SEARCH_API_RESULT + searchQuery);
    const json = await data.json();
    console.log(json);
    setSearchText(json?.items);
  };

  return (
    <div className="">
      {searchText?.map((searchData) => {
        return (
          <Link
            to={"/watch?v=" + searchData?.id?.videoId}
            key={searchData?.id?.videoId}
          >
            <SearchResultpage data={searchData} />
          </Link>
        );
      })}
    </div>
  );
};

export default ResultPage;
