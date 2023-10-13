import styled from 'styled-components';
import Kraken from './components/Kraken';
import usePostsStore from './stores/postsStore';
import { useEffect } from 'react';

const AppContainer = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.05);
  padding: 20px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function App() {
  const { bootUp } = usePostsStore();

  useEffect(() => {
    bootUp();
  }, []);

  return (
    <AppContainer>
      <Nav>
        <h3 style={{ cursor: 'pointer' }} onClick={bootUp}>
          The Kraken
        </h3>
      </Nav>
      <Kraken />
    </AppContainer>
  );
}

export default App;
