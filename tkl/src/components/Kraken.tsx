import { useEffect } from 'react';
import usePostsStore from '../stores/posts';
import ScheduleTable from './ScheduleTable';
import styled from 'styled-components';
import Loader from './Loader';

const KrakenContainer = styled.div`
  position: fixed;
  background-color: white;
  z-index: 9999;
  width: 80%;
  height: 80%;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 20px;
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const CloseButton = styled.button`
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

type Props = {
  onClose: () => void;
};

const Kraken = ({ onClose }: Props) => {
  const { isReady, bootUp } = usePostsStore();

  useEffect(() => {
    bootUp();
  }, []);

  if (!isReady) {
    return (
      <KrakenContainer>
        <Loader message="Summoning the Kraken..." />
      </KrakenContainer>
    );
  }

  return (
    <KrakenContainer>
      <Header>
        <h1>The Kraken Bot</h1>
        <CloseButton onClick={onClose}>X</CloseButton>
      </Header>
      <Container>
        <ScheduleTable />
      </Container>
    </KrakenContainer>
  );
};

export default Kraken;
