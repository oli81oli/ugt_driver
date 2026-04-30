import { Link } from 'react-router-dom';
import '../App.css';


export const TextContainerCar = ({ name, url }) => {

    return (
        <div className='container-text-contact'>
            <div className='info-text'>
                <h2>{name}</h2>

                <Link to={url}>
                    <h4 className='btn whatsapp-base'>unirme a whatsapp</h4>
                </Link>
            </div>
        </div>
    )
}