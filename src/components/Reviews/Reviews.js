import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchMovieReviews } from "service/fetchMovies";

export default function Reviews() {
    const { movieId } = useParams();
    const [reviews, seReviews] = useState({});

    useEffect(() => {
        fetchMovieReviews(movieId).then(res => {
           seReviews(res.results)
       }).catch(error => alert(error));
    }, [movieId])

    return (
        <ul>
            {(reviews && reviews.length)
                ?   reviews.map(review =>
                    <li key={review.id}>
                        <h3>{review.author}</h3>
                        <p>{review.content}</p>
                    </li>)
                :   <p>Nothing here</p>
            }
        </ul>
    )
}