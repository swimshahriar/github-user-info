import type { NextPage } from 'next';
import Head from 'next/head';
// internal imports
import { MainContaienr } from '../components/styled/Container';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>GitHub User Info</title>
        <meta
          name="description"
          content="This app allows users to find github user info"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainContaienr>
        <h1>Hello</h1>
      </MainContaienr>
    </>
  );
};

export default Home;
