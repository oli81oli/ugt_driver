import '../App.css';

import { TextContact } from '../Contact/TextContact';
import { ContactBox } from '../Contact/ContactBox';
import { Chat } from '../Contact/Chat';

export const DelegadosVistalegre = ({ name, showInfoDelegados, setShowFooterChat }) => {
    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <TextContact name={name} />
            <div className='profile-container'>
                <ContactBox props={{ name: 'Ricardo', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34617906843' }} />
                <ContactBox props={{ name: 'Victor', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34627898022' }} />
                <ContactBox props={{ name: 'Mariano', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34678019396' }} />
                <ContactBox props={{ name: 'Raul', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34643273513' }} />
                <ContactBox props={{ name: 'Armando', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34644838479' }} />
            </div>

            <Chat resetValues={setShowFooterChat} />
        </div>
    )
}