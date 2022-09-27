import React, { useState } from 'react';

import { Card } from '@/components';

type Props = {};

const App = (props: Props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div>
      <Card
        isFlipped={isFlipped}
        sideA={
          <>
            yo{' '}
            <button onClick={() => setIsFlipped((prev) => !prev)}>asf</button>
          </>
        }
        sideB={<>ya</>}
      />
    </div>
  );
};

export default App;
