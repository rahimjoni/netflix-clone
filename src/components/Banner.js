import React, {useEffect, useState} from 'react';
import axios from 'axios';
import requests from "../requests";
import instance from "../axios";
import './Banner.css'
const base_URL = 'https://image.tmdb.org/t/p/original/' //for image path need to use this url

function Banner(props) {
    const [movie,setMovie] = useState([])

    useEffect(()=> {
        async function fetchdata() {
            const request = await instance.get(requests.fetchNetflixOriginals)
            setMovie(
                request.data.results[
                    Math.floor(Math.random() * request.data.results.length)
                    ]);
            return request
        }

        fetchdata()
    },[])

    function truncate(str, n) {
        return str?.length>n?str.substr(0, n-1) + "...":str;
    }
    return (
        <div>
            <header className="banner" style={{
                backgroundSize:"cover",
                backgroundPosition:"center center",
                backgroundImage:`url(${base_URL}${movie?.backdrop_path})`
            }}>
                <div className="banner__content">
                    <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                    <div className="banner__buttons">
                        <button className="banner__button">Play</button>
                        <button className="banner__button">My List</button>
                    </div>
                    <h1 className="banner__description">
                        {truncate(movie?.overview, 150)}
                    </h1>
                </div>
                <div className="banner__fadebutton"></div>
            </header>
        </div>
    );
}

export default Banner;