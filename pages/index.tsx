import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useContext, useState } from 'react';
import Image from 'next/image';
// internal imports
import {
  MainContaienr,
  Container,
  Flex,
  Card,
} from '../components/styled/Layout';
import { ButtonTr } from '../components/styled/Button';
import { GlobalState } from '../pages/_app';
import SearchBox from '../components/SearchBox';

interface PropType {
  info?: object | any;
  error?: string;
}

const Home: NextPage<PropType> = ({ info, error }) => {
  const { toggle, theme } = useContext(GlobalState);
  const [username, setUsername] = useState('');
  const [userInfo, setUserInfo] = useState(info ? info : null);
  const [errorMsg, setErrorMsg] = useState(error ? error : null);

  console.log(userInfo);

  // search handler
  const searchHandler = async () => {
    setErrorMsg(null);
    if (username !== '') {
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const parsedInfo = await res.json();
        if (parsedInfo.message) {
          setErrorMsg(parsedInfo.message);
          setUserInfo(null);
        } else {
          setUserInfo(parsedInfo);
        }
      } catch (err: any) {
        setErrorMsg(err.message);
        setUserInfo(null);
      }
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
            <h1>gitinfo</h1>

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

        {/* -------------------- user info --------------------- */}
        <Container>
          {errorMsg && <p>{errorMsg}</p>}
          {userInfo && (
            <Card>
              <Flex jc="space-between">
                <Image
                  src={userInfo.avatar_url}
                  alt={userInfo.login}
                  width="100"
                  height="100"
                />

                <div>
                  <h2>{userInfo.name}</h2>
                  <p>@{userInfo.login}</p>
                </div>
                <p>{new Date(userInfo.created_at).toDateString()}</p>
              </Flex>
            </Card>
          )}
        </Container>
      </MainContaienr>
    </>
  );
};

// static props to load initial user info
export const getStaticProps: GetStaticProps = async () => {
  let res = null;
  let error = null;
  try {
    const info = await fetch('https://api.github.com/users/swimshahriar');
    res = await info.json();
  } catch (err: any) {
    error = err.message;
  }

  return {
    props: {
      info: res,
      error,
    },
    revalidate: 10,
  };
};

export default Home;
