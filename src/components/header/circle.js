import { useEffect } from 'react';
import { styles } from './styles'
import { useRef } from 'react';
// import { WindowSize } from '../../utils/windowsSize';

const RenderCircles = () => {
    const windowSize = useRef([window.innerWidth, window.innerHeight]);


    useEffect(() => {
        CirclesImg()
        const circle = document.getElementById("backgroundCircle");

        if (windowSize.current > 1200) {
            circle.style.right = '7vw'
        } else {
            circle.style.right = '1vw'
        }
    }, []);



    const CirclesImg = () => {

        const circles = document.getElementsByClassName('element')
        if (circles.length > 0) {
            const n = 6;  // numero de circulos
            // value of the radio of the circle custom to all window sizes
            const r = windowSize.current[0] > 1500 ? 350 : windowSize.current[0] > 1200 ? 270 : windowSize.current[0] > 992 ? 250 : windowSize.current[0] > 768 ? 200 : windowSize.current[0] > 576 ? 150 : 100


            let angulo = 0;
            let originX = circles[0].offsetLeft
            let originY = circles[0].offsetTop

            setInterval(() => {
                angulo += 0.01
                //iterate over the circles and set the position of each 
                for (let i = 0; i < n; i++) {
                    circles[i].style.left = `${originX + r * Math.cos(angulo + 2 * Math.PI / n * i)}px`
                    circles[i].style.top = `${originY + r * Math.sin(angulo + 2 * Math.PI / n * i)}px`
                }
                // optimise the performance of the animation
                if (angulo > 2 * Math.PI) {
                    angulo = 0
                }

            }, 50)
        }


        //adding the images to the circles after the circles are created
        const imgs = document.getElementsByClassName('element')


        imgs[0].innerHTML = `<img class='img-fluid' src=${require('../../images/Unicornio-corazón.png')}  alt='img'></img>`
        imgs[1].innerHTML = `<img class='img-fluid' src=${require('../../images/Unicornio-globo.png')}  alt='img'></img>`
        imgs[2].innerHTML = `<img class='img-fluid' src=${require('../../images/Unicornio-sentado-Rainbow.png')}  alt='img'></img>`
        imgs[3].innerHTML = `<img class='img-fluid' src=${require('../../images/Unicornio-notebook.png')}  alt='img'></img>`
        imgs[4].innerHTML = `<img class='img-fluid' src=${require('../../images/Unicornio-tobogan.png')}  alt='img'></img>`
        imgs[5].innerHTML = `<img class='img-fluid' src=${require('../../images/Unicornio-scooter.png')}  alt='img'></img>`

        // optimise the performance of the image loading 
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.backgroundImage = `url(${imgs[i].firstChild.src})`
            imgs[i].style.backgroundSize = 'cover'
            imgs[i].style.backgroundPosition = 'center'
            imgs[i].firstChild.remove()
        }



    }



    return (
        <div id="circle" className='d-flex align-items-center justify-content-center ' style={styles.circle}  >
            <div className='bg-light element' style={styles.element}>

            </div>
            <div className='bg-light element ' style={styles.element} >
                {/* <img src={require('../../images/Unicornio-globo.png')} height={150} alt='img'></img> */}
            </div>
            <div className='bg-light element ' style={styles.element}>
                {/* <img src={require('../../images/Unicornio-sentado-Rainbow.png')} height={150} alt='img'></img> */}
            </div>
            <div className='bg-light element ' style={styles.element}>
                {/* <img src={require('../../images/Unicornio-notebook.png')} height={150} alt='img'></img> */}
            </div>
            <div className='bg-light element ' style={styles.element}>
                {/* <img src={require('../../images/Unicornio-tobogan.png')} height={150} alt='img'></img> */}
            </div>
            <div className='bg-light element ' style={styles.element}>
                {/* <img src={require('../../images/Unicornio-scooter.png')} height={150} alt='img'></img> */}
            </div>
        </div >

    )
}

export default RenderCircles