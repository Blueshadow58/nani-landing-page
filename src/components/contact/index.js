import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { styles } from './styles'

export default function Contact() {





  return (
    <>
    <div className=" d-flex flex-column min-vh-100 mt-auto  p-0 m-0  ">

      <Container>
        <Row className='text-lg-start text-center  '>
          <Col lg={12} sm={12} className='py-5 '>
            <span className="display-5 " style={styles.title} >Contacto</span>  
          </Col>
        </Row>
        <Row>
          <Col>
            <div className='' style={styles.formContainer}>
              <form>
                <Row>                
                    <Col lg={5} sm={12} className='py-2'>                    
                      <div class="form-floating">
                        <textarea style={styles.textArea} class="form-control" id='floatingTextarea' placeholder='Escriba su mensaje'></textarea>
                        <label className='text-muted fs-5' for="floatingTextarea">Escriba su mensaje</label>
                      </div>              
                    </Col>
                    <Col lg={5} sm={12} className='py-2 ps-lg-5'>                  
                      <div class="mb-4 mt-5">                        
                        <input type="text" style={styles.input} class="form-control" placeholder='Asunto:'  />                        
                      </div>
                      <div class="mb-4">                        
                        <input type="text" style={styles.input} class="form-control" placeholder='Nombre:'   />
                      </div>                      
                      <div class="mb-4">                        
                        <input type="text" style={styles.input} class="form-control" placeholder='Telefono:' />                        
                      </div>
                      <div class="mb-5">                        
                        <input type="text" style={styles.input} class="form-control" placeholder='Email:'/>
                      </div>                      
                      <div className='text-center'>
                        <Button type="submit" className='px-5' style={styles.purpleButton} class="btn">Enviar</Button>                  
                      </div>
                                                              
                    </Col>  

                    
                      <img className=' d-none d-xxl-block' style={styles.contactUnicorn}  src={require('../../images/Unicornio scooter.png')}  alt='img'></img>  
                    
                
              {/* Img of the Unicorn */}
              {/* <div style={styles.containerImg} className=''> */}
                                
                        {/* </div>   */}
                    
                </Row> 
                
              </form>
           
              
            </div>          
          </Col> 
                              
        </Row>  

          
                    
      </Container>
            
    
          

      
    </div>
    <Footer/>
    </>
  )


  
  function Footer ()  {
    return (
    <div className=" d-flex  flex-column min-vh-25 mt-auto  p-0 m-0 ">
         <Row className=' align-items-center justify-content-center my-5 p-0 m-0 '>
                <Col lg={4} sm={12} className="text-center ">
                  <div>
                    <img src={require('../../images/Logo Rosa.png')} height={110} alt='img'></img>
                  </div>
                  <div className="py-3 text-center">
                    <img src={require('../../images/Logotipo - Negro nani.png')} height={25} alt='img'></img>
                  </div>
                  <div className="text-center">
                    <span className="h5" style={styles.secondarySpan} >Marketing Digital</span>                
                  </div>
                </Col>
              <Col lg={4} sm={12} className=' text-center py-2'>
                <span className="h5 ">Asesoria en Marketing de contenidos</span>
              </Col>
              <Col lg={4} sm={12} className='text-lg-start text-center  '>              
                <span class="d-block p-2 ">
                  <img src={require('../../images/social-icons/Instagram.png')} height={35} alt='img'></img>
                  <span className='ms-3 h5'>@holasoynani.mkt</span> 
                </span>
                <span class="d-block p-2 ">
                  <img src={require('../../images/social-icons/Vector.png')} height={22} className='ps-1' alt='img'></img>
                  <span className='ms-4 h5'>holasoynani.mkt@gmail.com</span> 
                </span>
                <span class="d-block p-2 ">
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
    )}


}

