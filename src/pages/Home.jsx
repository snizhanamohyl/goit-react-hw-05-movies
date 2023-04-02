import MovieList from 'components/MovieList';
import { useEffect, useState } from 'react';
import {fetchTrendingMovies } from 'services/api';

export default function Home() {
    const [movies, setMovies] = useState([]);

    const getMovies = async() => {
        const movies = await fetchTrendingMovies();

        setMovies(movies);
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    return <div>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
    </div>
}