import '../App.css';

import { TextContact } from '../Contact/TextContact';
import { ContactBox } from '../Contact/ContactBox';
import { Chat } from '../Contact/Chat';

export const DelegadosMiravete = ({ name, showInfoDelegados, setShowFooterChat }) => {

    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <TextContact name={name} />
            <div className='profile-container'>
                <ContactBox props={{ name: 'Jesús', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1713520065/uploads/lkvrsdglqi7xuawzfk6p.png', phone: '34626295344' }} />
                <p className="jesus-text">Jesús lleva todos los temas judiciales y de asesoría jurídica de la sección sindical, si tenéis alguna reclamación que hacer (sanciones, despidos, absentismos...) poneros en contacto con él.</p>
                <hr></hr>
                <ContactBox props={{ name: 'Inma', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1715104536/uploads/n6sbm0cwuzzdljtr4lgu.jpg', phone: '34695859778' }} />
                <ContactBox props={{ name: 'Gloria', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1715104651/uploads/obeizhih8dbnhmhczie5.jpg', phone: '34644288071' }} />
                <ContactBox props={{ name: 'Paloma', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1713521123/uploads/xiltmn5ku0tu1iaqk8ih.jpg', phone: '34626918143' }} />
                <ContactBox props={{ name: 'Anacaona', status: 'LOLS', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1713521070/uploads/aze2fjsw41inie1f47dc.jpg', phone: '34667297186' }} />
                <ContactBox props={{ name: 'Domingo', status: 'LOLS', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1713519690/uploads/idynpgfntqocyyzfy6dt.png', phone: '34645924608' }} />
            </div>

            <Chat resetValues={setShowFooterChat} />

        </div>
    )
}