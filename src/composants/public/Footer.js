import React from 'react'
import {Container,Row,Col } from 'react-bootstrap'
function Footer (){
return(
<Container fluid className='footer-limiter'>
<footer className="text-center text-lg-start footer">
<Container className='p-4'>
<Row className='mt-4'>
<Col className='mb-4 mb-md-0 footer-col'>
<h5 className="text-uppercase mb-4">A propos de nous</h5>
  
  <p>
  Nous sommes spécialisés dans la vente de produits domotique, produits de confort, alarmes...


  </p>

  <p>
  Notre passion pour les produits innovants, les nouvelles technologies nous permet de toujours vous proposer des produits de qualité au meilleur prix.
  </p>
  

</Col>
<Col  className='mb-4 mb-md-0 footer-col'>
<h5 className="text-uppercase mb-4 pb-1">Informations sur notre boutique</h5>
  
          <ul className="fa-ul p-0" >
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-geo-alt-fill"></i></span><span className="ms-2">New York, NY 10012, US</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-envelope-fill "></i></span><span className="ms-2">info@example.com</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-telephone-fill "></i></span><span className="ms-2">+ 01 234 567 88</span>
            </li>
            <li className="mb-3">
              <span className="fa-li"><i className="bi bi-clock-fill"></i></span><span className="ms-2">

                              Heures d'ouverture :<br/>
                              Dimanche - jeudi : 9h – 12h & 13h30-17h30<br/>
                             </span>
            </li>
          </ul>

</Col>
<Col  className='mb-4 mb-md-0 footer-col'>
<h5 className="text-uppercase mb-4">Retrouvez nous sur les réseaux sociaux </h5>
<div >

      <a type="button" className="btn btn-floating  btn-lg footer-btn" href='https://wa.me/2154546546'><i className="bi bi-facebook"></i></a>
    
      <a type="button" className="btn btn-floating btn-lg footer-btn" href='http://localhost:3000/'><i className="bi bi-whatsapp"></i></a>
   
      <a type="button" className="btn btn-floating btn-lg footer-btn" href='http://localhost:3000/'><i className="bi bi-twitter"></i></a>

      <a type="button" className="btn btn-floating btn-lg footer-btn" href="http://localhost:3000/"><i className="bi bi-instagram"></i></a>
    
    </div>
</Col>
</Row>
<Row>
           

</Row>


</Container>
<div className="text-center ">
      © 2021 Copyright:
      <a href="https://provision.com/">ProVision.com</a>
    </div>
</footer>
</Container>
)
}
export default Footer