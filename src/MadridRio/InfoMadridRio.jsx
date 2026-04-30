import '../App.css'
import { Link } from 'react-router-dom'

export const InfoMadridRio = ({ showInfoInfo }) => {
    return (
        <div className={showInfoInfo ? 'show' : 'hide'}>
            <div className='text-container'>

                <p style={{ paddingBottom: '7%' }}>
                Aquí encontrarás enlaces que, si haces click, te llevarán a la dirección de correo donde quieras mandar el email o, dependiendo del caso, llamar al número de teléfono correspondiente.
                </p>

            </div>
            <div className='links-box2'>

                <Link to='mailto:mario.moreno@moovecars.com'>
                    <div className='link'>
                        <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/o_83/v1720110069/uploads/ew2bbknumnrkzjxnaxxt.png'
                            alt='logo' className='logos-base2' />
                        jefe de base
                    </div>
                </Link>

                <Link to='tel:+34675294603'>
                    <div className='link'>
                        <img src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1720113724/uploads/mozpxmg6io5vmsi7ogf2.png'
                            alt='logo' className='logos-base2' />
                        jefe de base
                    </div>
                </Link>
            </div>
        </div>
    )
}