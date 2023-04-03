import PropTypes from 'prop-types';
import { Details, Info, Img } from "./MovieInfo.styled";

export default function MovieInfo({movie}) {    
    const {poster_path: posterPath, title, release_date: releaseDate, overview, vote_average: voteAverage, genres} = movie;

    const getFullYear = (dateString) => {
        const date = new Date(dateString);
        return date.getFullYear();
    }
    return <Details>
        <Img src={`https://image.tmdb.org/t/p/original/${posterPath}`} alt={title} height='348'/>
        <Info>
            <h2>{title} ({getFullYear(releaseDate)})</h2>
            <p>User Score: <span>{voteAverage}</span></p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p>{ genres?.reduce((acc, genre) => acc + genre.name + ' ', '')}</p>
        </Info>
    </Details>
}

MovieInfo.propTypes = {
    movie: PropTypes.object.isRequired,
}