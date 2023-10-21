import styled from 'styled-components';
import Kraken from './components/Kraken';
import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
`;

const ModalBackdrop = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9998;
`;

function App() {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    // @ts-ignore
    window.showTKLModal = showModal;
  }, [showModal]);
  useEffect(() => {
    console.log('useEffect');
    // @ts-ignore
    window.setShowTKLModal = () => {
      console.log('setShowTKLModal');
      setShowModal(true);
    };

    return () => {
      // @ts-ignore
      window.setShowTKLModal = null;
    };
  }, []);

  return (
    showModal &&
    createPortal(
      <ModalContainer>
        <Kraken onClose={() => setShowModal(false)} />
        <ModalBackdrop onClick={() => setShowModal(false)} />
      </ModalContainer>,
      document.body
    )
  );
}

export default App;
