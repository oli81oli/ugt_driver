import '../App.css'
import { useEffect, useRef, useState } from 'react'

import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Afiliacion = () => {

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

      <div className="fixedMenu" ref={menu}>
        <Header />
        <Menu />
      </div>

        <div style={{ paddingTop: padding }}>
          <NoBackImg />

        </div>

        <div className="p-container">
          <p className="p">
            Pinchando en el enlace de "AFILIACION" irás a la sección oficial de la web de UGT para poder rellenar tú mismo la ficha para estar afiliado.
          </p>
        </div>

        <div className="links">
          <a
            href="https://www.ugt.es/ficha-de-afiliacion"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className="btn afiliacion">afiliacion</h2>
          </a>
        </div>

      <Footer id={'footer-main'} mainFooter={'setFooter'} />

    </div>
  )
}