import React, { useState } from "react";
import RegisterB2B from "../../composants/public/RegisterB2B";
import ConfirmInscription from "../../composants/public/ConfirmInscription";
function InscriptionB2B(){
const [registred, setRegistred]=useState(false)
const isRegistred =()=>{setRegistred(true)}
const [email,setEmail]=useState('')
const recupEmail = (email)=>{setEmail(email)}

if(registred){
return <ConfirmInscription email={email}/>
}else{
    return <RegisterB2B isRegistred={isRegistred} email={recupEmail}  />
}
}
export default InscriptionB2B