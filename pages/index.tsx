import type { NextPage } from 'next';
import Head from 'next/head';
import { FiSun } from 'react-icons/fi';
import { useContext } from 'react';
// internal imports
import { MainContaienr, Container, Flex } from '../components/styled/Layout';
import { ButtonTr } from '../components/styled/Button';
import { GlobalState } from '../pages/_app';

const Home: NextPage = () => {
  const { toggle } = useContext(GlobalState);

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

            {/* --------------------- theme switcher ----------------- */}
            <ButtonTr onClick={toggle}>
              <Flex>
                <p>Light</p>
                <FiSun />
              </Flex>
            </ButtonTr>
          </Flex>
        </Container>
      </MainContaienr>
    </>
  );
};

export default Home;
