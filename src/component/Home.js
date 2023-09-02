import React, { useEffect, useState } from 'react'
import { db } from '../services/firebase'
import { addDoc, collection, doc, setDoc } from "firebase/firestore"; 
import {useCollectionData} from "react-firebase-hooks/firestore"
import List from './List';
import { userStore } from '../store/authStore';

const Home = () => {
  const [mailId,setMailId] = useState('')
  const [value,setValue] = useState('')
  const messageRef = collection(db,'message');
  const user = userStore((state)=>state.user);
    
  const handleSubmit = async () =>{
    console.log(user.email);
    await setDoc(doc(messageRef, mailId), {
      name: value, 
    });
  }
  return (
    <div>
      <input value={mailId} onChange={(e)=> setMailId(e.target.value)}/>
      <input value={value} onChange={(e)=> setValue(e.target.value)}/>
      <button onClick={() => handleSubmit()}>send message</button>
      <List />
    </div>
  )
}

export default Home