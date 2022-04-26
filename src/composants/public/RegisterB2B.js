
import React, { useState } from 'react'
import {Row,Button, Form,Col} from 'react-bootstrap'
import axios from 'axios';


function RegisterB2B(props) {
  const [erreur, setErreur] = useState('');
  const [validated, setValidated] = useState(false);
  const [siret, setSIRET] = useState('');
  const [nomEntreprise, setNomEntreprise] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChangePassword = (event) => {setPassword(event.target.value) }
  const handleChangeEmail= (event) => { setEmail(event.target.value) }
  const handleChangeNom= (event) => { setNomEntreprise(event.target.value) }
  const handleChangeSIRET= (event) => { setSIRET(event.target.value) }
   const handleSubmit = (event) => {


    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      axios.post(process.env.REACT_APP_API_registerB2B , {password,email,nomEntreprise,siret  })
        .then((response) => {
          // Success 
          props.isRegistred()
          props.email(email)
         
         
      })
      .catch((error) => {
          // Error 😨
          if (error.response) {
            // La requete a été faite et le serveur a répondu avec un code d'état qui se situe en dehors de la plage de 2xx
              if(error.response.status === 400){
                setErreur('vous possédez deja un compte')
              }
          } else if (error.request) {
            // La requete a été faite mais aucune réponse n'a été reçue,erreur du coté serveur
            setErreur('La connexion a échoué veuillez réessayer')
          }
      });
    }
  
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    
  }
  
  

  return (
    <div className='App d-flex flex-column align-items-center'>
        <Form.Label style={{color:'red'}}> {erreur?erreur: null} </Form.Label>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">

      <Form.Group controlId="SIRET" as={Col}>
            <Form.Label className='bi bi-building'> SIRET</Form.Label>
            <Form.Control onChange={handleChangeSIRET}
                required
                type="text"
                placeholder="SIRET"
                />
            <Form.Control.Feedback type="invalid">Veuillez saisir l'identifiant de votre entreprise  </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="Nom de l'entreprise" as={Col}>
            <Form.Label className='bi bi-building'>Nom de l'entreprise</Form.Label>
            <Form.Control onChange={handleChangeNom}
                required
                type="text"
                placeholder="Nom de l'entreprise"
                />
            <Form.Control.Feedback type="invalid">Veuillez saisir  le Nom de votre entreprise </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group controlId="email">
            <Form.Label className='bi bi-envelope'> E-mail</Form.Label>
            <Form.Control onChange={handleChangeEmail}
                required
                type="email"
                placeholder="votre E-mail"
            
            />
            <Form.Control.Feedback type="invalid">Veuillez saisir une adresse email correcte </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>
      

        <Form.Group controlId="password">
          <Form.Label className='bi bi-lock'> Mot de passe</Form.Label>
          <Form.Control onChange={handleChangePassword}
            required
            type="password"
            placeholder="votre mot de passe"
            />
           <Form.Control.Feedback type="invalid">Veuillez saisir votre mot de passe  </Form.Control.Feedback>
          <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>


        </Row>
      <Button type="submit" >login </Button>
    </Form>
    



    </div>
  );
}

export default RegisterB2B;
