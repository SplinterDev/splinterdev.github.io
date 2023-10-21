import { useEffect } from 'react';
import usePostsStore from '../stores/posts';
import ScheduleTable from './ScheduleTable';
import Spinner from './Spinner';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

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
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

type Props = {
  onClose: () => void;
};

const Kraken = ({ onClose }: Props) => {
  const { isReady, posts, bootUp } = usePostsStore();

  useEffect(() => {
    bootUp();
  }, []);

  if (!isReady) {
    return (
      <KrakenContainer>
        <LoadingContainer>
          <Spinner />
          <span style={{ marginLeft: '5px' }}>Summoning the Kraken...</span>
        </LoadingContainer>
      </KrakenContainer>
    );
  }

  console.log(posts);

  return (
    <KrakenContainer>
      <CloseButton onClick={onClose}>X</CloseButton>
      <ScheduleTable />
    </KrakenContainer>
  );
};

export default Kraken;
