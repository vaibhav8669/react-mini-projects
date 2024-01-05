import { useState } from "react";

function App() {
  const [color, setColor] = useState("gold");

  return (
    <div
      className="flex items-end justify-center w-screen h-screen pb-20"
      style={{ backgroundColor: color }}
    >
      <div className="flex gap-4 p-2 bg-white rounded-2xl">
        <button
          onClick={() => setColor("red")}
          className="bg-red-600 rounded-2xl"
        >
          Red
        </button>
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-600 rounded-2xl"
        >
          Blue
        </button>
        <button
          onClick={() => setColor("green")}
          className="bg-green-600 rounded-2xl"
        >
          Green
        </button>
        <button
          onClick={() => setColor("yellow")}
          className="bg-yellow-600 rounded-2xl"
        >
          Yellow
        </button>
        <button
          onClick={() => setColor("violet")}
          className="bg-violet-600 rounded-2xl"
        >
          Violet
        </button>
        <button
          onClick={() => setColor("orange")}
          className="bg-orange-600 rounded-2xl"
        >
          Orange
        </button>
      </div>
    </div>
  );
}

export default App;
