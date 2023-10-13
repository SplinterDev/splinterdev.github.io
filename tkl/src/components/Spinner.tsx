import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  border: 0.2rem solid #ccc;
  border-top-color: #0077cc;
  animation: ${spin} 1s ease-in-out infinite;
`;

export default Spinner;
