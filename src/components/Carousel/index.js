import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { ChevronLeft as Left } from '@styled-icons/boxicons-regular';
import { ChevronRight as Right } from '@styled-icons/boxicons-regular';
import { StarFill as Star } from '@styled-icons/bootstrap/StarFill';

import * as S from './styled';
import { useState, useEffect } from 'react';

export const Carousel = props => {
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  }, [windowWidth]);

  const { movies, fetching } = props;

  const buttonStyles = {
    backgroundColor: 'transparent',
    outline: 'none',
    border: 'none',
  };

  return (
    <CarouselProvider
      visibleSlides={7}
      naturalSlideWidth={100}
      naturalSlideHeight={200}
      totalSlides={movies?.results.length}
    >
      <S.ButtonsWrapper>
        <ButtonBack style={buttonStyles}>
          <Left style={{ color: 'white', height: '2.5rem' }} />{' '}
        </ButtonBack>
        <ButtonNext style={buttonStyles}>
          <Right style={{ color: 'white', height: '2.5rem' }} />{' '}
        </ButtonNext>
      </S.ButtonsWrapper>
      <Slider style={{ height: '22rem' }}>
        {fetching === 'success'
          ? movies.results.map((movie, idx) => (
              <Slide index={idx} key={movie.id}>
                <S.Card>
                  <S.Image>
                    <S.Img
                      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                      alt={movie.title}
                    />
                  </S.Image>
                  <S.Rating>
                    <Star
                      style={{
                        height: '0.8rem',
                        color: 'yellow',
                        paddingRight: '5px',
                        verticalAlign: 'middle',
                      }}
                    />
                    {movie.vote_average}
                  </S.Rating>
                  <S.TitleWrapper>
                    <S.Title>{movie.title}</S.Title>
                  </S.TitleWrapper>
                </S.Card>
              </Slide>
            ))
          : fetching}
      </Slider>
    </CarouselProvider>
  );
};

export default Carousel;
