import React from 'react'
import { Container, Row } from 'react-bootstrap'
import { styles } from './styles'

export default function Contact() {












  const Footer = () => (
    
    <Row className="d-flex mt-auto min-vw-100 bg-dark">
      <span className="text-muted">Place sticky footer content here.</span>
      <div className="container">
        
      </div>
    </Row>
  )





  return (
    <div className=" d-flex bd-highlight flex-column min-vh-100 mt-auto  p-0 m-0 ">


            
            {/* <span class=" text-muted">Place sticky footer content here.</span> */}
          

            <div className='d-flex flex-row align-items-center justify-content-center mt-auto my-5'>
              <div className="d-flex flex-column text-center w-25">
                <div>
                  <img src={require('../../images/Logo Rosa.png')} height={110} alt='img'></img>
                </div>
                <div className="py-2 text-center">
                  <img src={require('../../images/Logotipo - Negro nani.png')} height={25} alt='img'></img>
                </div>
                <div className="text-center">
                  <span className="" style={styles.secondarySpan} >Marketing Digital</span>                
                </div>
              </div>

              <span className="text-center w-25">Place sticky footer content here.</span>
              <span className="text-center w-25">Place sticky footer content here.</span>
            </div>

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

