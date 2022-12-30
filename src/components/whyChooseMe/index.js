import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { styles } from './styles'

export default function WhyChooseMe() {
  return (
        <Container className=" min-vh-100  " fluid>
          
            <Container>
              <Row className='text-lg-start text-center'>
                <Col lg={12} sm={12} className='py-5 align-self-start'>
                  <span className="display-5 " style={styles.title} >¿Por qué elegirme?</span>  
                  <div className="py-3 ">
                      <img className='img-fluid d-none d-xl-block' style={styles.slideUnicorn} src={require('../../images/Unicornio tobogan.png')} alt='img'></img>
                    </div>
                </Col>                
              </Row>  
            </Container>
            <Container className='mt-lg-5 pt-lg-5 ' fluid>
              <Row className='justify-content-around'>
                {/* <Col className='bg-light  d-none d-xxl-block' lg={4}> */}
                  
                {/* </Col>                                    */}
                <Col className='d-flex flex-column  offset-lg-3 ' lg={6} md={10} >
                  <span className='display-4 fw-bold pb-4'>Si....</span> 
                  <p className='fs-5 fw-700 '>
                    Te cuesta <strong>escribir</strong> las descripciones al subir posteos.
                    quisieras que tu día tenga más horas porque no te 
                    alcanza el tiempo.<br/>
                    <br/>
                    Pones mucho esfuerzo al crear contenido y <strong>no ves 
                    resultados</strong> en consultas o ventas.<br/>
                    <br/>
                    Te sentis frustrada <strong>porque no sabes</strong> qué más publicar.
                  </p>
                  <div className='text-center mt-4 pt-5 fw-bold fs-4'>
                    <span style={styles.shineText} >¡Entonces “Brilla con Instagram” es para vos!</span>
                  </div>
                </Col>                                   
              </Row>
            </Container>
      </Container> 



  )
}

