import '../scss/pages/Servicios.scss'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import Spinner from '../utils/Spinner'


const fade = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
}

const Servicios = () => {
    const [imagenes, setImagenes] = useState([])

    useEffect(() => {
        const urlGallery = import.meta.env.VITE_BACKEND_GALERIA
        console.log("API_URL:", import.meta.env.VITE_BACKEND_GALERIA);
        const fetchImagenes = async () => {
            const res = await fetch(urlGallery)
            const data = await res.json()
            setImagenes(data.fotos)
        }
        fetchImagenes()
    }, [])

    const fullView = (imgLink) => {
        const fullImage = document.getElementById('FullImage')
        const fullScreen = document.getElementById('FullScreen')

        fullImage.src = imgLink
        fullScreen.style.display = 'flex'
    }

    const closeFullView = () => {
        const fullScreen = document.getElementById('FullScreen')
        fullScreen.style.display = 'none'
    }

    return (
        <motion.div
            variants={fade}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.4 }}
        >
            <main className='gallery'>
                <section className='gallery__tittle-container'>
                    <h1 className='gallery__tittle'>Trabajos realizados</h1>
                    <div className='gallery__tittle-bottom-border'></div>
                </section>



                {
                    imagenes && imagenes.length > 0 ? (
                        <>
                            <section className='gallery__gallery-container'>
                                {imagenes.map((url, i) => (
                                    <div key={i} className="gallery__image-container">
                                        <img
                                            src={url}
                                            alt={`auxilio-${i}`}
                                            onClick={() => fullView(url)}
                                        />
                                    </div>))}
                            </section>

                        </>
                    ) :
                        (
                            <Spinner />
                        )
                }





            </main>

            <div id='FullScreen'>
                <img id="FullImage" />
                <span id="CloseButton" onClick={() => closeFullView()}>x</span>
            </div>


        </motion.div>
    )
}

export default Servicios