import React, {useEffect, useState} from 'react';
import axios from 'axios'
import instance from "../axios";

function Row({title,fetchUrl}) {
    const [movies,setMovies] =useState([])

    useEffect(()=>{
        async function fetchData() {
           const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
            return request
        }
        fetchData()
    },[fetchUrl])

    return (
        <div>
            <h2>{title}</h2>
        </div>
    );
}

export default Row;