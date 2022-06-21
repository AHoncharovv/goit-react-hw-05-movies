const API_KEY = "eee74d93b5141c6c12502e44923a7011";

export function fetchTrending() {
    fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        .then(res => {
            if (!res.ok) {
                return new Error("Not Found")
            }
            return res.json()
        })
        .then(response => console.log(response.results))
}
        
//         if (res.status === 200) {
//         return res.json();
//         }
//          else {
//         return new Error();
//         }
// }
    
// onLoaderVisible();
// const { data } = await axios(
//     `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en&page=${page}`,