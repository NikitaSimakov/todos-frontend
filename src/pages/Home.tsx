import { Helmet, HelmetProvider } from 'react-helmet-async';
const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: '500',
    fontSize: '48',
    alignText: 'center',
  },
};

export default function Home() {
  return (
    <HelmetProvider>
      <div style={styles.container}>
        <Helmet>
          <title>Homepage</title>
        </Helmet>
        <h1 style={styles.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </HelmetProvider>
  );
}
