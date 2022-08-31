import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./styles/Searched.css";

function Searched() {
  let params = useParams();
  // const [endPoint, setEndPoint] = useState("");
  const [container, setContainer] = useState([]);
  const [container2, setContainer2] = useState([]);
  const fetchData = (endPoint) => {
    const options = {
      method: "GET",
      url: "https://shazam.p.rapidapi.com/search",
      params: {
        term: endPoint,
        locale: "en-US",
        offset: "0",
        limit: "5",
      },
      headers: {
        "X-RapidAPI-Key": process.env.REACT_APP_SHAZAM_API,
        "X-RapidAPI-Host": "shazam.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        const data = response.data;
        setContainer(data.tracks.hits);
        setContainer2(data.artists.hits);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData(params.searchParam);
  }, [params.searchParam]);

  return (
    <div className="searchedSection">
      <div>
        <h2>Songs</h2>
        {container.map((item) => {
          return (
            <div className="trackCard">
              <a href={item.track.url} target="_blank">
                <img
                  src={item.track.images.coverart}
                  className="cardImage"
                  alt="pic here"
                />
              </a>
              <h4>{item.track.title}</h4>
            </div>
          );
        })}
      </div>
      <div>
        <h2>Artists</h2>
        {container2.map((item) => {
          return (
            <div className="trackCard">
              <a href={item.artist.weburl} target="_blank">
                <img
                  src={item.artist.avatar}
                  className="cardImage"
                  alt="pic here"
                />
              </a>
              <h4>{item.artist.name}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Searched;
