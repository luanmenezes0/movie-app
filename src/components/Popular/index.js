import { useQuery } from 'react-query';

import { client } from '../../utils/client';
import Carousel from '../Carousel/index';
import * as S from './styled';

const NowPlaying = () => {
  const { data, status } = useQuery('popular', () =>
    client(`movie/popular`)
  );

  return (
    <S.Wrapper>
      <S.Title>Popular</S.Title>
      <Carousel fetching={status} movies={data} />
    </S.Wrapper>
  );
};

export default NowPlaying;
