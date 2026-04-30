import '../App.css'
import { Link } from 'react-router-dom'

export const InfoMiravete = ({ showInfoInfo }) => {
    return (
        <div className={showInfoInfo ? 'show' : 'hide'}>
            <div className='text-container'>

                <p style={{ paddingBottom: '7%' }}>
                Aquí encontrarás enlaces que, si haces click, te llevarán a la dirección de correo donde quieras mandar el email o, dependiendo del caso, llamar al número de teléfono correspondiente.
                </p>

            </div>
            <div className='links-box2'>

                <Link to='mailto:lizeth.castro@moovecars.com'>
                    <div className='link'>
                        <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1720110069/uploads/ew2bbknumnrkzjxnaxxt.png'
                            alt='logo' className='logos-base2' />
                        jefe de base
                    </div>
                </Link>

                <Link to='tel:+34605607353'>
                    <div className='link'>
                        <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720113724/uploads/mozpxmg6io5vmsi7ogf2.png'
                            alt='logo' className='logos-base2' />
                        jefe de base
                    </div>
                </Link>

                 <Link to='tel:+34605356836'>
                    <div className='link'>
                        <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720113724/uploads/mozpxmg6io5vmsi7ogf2.png'
                            alt='logo' className='logos-base2' />
                        garita 1
                    </div>
                </Link>

                <Link to='tel:+34635264992'>
                    <div className='link'>
                        <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720113724/uploads/mozpxmg6io5vmsi7ogf2.png'
                            alt='logo' className='logos-base2' />
                        garita 2
                    </div>
                </Link>
            </div>
        </div>
    )
}