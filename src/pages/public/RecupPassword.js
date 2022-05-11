import React, { useState } from "react";
import ForgotPassword from "../../composants/public/ForgotPassword";
import ConfirmInscription from "../../composants/public/ConfirmInscription";
function RecupPassword(){
const [code, setCode]=useState(false)
const setcodeTrue =()=>{setCode(true)}
const [email,setEmail]=useState('')
const recupEmail = (email)=>{setEmail(email)}

if(code){
return <ConfirmInscription email={email}/>
}else{
    return <ForgotPassword setcode={setcodeTrue} email={recupEmail}  />
}
}
export default RecupPassword