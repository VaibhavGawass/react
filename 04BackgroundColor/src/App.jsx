import { useState } from 'react'


function App() {
  const [wall, setWall] = useState('olive')
  
  return (
    <>
      <div
        className="w-screen h-screen flex justify-center"
        style={{ backgroundColor: wall }}
      >
        <div
          className=" w-lg m-10 p-3 flex flex-row justify-evenly self-end rounded-xl "
          style={{ backgroundColor: "lavender" }}
        >
          <button
            onClick={() => setWall("red")}
            className="rounded-lg p-2 text-amber-50"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
            onClick={() => setWall("blue")}
            className="rounded-lg p-2 text-amber-50"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
            onClick={() => setWall("green")}
            className=" rounded-lg p-2 text-amber-50"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setWall("yellow")}
            className=" rounded-lg p-2 text-amber-50"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setWall("black")}
            className=" rounded-lg p-2 text-amber-50"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App
