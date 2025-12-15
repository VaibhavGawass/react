import { useState } from 'react'
import Card from './Card.jsx'
import './App.css'

function App() {
  const users = {
    ironMan: {
      username: "IronMan",
      about:
        "Genius billionaire Tony Stark uses his advanced suit of armor to protect the world as Iron Man.",
      pic: "https://images.unsplash.com/photo-1623984109622-f9c970ba32fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aXJvbm1hbnxlbnwwfHwwfHx8MA%3D%3D",
      hashtags: ["#IronMan", "#TonyStark", "#Avengers"],
    },

    captainAmerica: {
      username: "CaptainAmerica",
      about:
        "Steve Rogers is a super soldier and the moral backbone of the Avengers, fighting for justice and freedom.",
      pic: "https://images.unsplash.com/photo-1561156772-a44477f220a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdGFpbiUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
      hashtags: ["#CaptainAmerica", "#SteveRogers", "#Avengers"],
    },

    thor: {
      username: "Thor",
      about:
        "Thor Odinson, the God of Thunder, wields Mjolnir and protects both Earth and Asgard.",
      pic: "https://images.unsplash.com/photo-1561156772-a44477f220a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdGFpbiUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
      hashtags: ["#Thor", "#GodOfThunder", "#Avengers"],
    },

    hulk: {
      username: "Hulk",
      about:
        "When angered, Bruce Banner transforms into the Hulk, possessing immense strength.",
      pic: "https://images.unsplash.com/photo-1561156772-a44477f220a5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FwdGFpbiUyMGFtZXJpY2F8ZW58MHx8MHx8fDA%3D",
      hashtags: ["#Hulk", "#Smash", "#Avengers"],
    },
    
  };
  

  return (
    <>
      <Card obj={users.ironMan}/>
      <Card obj={users.captainAmerica}/>
      <Card obj={users.thor}/>
      <Card obj={users.hulk}/>
    </>
  )
}

export default App
