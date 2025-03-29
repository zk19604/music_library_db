import React from "react";
import Player from "./player";
import User from "./User";
import Liked from "./Liked";

function Home() {
  const username = localStorage.getItem("username"); // ✅ Get username from localStorage
  const userid = localStorage.getItem("userId")
  return (
    <div >
      <User searchName={username} />  
      <Player />
      <Liked uname={username} /> 
     <a href="/delete">Tired of us? wanna delete?</a>
    </div>
  );
}

export default Home;
