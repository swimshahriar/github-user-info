import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { FiSun, FiMoon } from 'react-icons/fi';
import { FaMapMarkerAlt, FaTwitter, FaLink, FaBuilding } from 'react-icons/fa';
import { useContext, useState } from 'react';
import Image from 'next/image';
// internal imports
import {
  MainContaienr,
  Container,
  Flex,
  Card,
  InnerCard,
  SocialContainer,
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
  const [isLoading, setIsLoading] = useState(false);

  // search handler
  const searchHandler = async () => {
    setErrorMsg(null);
    if (username !== '') {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.github.com/users/${username}`);
        const parsedInfo = await res.json();

        if (parsedInfo.message) {
          setErrorMsg(parsedInfo.message);
          setUserInfo(null);
        } else {
          setUserInfo(parsedInfo);
        }
        setIsLoading(false);
      } catch (err: any) {
        setErrorMsg(err.message);
        setUserInfo(null);
        setIsLoading(false);
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
            isLoading={isLoading}
          />
        </Container>

        {/* -------------------- user info --------------------- */}
        <Container>
          {errorMsg && <p>{errorMsg}</p>}
          {isLoading && <h4>Loading...</h4>}

          {userInfo && !isLoading && (
            <Card>
              <Flex jc="space-between">
                <Image
                  src={userInfo.avatar_url}
                  alt={userInfo.login}
                  width="100"
                  height="100"
                />

                <div>
                  <h2>{userInfo.name || 'no name'}</h2>
                  <p>@{userInfo.login || 'no username'}</p>
                </div>
                <p>{new Date(userInfo.created_at).toDateString()}</p>
              </Flex>
              <Flex>
                <p>{userInfo.bio || 'no bio added.'}</p>
              </Flex>

              {/* -------------------- inner card -------------------- */}
              <InnerCard>
                <Flex jc="space-between">
                  <div>
                    <p>Repos</p>
                    <p>{userInfo.public_repos}</p>
                  </div>
                  <div>
                    <p>Followers</p>
                    <p>{userInfo.followers}</p>
                  </div>
                  <div>
                    <p>Following</p>
                    <p>{userInfo.following}</p>
                  </div>
                </Flex>
              </InnerCard>

              {/* ---------------------- address and social --------------------- */}
              <SocialContainer>
                <Flex jc="space-between">
                  <p>
                    <span>
                      <FaMapMarkerAlt />
                    </span>
                    {userInfo.location || 'no location'}
                  </p>
                  <a
                    href={`https://twitter.com/${userInfo.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>
                      <FaTwitter />
                    </span>
                    {userInfo.twitter_username || 'no username'}
                  </a>
                </Flex>
                <Flex jc="space-between">
                  <a href={userInfo.blog} target="_blank" rel="noreferrer">
                    <span>
                      <FaLink />
                    </span>
                    {userInfo.blog || 'no website'}
                  </a>
                  <p>
                    <span>
                      <FaBuilding />
                    </span>
                    {userInfo.company || 'no company'}
                  </p>
                </Flex>
              </SocialContainer>
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
