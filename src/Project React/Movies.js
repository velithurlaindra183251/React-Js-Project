import axios from 'axios'
import React, { useState } from 'react'
export default function Movies() {
    const [movies, setMovies] = useState([])
    const [name, setName] = useState("");
 
    const Movie = () => {
        axios.get(`https://www.omdbapi.com/?apikey=18eaeb4f&s=${name}&type=movie&page=1`)
            .then((res) => setMovies(res.data.Search))
    };
 
    const handler = (e) => {
        e.preventDefault();
        Movie();
    };
    return (
        <>
            <div className='container'>
                <h1 style={{fontFamily:'monospace'}}>All Movies Search Here</h1>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='searchBar text-center m-5'>
                            <input type='text' style={{fontFamily:'monospace',margin:'10px'}}placeholder='Search Movies' onChange={(e) => setName(e.target.value)} />
                            <button className="bg-success"style={{borderRadius:'30px',fontFamily:'monospace'}} onClick={(e) => handler(e)}>Search</button>
                        </div>
                    </div>
                </div>
                {movies ?
                    <div className='row'>
                        {movies.map((x) =>
                            <div className='col-md-4'>
                                <div class="card">
                                    <img src={x.Poster} class="card-img-top" alt="" width={300} height={350}/>
                                    <div class="card-body">
                                        <h2 class="card-title">{x.Title}</h2>
                                        <button className="movie-detailsBtn" style={{borderRadius:'30px',fontFamily:'monospace'}} >Details</button>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    : null}
            </div>
        </>
    );
};
 