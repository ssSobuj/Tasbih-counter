/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import "./Tashbih.css"
import { useState } from "react";

export default function Tashbih() {

    const [count, setcount] = useState(0)

    const increment =()=>{
      setcount(count + 1)
    }
    const Reset =()=>{
      setcount(count * 0)
    }
 


  return (
    <>
      <div className="main">
      <div className="tasbi-card">
      <h1>Tasbih</h1>
        <button onClick={count >= 66 && count < 100 && increment}>الله أكبر</button>        
        <button onClick={count >= 33 && count < 66 && increment}>ٱلْحَمْدُ لِلَّٰهِ</button>
        <button onClick={count < 33 && increment}>سُبْحَانَ ٱللَّٰهِ</button>
        <h2>{count}</h2>
      <button className="reset-btn" onClick={Reset}>Reset</button>
      </div> 
      </div>
    </>
  )
}
