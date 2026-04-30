import '../App.css';

import { TextContact } from '../Contact/TextContact';
import { ContactBox } from '../Contact/ContactBox';
import { Chat } from '../Contact/Chat';

export const DelegadosVaguada = ({ name, showInfoDelegados, setShowFooterChat }) => {
    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <TextContact name={name} />
            <div className='profile-container'>
                <ContactBox props={{ name: 'Abril', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34727717641' }} />
                <ContactBox props={{ name: 'Jorge', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34656436308' }} />
                <ContactBox props={{ name: 'Marcela', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34619477092' }} />
            </div>

            <Chat resetValues={setShowFooterChat} />
        </div>
    )
}