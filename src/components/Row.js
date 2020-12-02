import React, {useEffect, useState} from 'react';
import axios from 'axios'
import instance from "../axios";
import './Row.css'
const base_URL = 'https://image.tmdb.org/t/p/original/' //for image path need to use this url

function Row({title,fetchUrl,isLargeRow}) {
    const [movies,setMovies] =useState([]) //use state for get and set value

    useEffect(()=>{
        async function fetchData() {
           const request = await instance.get(fetchUrl) //axios request for data
            setMovies(request.data.results) //set value which data was get from hit axios
            return request
        }
        fetchData()
    },[fetchUrl]) //for run several time
console.log(movies)
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className="row__posters">
                {movies.map(movie =>( //array to single data convert
                    <img
                        key={movie.id}
                        className="row__poster"
                        src={`${base_URL}${isLargeRow?movie.poster_path:movie.backdrop_path}`}
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    );
}

export default Row;