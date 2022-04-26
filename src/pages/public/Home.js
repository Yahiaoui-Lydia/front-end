import React, { useState } from 'react'
import A from './A';
function Home() {
   const [m,setM]=useState('')
   const f =  (child)=>{
        setM(child)
      
        console.log(m)
    }
    return (
        <div>
            <A em={f}/>
           
           <h1>page public </h1>

        </div>
    )
}

export default Home;