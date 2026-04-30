import '../App.css'
import { useContext } from 'react'
import ChatContext from '../context/ChatContext'
import { Footer } from '../MainPage/Footer'

export const Chat = ({ resetValues }) => {

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
 <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            width="20"
                            height="20"
                            fill="#ffffff"
                            className='position-whats'
                        >
                            <path d="M19.11 17.53c-.27-.14-1.6-.79-1.85-.88-.25-.09-.43-.14-.61.14-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.14-1.14-.42-2.17-1.34-.8-.71-1.34-1.6-1.5-1.87-.16-.27-.02-.42.12-.56.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27 0 1.34.98 2.64 1.12 2.82.14.18 1.93 2.96 4.68 4.15.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.6-.65 1.82-1.28.23-.63.23-1.17.16-1.28-.07-.11-.25-.18-.52-.32z" />
                            <path d="M16 3C9.37 3 4 8.37 4 15c0 2.1.55 4.07 1.52 5.78L4 29l8.4-1.47C14.07 28.46 15.01 28.6 16 28.6c6.63 0 12-5.37 12-12S22.63 3 16 3zm0 22.6c-.85 0-1.69-.13-2.5-.39l-.18-.06-4.99.87.9-4.87-.12-.19A9.57 9.57 0 0 1 6.4 15c0-5.3 4.3-9.6 9.6-9.6s9.6 4.3 9.6 9.6-4.3 9.6-9.6 9.6z" />
                        </svg>
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