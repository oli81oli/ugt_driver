import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Seguro = () => {
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
                    Para los afiliados a UGT hay disponible un seguro de sanciones por tan solo 13€, el plazo empieza el 7 de febrero y tiene validez de un año.</p>
            </div>

            <div className='links'>
                <Link to='https://res.cloudinary.com/dpflfpgcj/image/upload/v1741541339/uploads/seguro_sanciones_afiliados.pdf'
                download="seguro de sanciones.pdf" className="download">
                    <h2 className='btn afiliacion'>descargar</h2>
                </Link>
            </div>

            <div>
                <Footer id={'footer-main'} mainFooter={'setFooter'} />
            </div>
        </div>
    )
}