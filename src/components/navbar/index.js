import React from 'react'
import { styles } from './styles'

const navbar = () => {

  const scrollToHeader = () => {
    const whoIAm = document.getElementById('header')
    whoIAm.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToWhoIAm = () => {
    const whoIAm = document.getElementById('whoIAm')
    whoIAm.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollToWhatIDo = () => {
    const whatIDo = document.getElementById('whatIDo')
    whatIDo.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToWhyChooseMe = () => {
    const whyChooseMe = document.getElementById('whyChooseMe')
    whyChooseMe.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    contact.scrollIntoView({ behavior: 'smooth' })
  }

  return (


    <nav className="navbar navbar-expand-lg px-5 sticky-top" style={styles.navBarStyle} >
      <div className="container-fluid">

        <img style={styles.naniLogo} src={require('../../images/Logo-N-sombreado.png')} alt="Logo" />

        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item px-4">
              <span className="nav-link " style={styles.navText} aria-current="page" onClick={scrollToHeader} >Inicio</span>
            </li>
            <li className="nav-item px-4">
              <span className="nav-link " style={styles.navText} onClick={scrollToWhoIAm}>¿Quién soy?</span>
            </li>
            <li className="nav-item px-4">
              <span className="nav-link " style={styles.navText} onClick={scrollToWhatIDo} >¿Qué hago?</span>
            </li>
            <li className="nav-item px-4">
              <span className="nav-link" style={styles.navText} onClick={scrollToWhyChooseMe}>¿Por qué elegirme?</span>
            </li>
          </ul>
          <span className="navbar-text">
            <button style={styles.btnContacto} onClick={scrollToContact}>Contacto</button>
          </span>
        </div>
      </div>
    </nav>
  )
}

export default navbar
