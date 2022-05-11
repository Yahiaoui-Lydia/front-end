import React, { useState } from "react";
import RegisterB2C from "../../composants/public/RegisterB2C";
import ConfirmInscription from "../../composants/public/ConfirmInscription";
function InscriptionB2C(){
const [registred, setRegistred]=useState(false)
const isRegistred =()=>{setRegistred(true)}
const [email,setEmail]=useState('')
const recupEmail = (email)=>{setEmail(email)}

if(registred){
return <ConfirmInscription email={email}/>
}else{
    return <RegisterB2C isRegistred={isRegistred} email={recupEmail}  />
}
}
export default InscriptionB2C