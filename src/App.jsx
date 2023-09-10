import { useState, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const handleCount = () => {
    setCount(parseInt(count) + 1);
  };
  const formCount = useRef();

  const handleEdit = () => {
    let angka = prompt("masukkan angka!");
    setCount(parseInt(angka));
  };

  return (
    <div className="bg-orange-300 w-screen h-screen flex justify-center items-center">
      <div>
        <input
          type="number"
          value={count}
          className="p-3 text-center outline-none rounded-md"
          ref={formCount}
        />
        <div className="flex justify-between">
          <button
            className="bg-red-500 p-3 font-bold text-white rounded-md m-1 outline-none border-b-4 active:border-b-0"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="bg-yellow-500 p-3 font-bold text-white rounded-md m-1 outline-none border-b-4 active:border-b-0"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-green-500 p-3 font-bold text-white rounded-md m-1 outline-none border-b-4 active:border-b-0"
            onClick={handleCount}
          >
            Count
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
