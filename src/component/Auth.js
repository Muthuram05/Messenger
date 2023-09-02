import React, { useState } from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../services/firebase";
import { userStore } from "../store/authStore";
const Auth = () => {
  const setUser = userStore((state)=>state.setUser)
  const user = userStore((state)=>state.user)
  const [err,setErr] = useState('')
  const handleSignIn = async () => {
    try {
      await signInWithPopup(auth, provider).then((data) => {     
        setUser(data.user)
        // console.log(data.user,"--" ,user);
      });
    } catch (error) {
      setErr(error)
    }
   
  };
  return (
    <div>
      <button onClick={handleSignIn}>SignIn</button>
      
    </div>
    
  );
};

export default Auth;
