import { useCallback, useState, useEffect,useRef } from 'react'


function App() {
  const [lengths, setLengths] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");
  const passwordRef =useRef(null);
  
  const passwordGenerator = useCallback(()=> {
    let value = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed) str+= "0123456789";
    if(charAllowed) str+= "!@#$%^&*()~`?+_-[]";

    for(let i=1;i<= lengths;i++){
      let index = Math.floor(Math.random() * str.length )
      value += str.charAt(index);
    }
    setPassword(value);

  },[lengths,numAllowed,charAllowed,setPassword])
  
  const copyPassword = useCallback(()=>{
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20)
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{passwordGenerator()},[lengths,numAllowed,charAllowed,passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg p-3 my-8 text-orange-500 bg-gray-300">
        <h1 className="text-black font-bold text-center m-3 ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden  bg-white">
          <input
            type="text"
            value={password}
            className="outline-none py-1 px-3 w-full"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          ></input>
          <button className="bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0 cursor-pointer"
          onClick={copyPassword}>
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-2">
          <div className="flex text-center gap-x-1  ">
            <input
              type="range"
              min={6}
              max={20}
              value={lengths}
              id='lengthId'
              className="cursor-pointer text-blue accent-blue-700"
              onChange={(e) => {
                setLengths(e.target.value);
              }}
            />
            <label htmlFor='lengthId'>Length: {lengths}</label>
          </div>
          <div className="flex text-center gap-x-1  ">
            <input 
            type="checkbox"
            defaultChecked={numAllowed}
            id='numId'
            className='accent-blue-700'
            onChange={()=>{
              setNumAllowed((prev)=> !prev)
            }}
             />
            <label htmlFor='numId'>Numbers</label>
          </div>
          <div className="flex text-center gap-x-1">
            <input 
              type='checkbox'
              defaultChecked={charAllowed}
              id='charId'
              className='accent-blue-700'
              onChange={()=>{
                setCharAllowed((prev)=>!prev);
              }}
            />
            <label htmlFor='charId'>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
