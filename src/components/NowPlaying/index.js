import React from 'react';
import { useQuery } from 'react-query';

import { client } from '../../utils/client';
import Carousel from '../Carousel/index';
import * as S from './styled';

const NowPlaying = () => {
  const { data, status } = useQuery('now playing', () =>
    client(`movie/now_playing`)
  );

  return (
    <S.Wrapper>
      <S.Title>Now Playing</S.Title>
      <Carousel fetching={status} movies={data} />
    </S.Wrapper>
  );
};

export default NowPlaying;
