import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';
import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Denuncia = () => {

    const [padding, setPadding] = useState()
    const menu = useRef(null)


    useEffect(() => {
        setPadding(menu.current.children[0].clientHeight)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [])
    return (
        <div>
            <div className='fixedMenu' ref={menu}>
                <Header />
                <Menu />
            </div>

            <div style={{ paddingTop: padding }}>
                <NoBackImg />
            </div>

            <div className='p-container'>
                <p className='p'>
                    Pinchando en el enlace de "DENUNCIA" irás a la sección de denuncias de inspección de trabajo para poder rellenar ANONIMAMENTE lo que no está cumpliendo la empresa.</p>
            </div>

            <div className='links'>
                <Link to={'https://www.mites.gob.es/itss/web/Atencion_al_Ciudadano/COLABORA_CON_ITSS.html'}>
                    <h2 className='btn afiliacion'>denuncia</h2>
                </Link>
            </div>

            <div>
                <Footer id={'footer-main'} mainFooter={'setFooter'} />
            </div>
        </div>
    )

}