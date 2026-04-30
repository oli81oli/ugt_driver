import '../App.css';

import { TextContact } from '../Contact/TextContact';
import { ContactBox } from '../Contact/ContactBox';
import { Chat } from '../Contact/Chat';

export const DelegadosVentas = ({ name, showInfoDelegados, setShowFooterChat }) => {
    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <TextContact name={name} />
            <div className='profile-container'>
                <ContactBox props={{ name: 'Moises', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1718986763/uploads/ilp0pgx9fdbemknf5mlr.jpg', phone: '34630234711' }} />
                <ContactBox props={{ name: 'Eugenio', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34629830473' }} />
                <ContactBox props={{ name: 'Gorka', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34685551121' }} />
                <ContactBox props={{ name: 'Alberto', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1719497779/uploads/ndysoxeyyg0ol4ssqkvm.jpg', phone: '34696329935' }} />
                <ContactBox props={{ name: 'Raul', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34620510135' }} />
                <ContactBox props={{ name: 'Patricia', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34653320720' }} />
                <ContactBox props={{ name: 'Sofiyane', status: 'LOLS', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1720940387/uploads/mxi3i6zceoo5ymouwbkt.jpg', phone: '34637209740' }} />
                <ContactBox props={{ name: 'Eduardo', status: 'LOLS', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34680339167' }} />
            </div>

            <Chat resetValues={setShowFooterChat} />
        </div>
    )
}