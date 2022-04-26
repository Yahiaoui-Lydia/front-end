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
    <Form noValidate validated={validated} onSubmit={handleSubmit} style={{borderColor:'black',border:'solid',borderWidth:'2px',borderRadius:'5px'}}  >
    <legend>Entrez le code de sécurité</legend>
    <fieldset style={{borderColor:'gray',borderTop:'solid',borderBottom:'solid',borderWidth:'1px'}} >

    <Form.Label style={{color:'red'}}> {erreur?erreur: null} </Form.Label>
    <div style={{width:'80%'}}>Merci de vérifier dans vos e-mails que vous avez reçu un message avec votre code. </div>  
    <br/>
      <Row className="mb-3">
    
          
            <Col sm={10}>
            <Form.Control   
             onChange={handleChangeCode}
                required
                type="text"
                placeholder="Entrez code"
                />
            <Form.Control.Feedback type="invalid">Veuillez saisir un code </Form.Control.Feedback>
            <Form.Control.Feedback></Form.Control.Feedback></Col>
       
        </Row>
        </fieldset>
        <Form.Group style={{'textAlign':'center'}}>
      <Button type="submit" >Envoyer </Button>
      </Form.Group>
    </Form>
    </div>
       
    )

}
export default ConfirmInscription