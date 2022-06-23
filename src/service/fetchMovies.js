const API_KEY = "eee74d93b5141c6c12502e44923a7011";

export function fetchTrending() {
    return (fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(new Error("Ничего не найдено"))
            }
            return res.json();
        })
    )
}

export function fetchMovieById(id) {
    return (fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(new Error("Ничего не найдено"))
            }
            return res.json();
        })
    )
}

export function fetchMovieCast(id) {
    return (fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(new Error("Ничего не найдено"))
            }
            return res.json();
        })
    )
}

export function fetchMovieReviews(id) {
    return (fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(new Error("Ничего не найдено"))
            }
            return res.json();
        })
    )
}

export function fetchMovieByName(name) {
    return (fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${name}&page=1&include_adult=false`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(new Error("Ничего не найдено"))
            }
            return res.json();
        })  
    )
}

// export function fetchPicture(picture, page) {
//     return (

//         fetch(`https://pixabay.com/api/?q=${picture}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
//             .then(response => {
//                 if (response.ok) { return response.json() }
//                 return Promise.reject(new Error("Ничего не найдено"))
//             })
//     )
// }

// useEffect(() => {
//     if (searchValue === "") { return };

//     setIsLoading(true);
//     fetchPicture(searchValue, page)
//         .then(response => {
//             setTotalPages(response.total);
//             setSearchPicture(prevState => [...prevState, ...response.hits]);
//         })
//         .catch(err => {
//             setError(err)
//             alert(error)
//         })
//         .finally(() => setIsLoading(false))
// }, [searchValue, page, error])