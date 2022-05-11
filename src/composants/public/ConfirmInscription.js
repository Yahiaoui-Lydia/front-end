import React , { useState }from "react";
import {Form,Col,Button,Row } from "react-bootstrap";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
function ConfirmInscription(props){
    const navigate= useNavigate('')
    const [erreur, setErreur] = useState('');
    const [validated, setValidated] = useState(false);
    const [code, setCode] = useState('');
    const email=props.email
    const handleChangeCode= (event) => { setCode(event.target.value) }
   const handleSubmit = (event) => {


    const form = event.currentTarget;
    if (form.checkValidity() === true) {
 
      axios.put(process.env.REACT_APP_API_confirmInscription , {email,code  })
        .then((response) => {
          // Success 
          navigate('/login')
         
      })
      .catch((error) => {
          // Error 
          if (error.response) {
            // La requete a été faite et le serveur a répondu avec un code d'état qui se situe en dehors de la plage de 2xx
              if(error.response.status === 400){
                setErreur('Le code saisi ne correspondent pas à votre code. Veuillez réessayer.')
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
            <span className='forms-title mb-3'>Confirmer votre compte</span>
           
            <Form.Label style={{color:'red'}}> {erreur?erreur: null} </Form.Label>
            Merci de vérifier dans vos e-mails que vous avez reçu un message avec votre code
          
            <Form.Group  as={Row} className='forms-group ' controlId="code">
                  <Form.Label  column sm={2}  className='bi bi-envelope forms-label '></Form.Label>
                  <Col>
                  <Form.Control onChange={handleChangeCode} required type="email" placeholder="votre code" className='forms-control py-0 my-0 '/>
                  <Form.Control.Feedback type="invalid">Veuillez saisir votre code  </Form.Control.Feedback>
                  </Col>
        </Form.Group>
        </Row>
        <Button type="submit"  className='forms-btn'>Confirmer </Button>
    </Form>
    </div>
       
    )

}
export default ConfirmInscription