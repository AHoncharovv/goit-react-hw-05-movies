import { useState, useEffect } from "react";
import { useSearchParams, Link, useLocation } from "react-router-dom";
import { fetchMovieByName } from "service/fetchMovies";

export default function MoviesView() {
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const movieQuery = searchParams.get("query");

    const [searchValue, setSearchValue] = useState('');
    const [searchMovie, setSearchMovie] = useState({});
    
    const handleSubmit = event => {
        event.preventDefault();
        setSearchParams({ query: searchValue }); 
    }

    useEffect(() => {
        if (!movieQuery) { return }
        fetchMovieByName(movieQuery).then(res => {
            setSearchMovie(res.results)
        }).catch(error => alert(error));
    }, [movieQuery])

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder=""
                    onChange={e=>{setSearchValue(e.target.value.toLowerCase())}}
                    value={searchValue}
                />
                <span>
                    <button type="submit">
                        Search  
                    </button>
                </span>
            </form>
            <ul>
                {(searchMovie && searchMovie.length) && searchMovie.map(movie => (
                    <li key={movie.id}>
                        <Link
                            to={`/movies/${movie.id}`}
                            state={{from: location }}>
                            {movie.title ?? movie.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}