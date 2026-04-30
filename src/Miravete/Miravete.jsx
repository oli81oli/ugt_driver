import '../App.css';

import { useContext, useEffect, useState, useRef } from 'react';
import MenuContext from '../context/MenuContext';
import ChatContext from '../context/ChatContext';
// import EmailContext from '../context/EmailContext';


import { Header } from '../MainPage/Header';
import { Menu } from '../MainPage/Menu';
import { NoBackImg } from '../Contact/NoBackImg';
import { Footer } from '../MainPage/Footer';
import { TextContainerCar } from '../Contact/TextContainerCar';
import { DelegadosMiravete } from './DelegadosMiravete';
import { InfoMiravete } from './InfoMiravete';

export const Miravete = ({ name, url }) => {
  const [padding, setPadding] = useState()
  const [menuHeight, setMenuHeight] = useState()
  const [footerHeight, setFooterHeight] = useState()
  const [viewHeight, setViewHeight] = useState('car')
  const [noPadding, setNoPadding] = useState(false)
  const menu = useRef(null)
  const footer = useRef(null)

  const { valueMenu, handleFalseMenu } = useContext(MenuContext)
  const { chatValues } = useContext(ChatContext)
  // const { emailValues } = useContext(EmailContext)

  const [showFooterCheck, setShowFooterCheck] = useState(true)
  const [showFooterChat, setShowFooterChat] = useState(false)
  const [showInfoDelegados, setShowInfoDelegados] = useState(false)
  const [showInfoInfo, setShowInfoInfo] = useState(false)
  const [showButtonDelegado, setShowButtonDelegado] = useState('')
  const [showButtonInfo, setShowButtonInfo] = useState('')

  const handleButtonDelegados = (e) => {
    valueMenu && handleFalseMenu()
    setShowInfoDelegados(true)
    setShowInfoInfo(false)
    setShowButtonDelegado(e.target.innerHTML)
    setShowButtonInfo('')
  }
  const handleButtonNews = (e) => {
    valueMenu && handleFalseMenu()
    setShowInfoDelegados(false)
    setShowInfoInfo(true)
    setShowButtonInfo(e.target.innerHTML)
    setShowButtonDelegado('')
  }

  const showFooter = () => {

    if (!chatValues.statusChat && !showInfoInfo) {
      return <div ref={footer}>
        <Footer
          id={'footer-main'}
          mainFooter={'setFooter'} />
      </div>
    }
    return null
  }

  useEffect(() => {
    let checkStatus = chatValues.statusChat 

    showInfoDelegados && setShowFooterCheck(false)
    checkStatus && showInfoDelegados && !showFooterCheck && setShowFooterChat(true)

  }, [showInfoDelegados, chatValues.statusChat, showFooterCheck])

  useEffect(() => {
    setPadding(menu.current.children[0].clientHeight)
    setMenuHeight(menu.current.clientHeight)
    setFooterHeight(footer.current.firstChild.clientHeight)
    valueMenu && handleFalseMenu()

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  
    if (window.screen.height < 737 && window.screen.width > 290) {
      setViewHeight('car car2')
      setNoPadding(true)
    }
    // eslint-disable-next-line
  }, [])
  
  return (
    <div>
      <div className='fixedMenu' ref={menu}>
        <Header />
        <Menu />
      </div>

      <div className='selectOption' style={{ paddingTop: padding }}>
        <button
          className={showButtonDelegado === 'delegados' ? `buttons ${showButtonDelegado}` : 'buttons'}
          onClick={(e) => handleButtonDelegados(e)}
        >delegados
        </button>


        <button
          className={showButtonInfo === 'info' ? `buttons ${showButtonInfo}` : 'buttons'}
          onClick={(e) => handleButtonNews(e)}
        >info
        </button>

      </div>

      <NoBackImg noPadding={noPadding} />

      {!showInfoDelegados && !showInfoInfo && <div className={!showInfoDelegados ? 'show' : 'hide'} style={{ minHeight: 100 - footerHeight + menuHeight + 'vh' }}>
        <img className={viewHeight}
          src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1718988627/uploads/smcehcqk0ispphk5kwtc.gif'
          alt='car' />
        <TextContainerCar name={name} url={url} />
      </div>}

      <DelegadosMiravete name={name} showInfoDelegados={showInfoDelegados} setShowFooterChat={setShowFooterChat} />
      <InfoMiravete showInfoInfo={showInfoInfo} />

      {showInfoDelegados && !showFooterChat ? <Footer id='footer-main' /> : null}
      {showFooterCheck ? showFooter() : null}
      {showFooterChat && showInfoDelegados && showFooterCheck ? <Footer id='footer-main' /> : null}
      {showInfoInfo && !showInfoDelegados && <Footer id='footer-main' />}

    </div>
  )
}