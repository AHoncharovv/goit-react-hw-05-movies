import { useEffect } from "react"
import { fetchTrending } from "service/fetchMovies"

export default function HomeView() {
    useEffect(() => {
        fetchTrending();
    }, [])
    return (
        <h2>Trending Today</h2>
    )
}