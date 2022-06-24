import { useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { fetchTrending } from "service/fetchMovies";
import s from './HomeView.module.css'

export default function HomeView() {
    const location = useLocation();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetchTrending().then(result =>
            setMovies(result.results)).catch(error => alert(error));
    }, [])
    
    return (
        <div className={s.container}>
            <h2>Trending Today</h2>
            <ul className={s.li}>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                        <Link
                            to={`/movies/${movie.id}`}
                            state={{ from: location }}
                            className={s.link}>
                            {movie.title ?? movie.name}
                        </Link>
                    </li>  
                ))}
            </ul>
        </div>
    )
}
