
import React, { useState } from 'react'
import {Row,Button, Form,Col} from 'react-bootstrap'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';

function RegisterB2C() {
  const navigate = useNavigate();
  const [erreur, setErreur] = useState('');
  const [validated, setValidated] = useState(false);
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleChangePassword = (event) => {setPassword(event.target.value) }
  const handleChangeEmail= (event) => { setEmail(event.target.value) }
  const handleChangeNom= (event) => { setNom(event.target.value) }
  const handleChangePrenom= (event) => { setPrenom(event.target.value) }
   const handleSubmit = (event) => {


    const form = event.currentTarget;
    if (form.checkValidity() === true) {
    
      axios.post(process.env.REACT_APP_API_registerB2C , {password,email,nom,prenom  })
        .then((response) => {
          // Success 
          localStorage.setItem('csrfToken',response.data.csrf )
          localStorage.setItem('role',response.data.role )
          navigate('/login');
         
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

      <Form.Group controlId="nom" as={Col}>
            <Form.Label className='bi bi-person'> Nom</Form.Label>
            <Form.Control onChange={handleChangeNom}
                required
                type="text"
                placeholder="Nom"
                />
            <Form.Control.Feedback type="invalid">Veuillez saisir votre nom </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="prenom" as={Col}>
            <Form.Label className='bi bi-person'> Prénom</Form.Label>
            <Form.Control onChange={handleChangePrenom}
                required
                type="text"
                placeholder="Prénom"
                />
            <Form.Control.Feedback type="invalid">Veuillez saisir votre prénom </Form.Control.Feedback>
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
      <Button type="submit">login </Button>
    </Form>
    



    </div>
  );
}

export default RegisterB2C;