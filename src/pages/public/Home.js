import React from 'react'
import {Carousel} from 'react-bootstrap'

function Home() {
   
    return (
        <div>
            <Carousel variant="dark" style={{'backgroundColor':'black'}}>
  <Carousel.Item className='carouselItem'>
            <img className="d-block w-100 caroselImage" src="images/1.jpg" alt="" />
            <Carousel.Caption  className='carouselCaption'>
            Tous vos besoins en sécurité sous un même toit 
            </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className='carouselItem'>
            <img className="d-block w-100 caroselImage" src="images/3.png" alt="Second slide" />
            <Carousel.Caption  className='carouselCaption'>
           Un endroit pour toutes les solutions de sécurité
            </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item  className='carouselItem'>
    <img className="d-block w-100 caroselImage" src="images/4.jpg" alt="Second slide"/>
            <Carousel.Caption  className='carouselCaption'>
            Une sécurité Intelligente, spécialement pour vous 
            </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item  className='carouselItem'>
            <img className="d-block w-100 caroselImage" src="images/5.webp" alt="Third slide"/>
            <Carousel.Caption className='carouselCaption'>
            la sécurité Avancée pour les menaces avancées 
            </Carousel.Caption>
  </Carousel.Item>
</Carousel>
            <div className='presentation py-3'>
<h1>Nos offres pour particuliers et professionnels</h1>                
<p>
  Réputés pour ses technologies de pointe
  
  PRO VISION SECURITY SYSTEMS presente un choix ideal dès qu’il s’agit de faire installer , réparer ou encore acheter des systèmes de sécurité .
  Nous offrons des produits
  de sécurité adaptés à la protection des biens et des personnes. Ces équipements sont choisis parmi des marques et
   fabricants spécialisés et se répartissent
   en différentes familles :
    alarme de piscine, alarme autonomes, détecteur de fumée, détecteur de gaz
   alarmes intrusion,
appareils de vidéosurveillance,
contrôles d’accès,
automatismes pour portes et portails,
alarmes incendie ....

Que vous soyez un particulier à la recherche d’un système de securité performant pour votre logement, ou
un professionnel souhaitant sécuriser son entreprise, PRO VISION SECURITY SYSTEMS est là pour vous orienter vers les bonnes solutions !

</p>
</div>
        </div>
    )
}

export default Home;