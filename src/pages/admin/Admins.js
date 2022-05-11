import React from 'react'
import DataTableAdmins from '../../composants/admin/DataTableAdmins'
import {Row,Col} from 'react-bootstrap'
import AddAdmin from '../../composants/admin/AddAdmin'

function Admins() {
return (
  <div>
    <Row>
    <Col style={{'backgroundColor':'red', width :'70%'}}>
    <DataTableAdmins/>
    </Col>
    <Col  style={{'backgroundColor':'yellow'}}>
    <AddAdmin/>
    </Col >
     
    </Row>
  </div>
)
}
export default Admins