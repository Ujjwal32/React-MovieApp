import React,{useState,useEffect} from 'react';
import API_KEY from '../apikey';
import {useParams} from 'react-router-dom'
import SingleMovie from './SingleMovie';


function Moviepage( {url,isMovie} ){
    const [movie,setMovie] = useState({})
    const [isLoading,setLoading] = useState(true)
    const {id} = useParams();

    useEffect(() => {
        console.log('hey')
        setLoading(true); 
        fetch(`${url}/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res => res.json())
        .then(data => {
            setMovie(data);
            console.log(data)
            setLoading(false);
        })
    },[url,id])
    console.log(movie)
    let movies = '';
    if(isLoading) {
       movies = 'Loading! Plz Wait'
    } else {
        movies = <SingleMovie data = {movie} isMovie={isMovie}/>
    }

    return(
        <div>{movies}</div>
    )
}

export default Moviepage;