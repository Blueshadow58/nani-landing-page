import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { styles } from './styles'
import { FloatingWhatsApp } from 'react-floating-whatsapp'
const RenderCircles = React.lazy(() => import('./circle'))


export default function Header() {

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({ behavior: 'smooth' })
  }





  return (<>
    <Container style={styles.header} className='px-lg-5' fluid>
      <Row id='header' className=" mb-5 h-100 " >

        {/* <Row className='text-l-sgtart text-center align-items-end'> */}
        <Col xl={7} lg={12} className='d-flex ps-lg-5 flex-column align-self-center text-center text-lg-start justify-content-center"' >

          <span className="display-5 " style={styles.title} >¡Hola! soy Nani,</span>
          <span className='display-2 fw-bold pb-4'>Asesora en <br /> Marketing de contenidos</span>
          <p className='fs-5 fw-700' style={styles.subTitle}>
            Áca te brindaré todas las herramientas necesarias para que puedas optimizar tu perfil en Instagram, crear una estrategia de ventas
            y disfrutar emprender.
            ¿Estás lista?<br />
          </p>

          <div className='pt-4 '>
            <button className="fs-3 " onClick={scrollToContact} style={styles.btnContacto} >
              Contáctame
            </button>
          </div>

        </Col>
        <Col xl={5} lg={5} className='d-flex justify-content-end align-self-end '>

          <React.Suspense fallback={<div></div>}>
            <div className='d-none d-xxl-block'>
              <RenderCircles />
              <div className='position-absolute top-50 translate-middle-y' style={styles.backgroundCircle}>
              </div>
            </div>
          </React.Suspense>

          <img className='img-fluid d-none d-xxl-block' style={styles.nani} src={require('../../images/nani/nani.png')} alt='img'></img>
        </Col>
        {/* </Row> */}
      </Row>
    </Container>
    {/* insert jump of line  */}
    <FloatingWhatsApp phoneNumber='+549388572-6293' accountName='Nani' avatar={require('../../images/Logo-Rosa.png')} statusMessage='Asesora en
Marketing de contenidos' chatMessage={'Hola!🦄\nCómo puedo ayudarte?'} placeholder={'Escribir un mensaje...'} />
  </>
  )
}


