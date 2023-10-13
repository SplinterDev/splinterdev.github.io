import usePostsStore from '../stores/postsStore';
import ScheduleTable from './ScheduleTable';
import Spinner from './Spinner';
import styled from 'styled-components';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Kraken = () => {
  const { isReady, posts } = usePostsStore();

  if (!isReady) {
    return (
      <LoadingContainer>
        <Spinner />
        <span style={{ marginLeft: '5px' }}>Summoning the Kraken...</span>
      </LoadingContainer>
    );
  }

  console.log(posts);

  return <ScheduleTable />;
};

export default Kraken;
