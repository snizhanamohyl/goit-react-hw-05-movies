import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { fetchReviewsById } from "services/api";
import { ReviewsList, ReviewsListItem, User } from "./Reviews.styled";
import { Suspense } from "react";

export default function Reviews() {
    const [reviews, setReviews] = useState(null);

    const { movieId } = useParams();
    
    const getReviews = async (movieId) => {
        if (!movieId) return;

        try { 
            const reviews = await fetchReviewsById(movieId);
            setReviews(reviews);
        } catch (error) {
            console.log(error)
        }
    } 

    useEffect(() => {
        getReviews(movieId)
    }, [movieId])

    const isReviews = (reviews && reviews.length !== 0);

    return <Suspense>
        <ReviewsList>
            {isReviews ? reviews.map(({ author, content, id }) => <ReviewsListItem key={id}>
                <User>User: {author}</User>
                <p>{content}</p>
            </ReviewsListItem>) : <p>We don't have any reviews for this movie</p>} 
        </ReviewsList>
    </Suspense>
}