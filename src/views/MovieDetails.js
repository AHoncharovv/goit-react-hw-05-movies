import { useParams, Link, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "service/fetchMovies";

export default function MovieDetails() {
    const params = useParams();
    const movieId = params.movieId;

    const [movieDetails, setMovieDetails] = useState({});
    const [genres, setGenres] = useState({});
    
    useEffect(() => {
        fetchMovieById(movieId).then(res => {
            setMovieDetails(res);
        }).catch(error => alert(error));
    }, [movieId]);

    useEffect(() => {
        setGenres(movieDetails.genres)
    }, [movieDetails]);
    
    return (
        <div>
            <h2>{movieDetails.title}</h2>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                alt={movieDetails.title}>
            </img>
            <p>{movieDetails.release_date && `Release date: ${movieDetails.release_date}`}</p>
            <h3>Overview</h3>
            <span>{movieDetails.overview}</span>
            <h3>Genres</h3>
            <ul>
                {(genres && genres.length) && genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <hr />
            <ul>
                <li><Link to="cast">Cast</Link></li>
                <li><Link to="reviews">Reviews</Link></li>
            </ul>
            <Outlet />
        </div>
        
    )
}