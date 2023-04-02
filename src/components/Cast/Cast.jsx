import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCreditsById } from "services/api";
import { CastList, CastListItem, Character, Name, Photo } from "./Cast.styled";

export default function Cast() {
    const [cast, setCast] = useState(null);

    const { movieId } = useParams();

    const getCast = async (movieId) => {
        if (!movieId) return;

        const cast = await fetchCreditsById(movieId);
        setCast(cast);
    }  

    useEffect(() => {
        getCast(movieId)
    }, [movieId])

    return <CastList>
        {cast?.map(actor => {
            const {character, name, profile_path: profilePath, id } = actor;
            return <CastListItem key={id}>
                <Photo src={`https://image.tmdb.org/t/p/w500/${profilePath}`} alt={name} width="120"/>
                <div>
                    <Name>{name}</Name>
                    <Character>{ character}</Character>
                </div>
            </CastListItem>
        })
        }
    </CastList>
}