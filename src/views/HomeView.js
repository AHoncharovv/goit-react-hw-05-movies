import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { fetchTrending } from "service/fetchMovies";

export default function HomeView() {
    

    const [movies, setMovies] = useState([]);


    useEffect(() => {
        fetchTrending().then(result =>
            setMovies(result.results)).catch(error => alert(error));
    }, []);
    return (
        <>
            <h2>Trending Today</h2>
            <ul>
                {movies && movies.map(movie => (
                    <li key={movie.id}>
                        <Link to={`/movies/${movie.id}`}>
                            {movie.title ?? movie.name}
                        </Link>
                    </li>  
                ))}
            </ul>
        </>
    )
}

// {/* <ul className={s.imageGallery}>
//             {searchPicture &&
//                 searchPicture.map((picture) => (  
//                     <ImageGalleryItem
//                         picture={picture}
//                         key={picture.id}
//                         clickedUrl={handleClick}
//                     />
//             ))}
//         </ul>  */}