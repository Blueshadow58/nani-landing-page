import { styles } from './styles'
import {Col, Container, Row } from 'react-bootstrap'

export default function WhoIAm() {
  return (
    <Container className=" min-vh-100  " fluid>
          <Container>
              <Row className='text-lg-start text-center'>
                <Col lg={12} sm={12} className='py-5 align-self-start'>
                  <span className="display-5 " style={styles.title} >¿Quien soy?</span>  
                  
                </Col>                
              </Row>  
            </Container>
            <Container className=' text-lg-start ' fluid>
              <Row className='justify-content-around'>
             
                <Col className=' d-flex flex-column' lg={6} md={10} >

                  <div className=" py-3 ">
                      <img className='img-fluid d-none d-xl-block' style={styles.unicornioNotebook} src={require('../../images/Unicornio notebook.png')} alt='img'></img>
                  </div>

                  <p className='fs-5 fw-700  '>
            Trabaje como <strong>community manager</strong> en forma freelance y como paid media
            en una Agencia de Marketin. Di capacitaciones en forma virtual y presencial a emprendedores en Jujuy, Argentina
            sobre como optimizar su perfil en Instagram y Google My Business a traves de la Asociacion Civil
            Puertas. Enseñe sobre <strong>Google Ads, Marketing Digital </strong> y habilidades blandas a traves del programa
            Crece con <strong>Google de Junior Achievement</strong> Argentina, donde 300 jovenes de latinoamerica fueron 
            mis alumnos<br/>
            <br/>
            Fui social media manager de la red Alumni de Junior Achievement Argentina en 2022 y del Foro Internacional 
            de Emprendedores de Junior Achievement Cordoba en 2023.<br/>
            <br/>
          </p>                  

                </Col>                                   
              </Row>
            </Container>
    
</Container> 
  )
}

  