import React, {useEffect, useState} from 'react';
import axios from 'axios'
import instance from "../axios";
import YouTube from "react-youtube";
import './Row.css';
import movieTrailer from 'movie-trailer';
const base_URL = 'https://image.tmdb.org/t/p/original/';

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] =useState([]);
    const [trailerUrl,setTrailerUrl] = useState("");

    useEffect(()=>{
        async function fetchData() {
           const request = await instance.get(fetchUrl);
            setMovies(request.data.results);
            return request
        }
        fetchData()
    },[fetchUrl]);

    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        }
    };
    const handleClick = (movie)=>{
        if (trailerUrl){
            setTrailerUrl("");
        }else {
            movieTrailer(movie?.name || "")
                .then((url)=>{
                    const urlParams =new URLSearchParams(new URL(url).search);
                    setTrailerUrl(urlParams.get("v"));
                })
                .catch((error)=>console.log(error))
        }
    };
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>(
                    <img
                        onClick={()=>handleClick(movie)}
                        key={movie.id}
                        className={`row__poster ${isLargeRow && "row__poster__large"}`}
                        src={`${base_URL}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
            {trailerUrl && <YouTube opts={opts} videoId={trailerUrl}/>}
        </div>
    );
}

export default Row;
















