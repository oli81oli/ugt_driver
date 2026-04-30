import '../App.css';

import { TextContact } from '../Contact/TextContact';
import { ContactBox } from '../Contact/ContactBox';
import { Chat } from '../Contact/Chat';

export const DelegadosMadridRio = ({ name, showInfoDelegados, setShowFooterChat }) => {
    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <TextContact name={name} />
            <div className='profile-container'>
                <ContactBox props={{ name: 'Marco', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34604226991' }} />
                <ContactBox props={{ name: 'Daniel', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1777562354/hlspihlk45kgtarddbzs.jpg', phone: '34609104030' }} />
                <ContactBox props={{ name: 'Gustavo', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34600083159' }} />
                <ContactBox props={{ name: 'Consuelo', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1777562330/qxfngrbebibfioijvvin.jpg', phone: '34633241085' }} />
                <ContactBox props={{ name: 'Felipe', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1777562377/zshkve0grjz4dkkr11ac.jpg', phone: '34627561990' }} />
                <ContactBox props={{ name: 'Juan Gabriel', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34603919801' }} />
                <ContactBox props={{ name: 'Rafael', status: 'de Comité', src: 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png', phone: '34657577798' }} />
            </div>

            <Chat resetValues={setShowFooterChat} />
        </div>
    )
}