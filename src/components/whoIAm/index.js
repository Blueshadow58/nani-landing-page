import { stylesWhoIAm } from './stylesWhoIAm'
import { Col, Container, Row } from 'react-bootstrap'
import './styles.css'

export default function WhoIAm() {
  return (
    <Container id='whoIAm' className=" min-vh-100  " fluid>
      <Container>
        <Row className='text-xl-start text-center'>
          <Col xl={8} lg={12} sm={12} className='py-5 align-self-start'>
            <span className="display-5 " style={stylesWhoIAm.title} >¿Quién soy?</span>

          </Col>
        </Row>
      </Container>
      <Container >
        <Row className='text-center '>

          <Col className=' d-flex flex-column' xl={8} lg={12} md={12} >

            <div className=" py-2 ">
              <img className='img-fluid d-none d-xl-block' style={stylesWhoIAm.unicornioNotebook} src={require('../../images/Unicornio-notebook.png')} alt='img'></img>
            </div>

            <p className='fs-5 fw-700 justify'>
              Trabajé como <strong>community manager</strong> en forma freelance y como paid media
              en una Agencia de Marketing. Di capacitaciones en forma virtual y presencial a emprendedores en Jujuy, Argentina
              sobre cómo optimizar su perfil en Instagram y Google My Business a través de la Asociación Civil
              Puertas. Enseñé sobre <strong>Google Ads, Marketing Digital </strong> y habilidades blandas a través del programa
              <strong>Crecé con Google de Junior Achievement Argentina</strong>, donde 300 jóvenes de latinoamérica fueron
              mis alumnos<br />
              <br />
              Fuí social media manager de la red Alumni de Junior Achievement Argentina en 2022 y del <strong>Foro Internacional
                de Emprendedores</strong> de Junior Achievement Cordoba en 2023.<br />
            </p>
            <div className="d-flex flex-row  justify-content-center align-items-center ">
              <div className="p-2">
                <img className='img-fluid' src={require('../../images/google/Google_Ads_logo.png')} alt='img'></img>
              </div>
              <div className="p-2">
                <img className='img-fluid' src={require('../../images/google/google_google_achievement.png')} alt='img'></img>
              </div>
            </div>
          </Col>
        </Row>
      </Container>


    </Container>
  )
}

