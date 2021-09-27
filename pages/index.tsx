import type { NextPage } from 'next';
import Head from 'next/head';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useContext, useState } from 'react';
// internal imports
import { MainContaienr, Container, Flex } from '../components/styled/Layout';
import { ButtonTr } from '../components/styled/Button';
import { GlobalState } from '../pages/_app';
import SearchBox from '../components/SearchBox';

const Home: NextPage = () => {
  const { toggle, theme } = useContext(GlobalState);
  const [username, setUsername] = useState('');
  const [userInfo, setuserInfo] = useState(null);

  // search handler
  const searchHandler = async () => {
    console.log(userInfo);

    if (username !== '') {
      const res = await fetch(`https://api.github.com/users/${username}`);
      const parsedInfo = await res.json();
      setuserInfo(parsedInfo);
    }
  };

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
        {/* -------------------- header ------------------- */}
        <Container>
          <Flex jc="space-between">
            <h1>devfinder</h1>

            {/* --------------------- theme switcher ----------------- */}
            <ButtonTr onClick={toggle}>
              <Flex>
                {theme === 'dark' ? (
                  <>
                    <p>Light</p>
                    <FiSun />
                  </>
                ) : (
                  <>
                    <p>Dark</p>
                    <FiMoon />
                  </>
                )}
              </Flex>
            </ButtonTr>
          </Flex>
        </Container>

        {/* -------------------- search area ------------------- */}
        <Container>
          <SearchBox
            username={username}
            setUsername={setUsername}
            searchHandler={searchHandler}
          />
        </Container>
      </MainContaienr>
    </>
  );
};

export default Home;
