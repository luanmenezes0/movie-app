import { ReactQueryDevtools } from 'react-query-devtools';

import Layout from './components/Layout';
import NowPlaying from './components/NowPlaying';
import Popular from './components/Popular';
import Genres from './components/Genres/index';

function App() {
  return (
    <Layout>
      <NowPlaying />
      <Genres />
      <Popular />
      <ReactQueryDevtools initialIsOpen={false} />
    </Layout>
  );
}

export default App;
