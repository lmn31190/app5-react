import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";

const LikePage = () => {
  const [listData, setListData] = useState([]);

  useEffect(() => {
    let moviesId = window.localStorage.movies 
    ? window.localStorage.movies.split(",") 
    : [];

    for (let i = 0; i < moviesId.length; i++) {
        axios.get(`https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d`)
        .then((res) => setListData((listData) => [...listData, res.data]))
    }
  }, []);

  return (
    <div className="user-list-page">
      <Header />
      <h2>
        Coups de coeur <span>❤️</span>
      </h2>
      <div className="result"></div>
    </div>
  );
};

export default LikePage;
