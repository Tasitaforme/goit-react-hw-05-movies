import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { fetchMovieCast } from 'api/requests';
import posterPlaceholder from '../../images/poster-not-available.jpg';
import { CastLi, CastUl } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!movieId) return;
    const responseMovieCast = async () => {
      setLoading(true);
      try {
        const { cast } = await fetchMovieCast(movieId);

        setCast(cast);
        console.log(cast);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    responseMovieCast();
  }, [movieId]);

  return (
    <>
      <CastUl>
        {cast?.map(({ id, profile_path, name, original_name, character }) => (
          <CastLi key={id}>
            <img
              loading="lazy"
              width="150"
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/original${profile_path}`
                  : posterPlaceholder
              }
              alt={original_name || name}
            />
            
              <h3>{original_name || name}</h3>
              <h4>Character:</h4>
              <p>{character}</p>
            
          </CastLi>
        ))}
      </CastUl>

      {loading && <Loader />}
    </>
  );
};

export default Cast;
