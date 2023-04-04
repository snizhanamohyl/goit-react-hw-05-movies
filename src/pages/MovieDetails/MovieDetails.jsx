import MovieInfo from "components/MovieInfo/MovieInfo";
import { Suspense } from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieById } from "services/api";
import { BackBtn, Wrap } from "./MovieDetails.styled";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);
    const { movieId } = useParams();
    const location = useRef(useLocation());
    
    const getMovieInfo = async (movieId) => {
        if (!movieId) return;
        
        try {
            const movieInfo = await fetchMovieById(movieId);
            setMovie(movieInfo);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getMovieInfo(movieId);
    }, [movieId])

    return <>
        {movie && <Wrap>
            { console.log(location.current.state)}
            <BackBtn to={location.current.state ? location.current.state : '/'}>Go Back</BackBtn>
            <MovieInfo movie={movie} />
            </Wrap>}
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to={`/movies/${movieId}/cast`} >Cast</Link></li>
                    <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
                </ul>
            </div>
        <Suspense><Outlet /></Suspense>
    </>
}