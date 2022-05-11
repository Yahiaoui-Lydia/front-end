import React, { useState } from "react";
import {Modal,Button}from "react-bootstrap"
import axios from "axios";
const deleteAdmin = async (id) => {
    let csrfToken = localStorage.getItem('csrfToken')
       await axios.delete(process.env.REACT_APP_API_removeAdmin+'/'+id, { headers: {
          'Authorization':  csrfToken
        },withCredentials: true    })
    .then((response) => {
  
  })
  .catch((error) => {
      if (error.response) {
        // La requete a été faite et le serveur a répondu avec un code d'état qui se situe en dehors de la plage de 2xx
          if(error.response.status === 401){
            localStorage.setItem('role','')
            window.location.href='/login'
          }
      } else if (error.request) {
        // La requete a été faite mais aucune réponse n'a été reçue,erreur du coté serveur
        // setErreur('La connexion a échoué veuillez réessayer')
        
      }
    })

  }

function AlertDelete(props) {
    const [show,setShow]=useState(true)
      const handleDelete = ()=>{
          
      props.rows.map((row)=>{return deleteAdmin(row.id)})
      window.location.href='/'
    
  }
    return (
      <Modal
        {...props}
       
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" >
            Confirmation de Suppression
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                 
        <div style={{'fontSize':'16px'}}>Êtes-vous sûr de vouloir supprimer les administrateurs suivants ?</div>
          
           
        <div style={{'fontSize':'13px','textAlign':'center'}}>
           {
               props.rows.map((r)=>{
                  return r.nom + ' ' + r.email+ ' , '
                
               }) 
               
           }
         </div>
        </Modal.Body>
        <Modal.Footer>
        <button onClick={props.onHide}  className='bna btn'> Annuler</button>
          <Button onClick={handleDelete} variant="danger" className="bi bi-trash3">Supprimer</Button>
      
        </Modal.Footer>
      </Modal>
    );
  }
export default AlertDelete  