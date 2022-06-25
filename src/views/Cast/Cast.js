import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieCast } from "service/fetchMovies";

export default function Cast() {const { movieId } = useParams();
    const [cast, setCast] = useState({});

    useEffect(() => {
        fetchMovieCast(movieId).then(res => {
            setCast(res.cast)
        }).catch(error => alert(error));
    }, [movieId])

    return (
        <>
            {(cast && cast.length)
                ? (<ul>
                    {cast.map(actor => (
                        <li key={actor.id}>
                            <img 
                                src={`https://image.tmdb.org/t/p/w300${actor.profile_path}`}
                                alt={actor.name}>
                            </img>
                            <p>Character: {actor.character}</p>
                            <p>{actor.name}</p>
                        </li>))}
                </ul>)
                : <p>Nothing here...</p> 
            }
        </>
    )
}