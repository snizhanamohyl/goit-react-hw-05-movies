import MovieInfo from "components/MovieInfo/MovieInfo";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { fetchMovieById } from "services/api";

export default function MovieDetails() {
    const [movie, setMovie] = useState(null);

    const { movieId } = useParams();

    const getMovieInfo = async (movieId) => {
        if (!movieId) return;

        const movieInfo = await fetchMovieById(movieId);
        setMovie(movieInfo);
    }

    useEffect(() => {
        getMovieInfo(movieId);
    }, [movieId])

    return <>
        {movie && <><MovieInfo movie={movie} />
            <div>
                <h3>Additional information</h3>
                <ul>
                    <li><Link to={`/movies/${movieId}/cast`} >Cast</Link></li>
                    <li><Link to={`/movies/${movieId}/reviews`}>Reviews</Link></li>
                </ul>
            </div></>}
        <Outlet />
    </>
}