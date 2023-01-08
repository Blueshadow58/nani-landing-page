import { Link } from "react-router-dom";
import { Col, Container, Row } from 'react-bootstrap'
import { stylesWhatIDo } from './stylesWhatIDo'

export default function WhatIDo() {
  return (
        <Container className=" min-vh-100  " fluid>
          
            <Container>
              <Row className='text-center'>
                <Col lg={12} sm={12} className='py-5 align-self-start'>
                  <span className="display-5 " style={stylesWhatIDo.title} >¿Que hago?</span>  
                  
                </Col>                
              </Row>  
            </Container>
            <Container className=' ' fluid>
              <Row className='justify-content-around'>
             
                <Col className='d-flex flex-column' lg={6} md={10} >

                  <div className="py-3 ">
                      <img className='img-fluid d-none d-xl-block' style={stylesWhatIDo.unicornioBruja} src={require('../../images/Unicornio bruja.png')} alt='img'></img>
                  </div>

                  <p className='fs-5 fw-700 '>
                  Hoy en dia tener una cuenta de instragram, es nuestra vidriera para las emprendedoras.
                  Incluso determina si una persona te compra o no. 
                  Hay muchos cursos que te ayduan a optimizar tu perfil pero son muy genericos.<br/>
                    <br/>
                    Quiero que tu marca <strong>sea tan unica </strong> que se destaque por si sola.
                    Que puedas diferenciarte facilmente de tu competencia . Y sobre todo que puedas ser vos 
                    misma e ir generando una comunidad genuina que ame tu marca. <br/>
                    Asi que mi <strong>propuesta es ayudarte a mejorar tu perfil</strong> en esta red social, identificando 
                    que es lo que necesita ser comunicado de tu negocio, y como hacerlo para que tu emprendimiento pueda seguir creciendo.
                  </p>

                  <Link to={'contact'}>
                    <button className="bg-pink-400 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded">
                      Contactame
                    </button>
                  </Link>

                </Col>                                   
              </Row>
            </Container>
      </Container> 



  )
}


