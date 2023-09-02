import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./component/Auth";
import { useEffect, useState } from "react";
import Home from "./component/Home";
import { userStore } from "./store/authStore"; 
import {useAuthState} from "react-firebase-hooks/auth"
import { auth } from "./services/firebase";

function App() {
  const [user] = useAuthState(auth)
  const setUser = userStore((state)=>state.setUser)
  useEffect(()=>{
    // auth.signOut()
    console.log(user);
    setUser(user)
  })
  return (
    <div>
      <section>{user && <button onClick={()=>auth.signOut()}>Logout</button>}</section>
      {
        user ? <Home /> :  <Auth />
      }   
    </div>
  );
}

export default App;
