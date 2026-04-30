import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Whatsapp = () => {
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
                    Para que estés informado, te dejamos el enlace de nuestros grupos de Whatsapp.</p>
            </div>

            <div className='links'>
                <Link to={'https://chat.whatsapp.com/CsPe4lB4Tv1AncX4pE9RBX'}>
                    <h2 className='btn whatsapp'>unirme</h2>
                </Link>
            </div>

            <div>
            <Footer id={'footer-main'} mainFooter={'setFooter'}  />
            </div>
        </div>
    )
}