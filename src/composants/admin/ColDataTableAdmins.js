import axios from 'axios';

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
const columns = [
  {
    name: "Id",
    selector: (row) => row.id,
    sortable: true
    },
{
name: "Nom",
selector: (row) => row.nom,
sortable: true
},
{
name: "Prénom",
selector: (row) => row.prenom,
sortable: true,
right: true
},
{
name: "Email",
selector: (row) => row.email,
sortable: true,
right: true
},
{name: "Action",
ignoreRowClick: true,
allowOverflow: true,
button: true,
cell: (row) => (

  <div className="App">
    <div className="openbtn text-center">
      <button
        type="button"
        className=""
        data-bs-toggle="modal"
        data-bs-target="#myModal"
        className="bi bi-trash3-fill"
        style={{ 'color':'red','fontSize':'20px','backgroundColor':'transparent','border':'none'}}
      >
       
      </button>
      <div className="modal" tabIndex="-1" id="myModal">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Suppression</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <p>Êtes-vous sûr de vouloir supprimer le compte de {row.nom} {row.prenom} ?</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn-alert-secondary btn "
                data-bs-dismiss="modal"
              >
             Annuler
              </button>
              <button type="button" className=" btn-alert-danger btn bi bi-trash3-fill"  onClick={()=>console.log(row.id)}>
                Supprimer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
];
export default columns 