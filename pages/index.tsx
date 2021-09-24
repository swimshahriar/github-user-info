import type { NextPage } from 'next';
import Head from 'next/head';
import {FiSun} from 'react-icons/fi'
// internal imports
import { MainContaienr, Container, Flex } from '../components/styled/Layout';

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
        <Container>
          <Flex jc="space-between">
            <h1>devfinder</h1>
            <Flex>
              <p>Light</p>
              <FiSun/>
            </Flex>
          </Flex>
        </Container>
      </MainContaienr>
    </>
  );
};

export default Home;
