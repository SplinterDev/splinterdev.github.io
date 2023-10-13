import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>
      Click me {count}
    </button>
  );
}

export default App;
