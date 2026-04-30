import '../App.css';
import { useContext, useEffect, useRef } from 'react';
import ChatContext from '../context/ChatContext';


export const ContactBox = ({ props }) => {

    const mainBox = useRef(null)
    const { chatValues, handleChatValues } = useContext(ChatContext)

    const { name, status, src, phone } = props

    const showChatfn = (name) => {
        handleChatValues({
            name,
            src,
            phone,
            statusChat: true
        })
    }

    useEffect(() => {
        if (Object.keys(chatValues).length) {

            window.scrollTo({
                top: mainBox.current.offsetParent.scrollHeight * 100,
                behavior: "smooth"
            })
        }
    }, [chatValues])

    return (
        <div className='contact-box' ref={mainBox}>

            <div className='profile-text'>
                <h3>{name}</h3>
                <hr />
                <p>Delegad@ {status}</p>
            </div>

            <div className='profile'>
                <img id={name} className='profile-photo second-item'
                    src={src}
                    alt='profile' />
                <img className='profile-logo'
                    src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871223/uploads/a03vhjnabg9o1ctm0nnq.png'
                    alt='logo' />
                <img className='whatsapp-logo' onClick={() => showChatfn(name)}
                    src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1701871270/uploads/gggyrqnhb7jnalorhk6u.png'
                    alt='logo' />
            </div>
        </div>
    )
}
