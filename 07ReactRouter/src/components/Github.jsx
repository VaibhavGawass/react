import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github(){

    // const [obj,setObj] = useState([])

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/VaibhavGawass")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data);
    //         setObj(data);
    //     })
    // },[])

    const obj = useLoaderData();

    return (
      <>
        <div className="bg-gray-600 text-white text-3xl p-4 text-center ">
          GitHub :{obj?.login}
          <img src={obj?.avatar_url} alt="profile Pic" width={300}/>
        </div>
      </>
    );
}

export const githubDataInfo = async ()=>{
  const data = await fetch("https://api.github.com/users/VaibhavGawass");
  return data.json();
}