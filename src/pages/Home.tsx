import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../index.scss';

export default function Home() {
  return (
    <HelmetProvider>
      <div className="home">
        <Helmet>
          <title>Homepage</title>
        </Helmet>
        <h1 className="homeTitle">
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </HelmetProvider>
  );
}
