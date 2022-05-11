import React,{useEffect} from 'react'
import axios from 'axios'
import request from '../../utils/request'
axios.defaults.withCredentials = true

function Adminhome() {

    return (
      <div>
      <div className="d-flex justify-content-end mb-4">
      <div className="form-outline">
        <input
          data-mdb-search
          data-mdb-target="#table_1"
          type="text"
          id="search_table_1"
          className="form-control"
        />
        <label className="form-label" for="search_table_1">Search</label>
      </div>
      <button className="btn btn-primary btn-sm ms-3" data-mdb-add-entry data-mdb-target="#table_1">
        <i className="fa fa-plus"></i>
      </button>
    </div>
    <hr />
    <div
    className="table-editor"
      id="table_1"
      data-mdb-entries="5"
      data-mdb-entries-options="[5, 10, 15]"
    >
      <table className="table">
        <thead>
          <tr>
            <th className="th-sm" data-mdb-width="250">Company</th>
            <th className="th-sm" data-mdb-width="250" data-mdb-sort="false">Address</th>
            <th className="th-sm" data-mdb-width="250" data-mdb-sort="false">Employees</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Smith & Johnson</td>
            <td>Park Lane 2, London</td>
            <td>30</td>
          </tr>
          <tr>
            <td>P.J. Company</td>
            <td>Oak Street 7, Aberdeen</td>
            <td>80</td>
          </tr>
          <tr>
            <td>Food & Wine</td>
            <td>Netherhall Gardens 3, Hampstead</td>
            <td>12</td>
          </tr>
          <tr>
            <td>IT Service</td>
            <td>Warwick Road 14, London</td>
            <td>17</td>
          </tr>
          <tr>
            <td>A. Jonson Gallery</td>
            <td>Oaklands Avenue 2, London</td>
            <td>4</td>
          </tr>
          <tr>
            <td>F.A. Architects</td>
            <td>Frognal Way 7, Hampstead</td>
            <td>4</td>
          </tr>
        </tbody>
      </table>
    </div>
    
    </div>
    )
}

export default Adminhome;