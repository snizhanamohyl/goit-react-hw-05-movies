import MovieList from "components/MovieList";
import { useEffect } from "react";
import { Suspense } from "react";
import { useState } from "react"
import { useSearchParams } from "react-router-dom";
import { fetchMovieByQuery } from "services/api";
import { Btn, Form, Input } from "./Movies.styled";

export default function Movies() {
    const [inputValue, setInputValue] = useState('');
    const [movies, setMovies] = useState(null);

    const [searchParams, setSearchParams] = useSearchParams();
    const movieQuery = searchParams.get("query") ?? "";


    const updateQueryString = (query) => {
        const nextParams = query !== "" ? { query } : {};
        setSearchParams(nextParams);
    };

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if (!inputValue) {
            alert("Please enter a search query to fing movies");
            return;
        }
        
        updateQueryString(inputValue);
        setInputValue('');    
    }

    useEffect(() => {
        const getMoviesByQuery = async () => {
            try {
                const movies = await fetchMovieByQuery(movieQuery); 
                setMovies(movies);
            } catch (error) {
                console.log(error);
            }
        }

        getMoviesByQuery()
    },[movieQuery])

    return <Suspense fallback={<h1>Loading...</h1>}>
        <Form onSubmit={onSubmit}>
            <Input type="text" value={inputValue} onChange={onChange} />
            <Btn type="submit">search</Btn>
        </Form>
        {movies !== null && (movies.length !== 0) && <MovieList movies={movies}></MovieList>}
    </Suspense>
}