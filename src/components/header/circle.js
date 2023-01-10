import { useEffect } from 'react';
import { styles } from './styles'
const RenderCircles = () => {



    useEffect(() => {
        CirclesImg()
    }, []);



    const CirclesImg = () => {
        const circles = document.getElementsByClassName('element')
        if (circles.length > 0) {
            const n = 6;  // numero de circulos
            const r = 450 // radio

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


        imgs[0].innerHTML = `<img src=${require('../../images/Unicornio-corazón.png')} height=${150} alt='img'></img>`
        imgs[1].innerHTML = `<img src=${require('../../images/Unicornio-globo.png')} height=${150} alt='img'></img>`
        imgs[2].innerHTML = `<img src=${require('../../images/Unicornio-sentado-Rainbow.png')} height=${150} alt='img'></img>`
        imgs[3].innerHTML = `<img src=${require('../../images/Unicornio-notebook.png')} height=${150} alt='img'></img>`
        imgs[4].innerHTML = `<img src=${require('../../images/Unicornio-tobogan.png')} height=${150} alt='img'></img>`
        imgs[5].innerHTML = `<img src=${require('../../images/Unicornio-scooter.png')} height=${150} alt='img'></img>`

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