import { Link } from "react-router-dom";
import { stylesNavbar } from './stylesNavbar'

const navbar = () => {
  return (
    <nav className="flex justify-center items-center text-center flex-wrap bg-gradient-to-r from-yellow-200 via-lavander-300 to-pink-400 p-6">
    <div className="flex items-center flex-shrink-0 text-white mr-6">
      <Link to={'/'} href='#responsive-header' className="py-2 text-center">
      <img className=' ' style={stylesNavbar.naniLogo}  src={require('../../images/Logo N sombreado.png')}  alt='img'></img>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto ">
        <div className="text-sm lg:flex-grow">
          <Link to={'header'} href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-pink-400  mr-4">
            <b>
            Inicio
            </b>
          </Link>
          <Link to={'whoIAm'} href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
            <b>
            Quien soy?
            </b>
          </Link>
          <Link to={'whatIDo'} href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
            <b>
            Que hago?
            </b>
          </Link>
          <Link to={'whyChooseMe'} href='#responsive-header' className="block mt-4 lg:inline-block lg:mt-0 text-black  mr-4">
            <b>
            Porque elegirme?
            </b>
          </Link>
        </div>
          <Link to={'contact'} >
            <button className="bg-pink-400 hover:bg-pink-200 text-white font-bold py-2 px-4 rounded">
              Contacto
            </button>
        </Link>
    </div>
</nav>
  )
}

export default navbar