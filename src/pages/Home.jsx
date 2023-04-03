import MovieList from 'components/MovieList';
import { Suspense, useEffect, useState } from 'react';
import {fetchTrendingMovies } from 'services/api';

export default function Home() {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        try {
            const movies = await fetchTrendingMovies();
            setMovies(movies);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovies();
    }, [])
    
    return <Suspense fallback={<h1>Loading...</h1>}>
        <h2>Trending today</h2>
        <MovieList movies={movies} />
    </Suspense>
}