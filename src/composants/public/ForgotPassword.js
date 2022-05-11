import React,{useState} from "react";
import {Form,Col,Button,Row } from "react-bootstrap";
import axios from 'axios';

function ForgotPassword(props){
    

  const [erreur, setErreur] = useState('');
  const [validated, setValidated] = useState(false);
  const [email, setEmail] = useState('');

  const handleChangeEmail= (event) => { setEmail(event.target.value) }
 const handleSubmit = (event) => {


  const form = event.currentTarget;
  if (form.checkValidity() === true) {

    axios.put(process.env.REACT_APP_API_forgot_Password , {email})
      .then((response) => {
        props.setcodeTrue()
        props.email(email)
       
       
    })
    .catch((error) => {
        // Error 😨
        if (error.response) {
          // La requete a été faite et le serveur a répondu avec un code d'état qui se situe en dehors de la plage de 2xx
            if(error.response.status === 400){
              setErreur("vous ne possedez pas de compte")
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
  return(

      <div className='App d-flex flex-column align-items-center' >
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='forms mx-3 my-3 pb-3 px-3'>
    
        <Row className=" forms-limiter" style={{}}>
          <span className='forms-title mb-3'>Récuperer votre compte</span>
         
          <Form.Label style={{color:'red'}}> {erreur?erreur: null} </Form.Label>
          Merci de saisir votre adresse email pour récuperer votre compte
          <Form.Group  as={Row} className='forms-group ' controlId="email">
                  <Form.Label  column sm={2}  className='bi bi-envelope forms-label '></Form.Label>
                  <Col>
                  <Form.Control  id="email" onChange={handleChangeEmail} required type="email" placeholder="votre E-mail" className='forms-control py-0 my-0 '/>
                  <Form.Control.Feedback type="invalid">Veuillez saisir une adresse email correcte </Form.Control.Feedback>
                  </Col>
        </Form.Group>
      </Row>
      <Button type="submit"  className='forms-btn'>Confirmer </Button>
  </Form>
  </div>
     
  )
}

export default ForgotPassword

