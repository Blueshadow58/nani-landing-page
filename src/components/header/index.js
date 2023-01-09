import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { styles } from './styles'
const RenderCircles = React.lazy(() => import('./circle'))

export default function Header() {

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({ behavior: 'smooth' })
  }





  return (
    <Container style={styles.header} className='px-lg-5' fluid>
      <Row id='header' className=" mb-5 h-100 " >

        {/* <Row className='text-l-sgtart text-center align-items-end'> */}
        <Col xl={7} lg={12} className='d-flex ps-lg-5 flex-column align-self-center text-center text-lg-start justify-content-center"' >

          <span className="display-5 " style={styles.title} >¡Hola! soy Nani,</span>
          <span className='display-2 fw-bold pb-4'>Acesora en <br /> Marketing de contenido</span>
          <p className=' fs-5 fw-700 '>
            Aca te brindare todas las herramientas necesarias para que puedas optimizar tu perfil en instagram, crear una estrategia de ventas
            y disfrutar emprender.
            ¿Estas lista?<br />
          </p>

          <div className='pt-4 '>
            <button className="fs-3 " onClick={scrollToContact} style={styles.btnContacto} >
              Contáctame
            </button>
          </div>

        </Col>
        <Col xl={5} lg={5} className='d-flex justify-content-end align-self-end '>

          <React.Suspense fallback={<div>Loading...</div>}>
            <RenderCircles />
          </React.Suspense>


          <img className='d-none d-xxl-block' style={styles.nani} src={require('../../images/nani/nani.png')} alt='img'></img>
        </Col>
        {/* </Row> */}
      </Row>
    </Container>
  )
}


