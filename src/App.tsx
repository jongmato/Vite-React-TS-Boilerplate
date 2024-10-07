import { useState } from "react";

import viteLogo from "/vite.svg";

import reactLogo from "./assets/react.svg";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="mb-3 h-10 w-10" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="mb-3 h-10 w-10" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="m-2 rounded-sm border border-red-200 p-4">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="mt-3 text-lg font-semibold">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
