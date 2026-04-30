import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Rrhh = () => {
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
                    Aquí encontrarás todo lo referente a Recursos Humanos, tanto para pedir cita como para mandarles un email, asi como otros correos electrónicos de interés.</p>
            </div>

            <div className='links'>

                <h2>citas</h2>

                <div>
                    <div className='links-box1'>
                        <Link to='https://calendly.com/agenda1rrhh'>
                            <div className='link'>
                                <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1712220768/uploads/aytqdiivhkhvkzp8cgin.svg'
                                    alt='logo' className='logos-base2' />
                                RRHH-1
                            </div>
                        </Link>

                        <Link to='https://calendly.com/agenda2rrhh'>
                            <div className='link'>
                                <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1712220768/uploads/aytqdiivhkhvkzp8cgin.svg'
                                    alt='logo' className='logos-base2' />
                                RRHH-2
                            </div>
                        </Link>

                        <Link to='https://calendly.com/agenda3rrhh'>
                            <div className='link link-no-mt'>
                                <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1712220768/uploads/aytqdiivhkhvkzp8cgin.svg'
                                    alt='logo' className='logos-base2' />
                                RRHH-3
                            </div>
                        </Link>
                    </div>
                </div>

                <h2 style={{ marginTop: 75 }}>correos</h2>

                <div className='links-box2'>
                    <Link to='mailto:atencionrrhh@moovecars.com'>
                        <div className='link'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1720110069/uploads/ew2bbknumnrkzjxnaxxt.png'
                                alt='logo' className='logos-base2' />
                            atencion rrhh
                        </div>
                    </Link>

                    <Link to='mailto:atencion24h@moovecars.com'>
                        <div className='link'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1720110069/uploads/ew2bbknumnrkzjxnaxxt.png'
                                alt='logo' className='logos-base2' />
                            atencion 24h
                        </div>
                    </Link>

                    <Link to='mailto:gestores@moovecars.com'>
                        <div className='link'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1720110069/uploads/ew2bbknumnrkzjxnaxxt.png'
                                alt='logo' className='logos-base2' />
                            gestores
                        </div>
                    </Link>

                    <Link to='tel:+34911935905'>
                        <div className='link'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720113724/uploads/mozpxmg6io5vmsi7ogf2.png'
                                alt='logo' className='logos-base2' />
                            dvuelta
                        </div>
                    </Link>

                </div>
                {/* <div className='links-box1'>
                </div>
                <div className='links-box1'>
                </div>
                <div className='links-box1'>
                </div> */}
            </div>



            <Footer id={'footer-main'} />
        </div>

    )
}