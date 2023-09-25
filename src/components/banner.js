import React, { useEffect, useState } from 'react'
import './banner.css';
import axios from '../axios';
import requests from '../Requests';

function Banner() {

  const [movie, setMovie] = useState([]);

  useEffect(()=> {
    async function fetchData(){
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1 )
        ]
      )
      return request
    }
    fetchData();
  }, [])

  function truncate(string, n){
      return string?.length > n ? string.substr(0, n-1) + "..." : string
  }

let movieDescription = truncate(movie.overview, 200)

  return (
    <div className='banner-container'>
      <header className='banner' style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        }}>
        <div className='banner-contents'>
            <h1 className='banner-title text-shadow'>{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className='banner-buttons'>
                <button className='banner-btn clickable'>Play</button>
                <button className='banner-btn clickable'>More Info</button>
            </div>
            <h1 className='banner-description text-shadow'>{movieDescription}</h1>
        </div>
        <div className='banner-fade-bottom'></div>
    </header>
    </div>
    
  )
}

export default Banner