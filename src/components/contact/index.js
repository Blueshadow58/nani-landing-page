import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { styles } from './styles'
import isEmail from 'validator/lib/isEmail'

export default function Contact() {
  const email = React.useRef('')
  const name = React.useRef('')
  const subject = React.useRef('')
  const phone = React.useRef('')
  const message = React.useRef('')

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    console.log('email', email.current.value)
    const form = event.currentTarget;
    // if this is the email field and it's not valid, put isvalid to false
    if (form.checkValidity() === false || !isEmail(email.current.value)) {

      event.preventDefault();
      event.stopPropagation();
      // email.current.value = isEmail(email.current.value) ? email.current.value : ''
    }
    setValidated(true);
  };

  return (
    <>
      <div id='contact' className=" d-flex flex-column min-vh-100 mt-auto  p-0 m-0  ">

        <Container>
          <Row className='text-lg-start text-center  '>
            <Col lg={12} sm={12} className='py-5 '>
              <span className="display-5 " style={styles.title} >Contacto</span>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className='' style={styles.formContainer}>
                <Form action="https://formsubmit.io/send/7b358e37-9d97-4e74-ae25-bbeca51e39a5" method="POST" noValidate validated={validated} onSubmit={handleSubmit}>


                  <Row>
                    <Col lg={5} sm={12} className='py-2'>
                      <div className="form-floating">
                        <textarea required ref={message} name='Mensaje' style={styles.textArea} className="form-control" id='floatingTextarea' placeholder='Escriba su mensaje'></textarea>
                        <label className='text-muted fs-5' hmtlfor="floatingTextarea">Escriba su mensaje</label>
                        <Form.Control.Feedback className='text-light fw-bold fs-6'>Bien!</Form.Control.Feedback>
                      </div>
                    </Col>
                    <Col lg={5} sm={12} className='py-2 ps-lg-5'>
                      <div className="mb-4 mt-5">
                        <input required ref={subject} type="text" name='Asunto' style={styles.input} className="form-control" placeholder='Asunto:' />
                        <Form.Control.Feedback className='text-light fw-bold fs-6'>Bien!</Form.Control.Feedback>
                      </div>
                      <div className="mb-4">
                        <input required ref={name} type="text" name='Nombre' style={styles.input} className="form-control" placeholder='Nombre:' />
                        <Form.Control.Feedback className='text-light fw-bold fs-6'>Bien!</Form.Control.Feedback>
                      </div>
                      <div className="mb-4">
                        <input required ref={phone} type="text" name='Telefono' style={styles.input} className="form-control" placeholder='Telefono:' />
                        <Form.Control.Feedback className='text-light fw-bold fs-6'>Bien!</Form.Control.Feedback>
                      </div>
                      <div className="mb-5">
                        <input required ref={email} type="text" name='Correo' style={styles.input} className="form-control" placeholder='Email:' />
                        <Form.Control.Feedback className='text-light fw-bold fs-6'>Bien!</Form.Control.Feedback>
                        <Form.Control.Feedback className=' fw-bold fs-6' type="invalid">Porfavor ingrese un email valido ej: email@gmail.com</Form.Control.Feedback>
                      </div>
                      <div className='text-center'>
                        <Button required type="submit" className='px-5' style={styles.purpleButton} >Enviar</Button>
                      </div>

                    </Col>


                    <img className=' d-none d-xxl-block' style={styles.contactUnicorn} src={require('../../images/Unicornio-scooter.png')} alt='img'></img>




                  </Row>

                </Form>


              </div>
            </Col>

          </Row>



        </Container>





      </div>
      <Footer />
    </>
  )



  function Footer() {
    return (
      <div className=" d-flex  flex-column min-vh-25 mt-auto  p-0 m-0 ">
        <Row className=' align-items-center justify-content-center my-5 p-0 m-0 '>
          <Col lg={4} sm={12} className="text-center ">
            <div>
              <img src={require('../../images/Logo-Rosa.png')} height={110} alt='img'></img>
            </div>
            <div className="py-3 text-center">
              <img src={require('../../images/Logotipo-Negro-nani.png')} height={25} alt='img'></img>
            </div>
            <div className="text-center">
              <span className="h5" style={styles.secondarySpan} >Marketing Digital</span>
            </div>
          </Col>
          <Col lg={4} sm={12} className=' text-center py-2'>
            <span className="h5 ">Asesoría en Marketing de contenidos</span>
          </Col>
          <Col lg={4} sm={12} className='text-lg-start text-center  '>
            <span className="d-block p-2 ">
              <img src={require('../../images/social-icons/Instagram.png')} height={35} alt='img'></img>
              <span className='ms-3 h5'>@holasoynani.mkt</span>
            </span>
            <span className="d-block p-2 ">
              <img src={require('../../images/social-icons/Vector.png')} height={22} className='ps-1' alt='img'></img>
              <span className='ms-4 h5'>holasoynani.mkt@gmail.com</span>
            </span>
            <span className="d-block p-2 ">
              <img src={require('../../images/social-icons/WhatsApp.png')} height={30} className='ps-1' alt='img'></img>
              <span className='ms-3 h5'>+54 9 3885 72-6293</span>
            </span>
          </Col>
        </Row>
        <div className="w-100 px-5 ">
          <footer className=" flex-wrap justify-content-between align-items-center py-1 my-2 border-top border-dark">
            <div className="col-md-12 d-flex align-items-center justify-content-center">
              <span className="my-2 mb-md-0 h6 text-dark ">Nani Marketing digital 2023 - Todos los derechos reservados</span>
            </div>
          </footer>
        </div>
      </div>
    )
  }


}

