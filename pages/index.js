import Head from 'next/head';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Results from '../components/Results';
import requests from '../utils/requests';

const Home = ({ results }) => {
  return (
    <div>
      <Head>
        <title>Hulu Clone</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <Header />
      <Navbar />
      <Results results={results} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then(res => res.json());

  return {
    props: {
      results: request.results
    },
  };
};

export default Home;