import React from 'react'
import { stylesHeader } from './stylesHeader'
import { Col, Container, Row } from 'react-bootstrap'

export default function Header() {
  return (
    <Container className=" min-vh-100  " fluid>
          
            <Container>
              <Row className='text-lg-start text-center'>
                <Col lg={12} sm={12} className='py-5 align-self-start'>
                  <span className="display-6 " style={stylesHeader.title} >Hola soy Nani</span>  

                </Col>                
              </Row>  
            </Container>

            <Container fluid>
              <Row className='text-lg-start text-center'>
                <Col className='d-flex flex-column ' lg={6} md={10} >
                  <span className='display-5 fw-bold pb-4'>Acesora en Marketing de contenido</span> 
                  <p className=' fs-5 fw-700 '>
                    Aca te brindare todas las herramientas necesarias para que puedas optimizar tu perfil en instagram, crear una estrategia de ventas 
                    y disfrutar emprender. 
                    ¿Estas lista?<br/>
                  </p>
                  
                  <div>
                    <button className="bg-pink-400 hover:bg-pink-200 text-white font-bold py-3 px-4 rounded" style={stylesHeader.buttonHeader} >
                        Contactame
                    </button>
                  </div>

                </Col>                                   
              </Row>
            </Container>
      </Container> 
  )
}


