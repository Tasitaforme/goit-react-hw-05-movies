import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieReviews } from 'api/requests';
import profilePlaceholder from '../../images/profile-not-available.jpg';
import { ReviewUserImg, ReviewItem, ReviewUserInfo, ReviewUl } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();

  const [reviews, setReviews] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const responseMovieReviews = async () => {
      setLoading(true);
      try {
        const { results } = await fetchMovieReviews(movieId);

        setReviews(results);
        console.log(results);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    responseMovieReviews();
  }, [movieId]);

  return (
    <>
      {!loading && reviews?.length === 0 && (
        <h3 style={{ color: 'red', marginTop: '28px' }}>
          Sorry... There is no review information for this movie yet.
        </h3>
      )}
      <ReviewUl>
        {reviews?.map(
          ({
            id,
            updated_at,
            content,
            author,
            author_details: { name, avatar_path },
          }) => (
            <ReviewItem key={id}>
              <ReviewUserImg
                loading="lazy"
                width="100"
                src={
                  avatar_path
                    ? avatar_path.includes('https')
                      ? avatar_path.replace('/https', 'https')
                      : `https://image.tmdb.org/t/p/original${avatar_path}`
                    : profilePlaceholder
                }
                alt={author || name}
              />
              <ReviewUserInfo>
                <h4>{author || name}</h4>
                <p>{updated_at.slice(0, 10)}</p>
                <p>{content}</p>
              </ReviewUserInfo>
            </ReviewItem>
          )
        )}
      </ReviewUl>
      {loading && <Loader />}
    </>
  );
};

export default Reviews;
