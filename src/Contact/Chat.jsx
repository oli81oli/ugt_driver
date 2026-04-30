import '../App.css'
import { useContext } from 'react'
import ChatContext from '../context/ChatContext'
import { Footer } from '../MainPage/Footer'

export const Chat = ({resetValues}) => {

    const { chatValues, resetChatValues } = useContext(ChatContext)

    const sendMessage = (e) => {

        let a = e.target.childNodes[0].parentNode.firstChild.parentNode.offsetParent.childNodes[1].childNodes[1].childNodes[0].value;

        if ('' !== a) {
            e.target.childNodes[0].parentNode.firstChild.parentNode.offsetParent.childNodes[2].innerText = chatValues.phone
            let b = e.target.childNodes[0].parentNode.firstChild.parentNode.offsetParent.childNodes[2].innerText,
                c = e.target.childNodes[0].parentNode.firstChild.parentNode.offsetParent.childNodes[1].childNodes[1].childNodes[0].value,
                d = 'https://web.whatsapp.com/send',
                x = b,
                f = '&text=' + c;

            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
                d = 'whatsapp://send';

            let g = d + '?phone=' + x + f;
            window.open(g, '_blank');
        }
    }

    const closeChat = () => {
        resetValues(false)
        resetChatValues()
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    return (
        <div id='absolute' className={chatValues.statusChat ? 'show' : 'hide'} >
            <div id='whatsapp-chat' className={chatValues.statusChat ? 'show' : 'hide'}>
                <div className='header-chat'>
                    <div className='head-home'>
                        <h3>Delegado UGT</h3>
                        <div className='info-avatar'><img id='avatar-photo'
                            src={chatValues.src ? chatValues.src : 'https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871263/uploads/v8xummfbqaofoq3w7jou.png'} alt='logo' />

                        </div>
                    </div>

                    <div className='get-new'>
                        <div id='get-label'>Soporte</div>
                        <div id='get-nama'>Servicio de consulta</div>
                    </div>
                </div>

                <div className='start-chat'>
                    <div className='first-msg'><span>¡Hola! ¿Qué puedo hacer por ti?</span></div>
                    <div className='blanter-msg'><textarea id='chat-input' placeholder='Escribe un mensaje' maxLength='120'
                        rows='1'></textarea>
                        <button onClick={(e) => sendMessage(e)} id='send_it' className='margin'>Enviar</button>
                    </div>
                </div>

                <div id='get-number'>1</div>
                <button className='close-chat' onClick={() => closeChat()}>×</button>
            </div>
            <Footer id={'footer-form'} />
        </div>
    )
}