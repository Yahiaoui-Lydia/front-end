import React,{useEffect,useState} from 'react'
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";
import axios from 'axios';
import ReactDOM from "react-dom";
import DataTable from "react-data-table-component";
import DataTableExtensions from "react-data-table-component-extensions";
import "react-data-table-component-extensions/dist/index.css";
import differenceBy from 'lodash/differenceBy';

import AlertDelete from './AlertDelete';

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
            <button type="button" className=" btn-alert-danger btn bi bi-trash3-fill"  onClick={() =>deleteAdmin(row.id)}>
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

const BootyCheckbox = React.forwardRef(({ onClick, ...rest }, ref) => (
  <div className="form-check">
    <input
      htmlFor="booty-check"
      type="checkbox"
      className="form-check-input"
      ref={ref}
      onClick={onClick}
      {...rest}
    />
    <label className="form-check-label" id="booty-check" />
  </div>
));
const paginationOptions = {

	rowsPerPageText: 'Nombre de lignes par page',

	rangeSeparatorText: 'de',

	selectAllRowsItem: true,

	selectAllRowsItemText: 'toutes',

};



function DataTableAdmins() {
  const [listAdmin,setListAdmin] =useState([]);
  const [erreur,setErreur]=useState('')
  const [pending, setPending] =useState(true);
  const [search, setSearch] = React.useState('');
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [Alert, setAlert] = React.useState(false);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const handleRowSelected = React.useCallback(state => {

		setSelectedRows(state.selectedRows);

	}, []);

  const handleSearch = (event) => {setSearch(event.target.value);};

  const contextActions =  <button key="delete" className='bi bi-trash3 text-white btn' onClick={()=>setAlert(true)} style={{ backgroundColor: 'red' }} > Supprimer</button>  ;

  const actions = <div><label htmlFor="search" className='bi bi-search'><input id="search" type="text" onChange={handleSearch} /></label><button key="add"  className='bi bi-person-plus' >Add</button></div>; 
 


  useEffect( ()=>{

      const getAdmins  = async ()=>{

        let csrfToken = localStorage.getItem('csrfToken');
              await axios.get(process.env.REACT_APP_API_ListeAdmin, { headers: {'Authorization':  csrfToken},withCredentials: true    })
        .then((response) => {
          setListAdmin( response.data.filter(
              (item) => { return(item.email.includes(search)||item.email.includes(search)) }    
               )
          )
        
          setPending(false);
     
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
            setErreur('La connexion a échoué veuillez réessayer')
          }
        })
     }
     ;getAdmins();}
    ,[search] )
   

  return (
    <div className="main">
      <div style={{'color':'red','textAlign':'center'}}>{erreur?erreur:null}</div>
     
      <AlertDelete
        show={Alert}
        onHide={() => setAlert(false)}
        rows={selectedRows}
      />
      
        <DataTable
                    columns={columns}
                    title=" "
                    data={listAdmin}
                    defaultSortField="id"
                    pagination
                    paginationComponentOptions={paginationOptions}
                    paginationRowsPerPageOptions={[5,10, 15, 20, 25, 30]}
                    selectableRows
                    selectableRowsComponent={BootyCheckbox}
                    responsive='true'
                    highlightOnHover
                    fixedHeader
		                fixedHeaderScrollHeight="400px"
                    progressPending={pending}
                    contextActions={contextActions}
                    actions={actions}
			              onSelectedRowsChange={handleRowSelected}
                 

        
        />
    
    </div>
  );
}
export default DataTableAdmins