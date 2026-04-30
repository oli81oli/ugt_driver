import '../App.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react';

import { Header } from '../MainPage/Header'
import { Menu } from '../MainPage/Menu'
import { NoBackImg } from '../Contact/NoBackImg'
import { Footer } from '../MainPage/Footer'

export const Base = () => {
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
                    Aquí encontrarás los QR's que tienes en el tablón de la base
                    pasados a enlaces donde te redirigirán al mismo sitio que el QR.</p>
            </div>

            <div className='links'>

                <h2>enlaces</h2>

                <div className='links-box1'>
                    <Link to='https://downloadappversion.moovecars.com/moovedriver_V5.0.0.apk'>
                        <div className='link'>
                            <img className='logos-base'
                                src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1712220727/uploads/bp2bdjxgw3njagczhv74.svg'
                                alt='logo' />
                            moove app <span>(android)</span>

                        </div>
                    </Link>

                    <Link to='https://apps.apple.com/es/app/moovefleet-driver/id6443943176'>
                        <div className='link'>
                            <img className='logos-base'
                                src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1712220727/uploads/bp2bdjxgw3njagczhv74.svg'
                                alt='logo' />
                            moove app <span>(ios)</span>
                        </div>
                    </Link>


                    <Link to='https://play.google.com/store/apps/details/Geotab_Drive?id=com.geotab.androidCheckmate&hl=es&gl=US'>
                        <div className='link'>
                            <img className='logos-base2'
                                src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1737137151/uploads/vxkibiv6c7a1t8mixhfo.svg'
                                alt='logo' />
                            geotab <span>(android)</span>

                        </div>
                    </Link>
                </div>

                <div className='links-box1'>
                    <Link to='https://apps.apple.com/es/app/geotab-drive/id921754134'>
                        <div className='link link-no-mt'>
                            <img className='logos-base2'
                                src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1737137151/uploads/vxkibiv6c7a1t8mixhfo.svg'
                                alt='logo' />
                            geotab <span>(ios)</span>
                        </div>
                    </Link>

                    <Link to='https://calendly.com/telefonia-moovecars'>
                        <div className='link'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720113724/uploads/mozpxmg6io5vmsi7ogf2.png'
                                alt='logo' className='logos-base2' />
                            cita telefonia
                        </div>
                    </Link>
                </div>

                <div className='links-box1'>
                    <Link to='https://sites.google.com/view/gestoresmiravete/incidencia?authuser=0'>
                        <div className='link link-no-mt'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720108498/uploads/wi5ebxe3ern0r0givzkh.png'
                                alt='logo' className='logos-base2' />
                            incidencias
                        </div>
                    </Link>

                    <Link to='https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSc7xFuWEFFl3SEDa-FPLeWyzaAEruz_pKImWc-T1_n5qaxNAQ%2Fviewform&followup=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSc7xFuWEFFl3SEDa-FPLeWyzaAEruz_pKImWc-T1_n5qaxNAQ%2Fviewform&ifkv=ASKXGp1JlPlC4ISLeoFq0F4-RxA9DUVeVom958oYRXlSeV2BAY-ZxSadd7wDzenZmm09xDT5sj8q&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1493642524%3A1700726401045260&theme=glif'>
                        <div className='link'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1712220741/uploads/mfnfc14jwxj8dtec8dmw.png'
                                alt='logo' className='logos-base2' />
                            repostaje
                        </div>
                    </Link>
                </div>

                <div className='links-box1'>
                    <Link to='https://forms.office.com/pages/responsepage.aspx?id=zjeuWplqG0m4Tq6vRsA_DnMW15Jj909NtQHL-su-vddUQTBWRVhPSDBGQ0gwVjVKVDRXSTU2RDNHRCQlQCN0PWcu&origin=QRCode&route=shorturl'>
                        <div className='link  link-no-mt'>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1712220750/uploads/iqckktfevml1fag3c6yd.png'
                                alt='logo' className='logos-base2' />
                            volante mutua
                        </div>
                    </Link>

                    <Link to='https://moovecars-canaletico.appcore.es/'>
                        <div className='link' style={{ marginBottom: '20%' }}>
                            <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1712220711/uploads/ochanfzsmieau7ktdkgy.png'
                                alt='logo' className='logos-base2' />
                            canal etico
                        </div>
                    </Link>
                </div>
            </div>

            <div style={{ marginTop: '-5%' }}>
                <hr></hr>
            </div>

            <div>
                <h3 className='location-text'>Ubicaciones de la Mutua que nos pertenece</h3>
                <Link to={'https://www.google.com/search?q=Mutua+Universal+Madrid&client=ms-android-huawei&sca_esv=f5d76052eac9eedd&sca_upv=1&sxsrf=ADLYWIIXW9hL6g1ecifiCN9LkmndFqRHVA:1722102196211&udm=1&sa=X&ved=2ahUKEwit9q_N4seHAxXs8wIHHeS9ElIQxMEEegQIIRAB&biw=320&bih=626&dpr=3.38#ip=1'}>
                    <h2 className='location-btn' style={{ marginBottom: '10%' }}>ver</h2>
                </Link>
            </div>

            <Footer id={'footer-main'} />
        </div>
    )
}

