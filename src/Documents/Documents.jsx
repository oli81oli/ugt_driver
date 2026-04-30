import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Documents = () => {
    const [padding, setPadding] = useState()
    const menu = useRef(null)

    useEffect(() => {
        setPadding(menu.current.children[0].clientHeight)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
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

            <div className='p-container'>
                <p className='p'>
                    Aquí encontrarás documentos de interés para consultar, además de documentos para rellenar y mandar a la empresa. A tener encuenta que varios de estos documentos ya se envían a través de la aplicación de Moove.</p>
            </div>

            <div className='links'>
                <h2>documentos</h2>
            </div>

            <div className='flex-parent box-white'>
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        convenio colectivo
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1729178000/uploads/convenio_colectivo.pdf"
                        download="convenio colectivo.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        aviso incumplimiento jornada
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1704820466/uploads/aviso_incumplimiento_jornada.pdf"
                        download="aviso por incumplimiento jornada.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        cancelacion cuenta uber
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799535/uploads/cancelacion_cuenta_uber.pdf"
                        download="cancelacion cuenta uber.pdf" className="download">
                        descarga
                    </Link>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        cambio irpf
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to='https://res.cloudinary.com/dpflfpgcj/image/upload/v1733417934/uploads/cambio_irpf.pdf'
                        download="solicitud cambio irpf.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        calendario laboral 2026
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1765798389/uploads/calendario_2026.pdf"
                        download="calendario laboral.pdf" className="download">
                        descarga
                    </Link>
                </div>
                
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        baja slt
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1702493823/uploads/baja_slt.pdf"
                        download="baja de SLT.pdf" className="download">
                        descarga
                    </Link>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        cambio turno - horario
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799595/uploads/cambio_turno_horario.pdf"
                        download="cambio turno horario.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        cambio turno - horario - dias
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799609/uploads/cambio_turno_horas_dias.pdf"
                        download="cambio turno - horario - dias.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        renuncia bloque de libranza
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799573/uploads/renuncia_bloque_libranza.pdf"
                        download="renuncia bloque de libranza.pdf" className="download">
                        descarga
                    </Link>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        hoja de incidencias
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799567/uploads/hoja_incidencias.pdf"
                        download="hoja de incidencias.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        excedencia
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799548/uploads/excedencia.pdf"
                        download="excedencia.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        compensacion movil
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799541/uploads/compensacion_movil.pdf"
                        download="compensacion movil.pdf" className="download">
                        descarga
                    </Link>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        cambio bloque de libranza
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to='https://res.cloudinary.com/dpflfpgcj/image/upload/v1715800321/uploads/solicitud_bloque_libranza.pdf'
                        download="cambio bloque de libranza.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        cambio de base
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799528/uploads/cambio_base.pdf"
                        download="cambio de base.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        renuncia voluntaria
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799517/uploads/renuncia_voluntaria.pdf"
                        download="renuncia voluntaria.pdf" className="download">
                        descarga
                    </Link>
                </div>
            </div>

            <div className="flex-parent">
                <div className="flex-item flex-grow">
                    <div className="text-box">
                        asuntos propios
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799498/uploads/asuntos_propios.pdf"
                        download="asuntos propios.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        compensacion de festivos
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="https://res.cloudinary.com/dpflfpgcj/image/upload/v1715799617/uploads/compensacion_festivos.pdf"
                        download="compensacion de festivos.pdf" className="download">
                        descarga
                    </Link>
                </div>

                <div className="flex-item flex-grow">
                    <div className="text-box">
                        empty
                    </div>
                    <img src="https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871256/uploads/e1xsorc1rx7u6koktjx3.png"
                        alt="icon" />

                    <Link to="#"
                         className="download">
                        empty
                    </Link>
                </div>
            </div>

            <Footer id={'footer-main'} />
        </div>
    )
}