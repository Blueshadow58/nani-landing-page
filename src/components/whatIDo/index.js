import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { styles } from './styles'

export default function WhatIDo() {
  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Container id='whatIDo' className=" min-vh-100" fluid>

      <Container>
        <Row className='text-center'>
          <Col lg={12} sm={12} className='py-5 align-self-start'>
            <span className="display-5 " style={styles.title} >¿Que hago?</span>

          </Col>
        </Row>
      </Container>
      <Container className=' ' fluid>
        <Row className='justify-content-around'>

          <Col className='d-flex flex-column' lg={6} md={10} >

            <div className="py-3 ">
              <img className='img-fluid d-none d-xl-block' style={styles.unicornioBruja} src={require('../../images/Unicornio-bruja.png')} alt='img'></img>
            </div>

            <p className='fs-5 fw-700 text-center'>
              Hoy en dia tener una cuenta de instragram, es nuestra vidriera para las emprendedoras.
              Incluso determina si una persona te compra o no.
              Hay muchos cursos que te ayduan a optimizar tu perfil pero son muy genericos.<br />
              <br />
              Quiero que tu marca <strong>sea tan unica </strong> que se destaque por si sola.
              Que puedas diferenciarte facilmente de tu competencia . Y sobre todo que puedas ser vos
              misma e ir generando una comunidad genuina que ame tu marca. <br />
              Asi que mi <strong>propuesta es ayudarte a mejorar tu perfil</strong> en esta red social, identificando
              que es lo que necesita ser comunicado de tu negocio, y como hacerlo para que tu emprendimiento pueda seguir creciendo.
            </p>

            <div className='d-grid mx-auto mt-4'>
              <button className="btn text-center px-4 py-2" onClick={scrollToContact} style={styles.buttonPink} >
                {/* chequear este boton, no me toma el css */}
                Contáctame
              </button>
            </div>

          </Col>
        </Row>
      </Container>
    </Container>



  )
}


