import './SanEpifanio.css';

import { useContext, useEffect, useState, useRef } from 'react';
import MenuContext from '../context/MenuContext';
import ChatContext from '../context/ChatContext';

import { Header } from '../MainPage/Header';
import { Menu } from '../MainPage/Menu';
import { NoBackImg } from '../Contact/NoBackImg';
import { Footer } from '../MainPage/Footer';
import { TextContainerCar } from '../Contact/TextContainerCar';
import { DelegadosSanEpifanio } from './DelegadosSanEpifanio';
import { InfoSanEpifanio } from './InfoSanEpifanio'

export const SanEpifanio = ({ name, url }) => {
  
  const [padding, setPadding] = useState()
  const [viewHeight, setViewHeight] = useState('car')
  const [noPadding, setNoPadding] = useState(false)
  const menu = useRef(null)

  const { valueMenu, handleFalseMenu } = useContext(MenuContext)
  const { chatValues } = useContext(ChatContext)

  const [showFooterCheck, setShowFooterCheck] = useState(true)
  const [showInfoDelegados, setShowInfoDelegados] = useState(false)
  const [showInfoInfo, setShowInfoInfo] = useState(false)
  const [showButtonDelegado, setShowButtonDelegado] = useState('')
  const [showButtonInfo, setShowButtonInfo] = useState('')

  const handleButtonDelegados = (e) => {
    valueMenu && handleFalseMenu()
    setShowFooterCheck(false)
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
      return <Footer id={'footer-main'} />
    }
    return null
  }

  const showFooterChat = Boolean(chatValues.statusChat && showInfoDelegados && !showFooterCheck)


  useEffect(() => {
    setPadding(menu.current.children[0].clientHeight)
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

      {!showInfoDelegados && !showInfoInfo && <div className={!showInfoDelegados ? 'show' : 'hide'}>
        <img className={viewHeight}
          src='https://res.cloudinary.com/dpflfpgcj/image/upload/v1718988627/uploads/smcehcqk0ispphk5kwtc.gif'
          alt='car' />
        <TextContainerCar name={name} url={url} />
      </div>}

      <DelegadosSanEpifanio name={name} showInfoDelegados={showInfoDelegados} />
      <InfoSanEpifanio showInfoInfo={showInfoInfo} />

      {showInfoDelegados && !showFooterChat ? <Footer id='footer-main' /> : null}
      {showFooterCheck ? showFooter() : null}
      {showFooterChat && showInfoDelegados && showFooterCheck ? <Footer id='footer-main' /> : null}
      {showInfoInfo && !showInfoDelegados && <Footer id='footer-main' />}

    </div>
  )
}