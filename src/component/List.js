import React, { useState } from 'react'
import { doc, onSnapshot } from "firebase/firestore";
import { db } from '../services/firebase';
import { userStore } from '../store/authStore';

const List = () => {
    const user = userStore((state)=>state.user);
    const [data,setData] = useState({})
    console.log(user);
    const unsub = onSnapshot(doc(db, "message", user.email), (doc) => {
        setData(doc.data());
    });   
    return (
    <div>{data && data.name}</div>
  )
}

export default List