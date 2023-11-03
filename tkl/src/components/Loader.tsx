import styled from 'styled-components';
import Spinner from './Spinner';

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

type Props = {
  message?: string;
};

const Loader = ({ message }: Props) => {
  return (
    <LoadingContainer>
      <Spinner />
      {!!message && <span style={{ marginLeft: '5px' }}>{message}</span>}
    </LoadingContainer>
  );
};

export default Loader;
