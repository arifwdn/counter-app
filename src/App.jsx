import { useState, useRef } from "react";
import "./App.css";

function App() {
  const STORAGE_KEY = "counter_app";
  const handleCount = () => {
    setCount(parseInt(count) + 1);
    saveToStorage();
  };
  const formCount = useRef();

  const handleEdit = () => {
    let angka = parseInt(prompt("masukkan angka!"));
    // console.log(` Nilai Angka : ${angka}, tipe data angka : ${typeof angka}`);
    if (!isNaN(angka)) setCount(angka);
    saveToStorage();
  };

  const isStorageExist = () => {
    if (typeof Storage === undefined) return false;

    return true;
  };

  const loadStorageData = () => {
    if (!isStorageExist) alert("Your browser does not support local Storage");

    let data = localStorage.getItem(STORAGE_KEY);
    data = data === null ? 0 : data;
    return data;
  };

  const [count, setCount] = useState(loadStorageData());

  const saveToStorage = () => {
    if (!isStorageExist) alert("Your browser does not support local Storage");

    localStorage.setItem(STORAGE_KEY, count);
  };

  return (
    <div className="bg-orange-500 w-screen h-screen flex justify-center items-center">
      <div className="bg-white p-3 rounded-md">
        <input
          type="number"
          value={count}
          className="p-3 text-center outline-none rounded-md bg-white font-bold text-lg"
          ref={formCount}
          disabled
        />
        <div className="flex flex-col">
          <button
            className="bg-red-500 p-3 w-full font-bold text-white rounded-md m-1 border-b-red-300 outline-none border-b-4 active:border-b-0"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
          <button
            className="bg-yellow-500 p-3 w-full font-bold text-white rounded-md m-1 border-b-yellow-300 outline-none border-b-4 active:border-b-0"
            onClick={handleEdit}
          >
            Edit
          </button>
          <button
            className="bg-green-500 p-3 w-full h-[400px] font-bold text-white rounded-md m-1 border-b-green-300 outline-none border-b-4 active:border-b-0"
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
