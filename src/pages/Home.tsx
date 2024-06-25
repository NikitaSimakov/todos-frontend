import { Helmet } from 'react-helmet-async';
import '../index.scss';

export default function Home() {
  return (
    <div className="home">
      <Helmet title="Homepage" />
      <h1 className="homeTitle">
        Task manager welcome page{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
    </div>
  );
}
