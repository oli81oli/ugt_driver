import '../App.css';

import { TextContact } from '../Contact/TextContact';
import { ContactBox } from '../Contact/ContactBox';
import { Chat } from '../Contact/Chat';

export const DelegadosSanEpifanio = ({ name, showInfoDelegados, setShowFooterChat }) => {
    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <TextContact name={name} />
            <div className='profile-container'>
                <ContactBox props={{ name: 'Daniel', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871175/uploads/tsqfy8yygwdmdiambysu.jpg', phone: '34662603476' }} />
                <ContactBox props={{ name: 'Oliver', status: 'LOLS', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871249/uploads/vovwffkadywtbw1ymtkc.png', phone: '34662603476' }} />
                <ContactBox props={{ name: 'Carlos', status: 'LOLS', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34674715712' }} />
            </div>

            <Chat resetValues={setShowFooterChat} />
        </div>
    )
}