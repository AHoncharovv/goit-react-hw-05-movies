import { useParams, NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchMovieById } from "service/fetchMovies";
import s from './MovieDetails.module.css';

export default function MovieDetails() {
    const location = useLocation();
    let navigate = useNavigate() ;
    
    const params = useParams();
    const movieId = params.movieId;

    const [movieDetails, setMovieDetails] = useState({});
    const [genres, setGenres] = useState({});
    
    useEffect(() => {
        fetchMovieById(movieId).then(res => {
            setMovieDetails(res);
        }).catch(error => alert(error));
    }, [movieId])

    useEffect(() => {
        setGenres(movieDetails.genres)
    }, [movieDetails])

    const goBack = () => {
        if (location.state === null){ return navigate('/', { replace: true }) }
        navigate(location.state.from.pathname, { replace: true });
    }
    
    return (
        <div className={s.container}>
            <button type='button' onClick={goBack} className={s.button}>Go back</button>
            <h2>{movieDetails.title}</h2>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`}
                alt={movieDetails.title}
                className={s.img}>
            </img>
            <p>{movieDetails.release_date && `Release date: ${movieDetails.release_date}`}</p>
            <h3>Overview</h3>
            <span>{movieDetails.overview}</span>
            <h3>Genres</h3>
            <ul className={s.li}>
                {(genres && genres.length) && genres.map(genre => (
                    <li key={genre.id}>{genre.name}</li>
                ))}
            </ul>
            <hr />
            <ul className={s.li}>
                <li className={s.link}>
                    <NavLink to="cast"
                        className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}>
                        Cast
                    </NavLink></li>
                <li className={s.link}>
                    <NavLink to="reviews"
                        className={({ isActive }) => (isActive ? `${s.activeLink}` : `${s.link}`)}>
                        Reviews
                    </NavLink></li>
            </ul>
            <Outlet />
        </div>     
    )
}