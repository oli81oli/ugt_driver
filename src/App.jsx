import './App.css';
import { useContext, useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Header } from './MainPage/Header'
import { Menu } from './MainPage/Menu'
import { MapLogo } from './MainPage/MapLogo'
import { UgtLogo } from './MainPage/UgtLogo'
import { TextContainer } from './MainPage/TextContainer';
import { Footer } from './MainPage/Footer';
import { Toast } from './Utils/Toast';

import MenuContext from './context/MenuContext';


function App() {

  const [padding, setPadding] = useState()
  const [top, setTop] = useState()
  const [footerHeight, setFooterHeight] = useState()
  const [menuHeight, setMenuHeight] = useState(0)
  const menu = useRef(null)
  const footer = useRef(null)
  const { valueMenu, handleFalseMenu } = useContext(MenuContext)


  useEffect(() => {
    setPadding(menu.current.children[0].clientHeight - menu.current.clientHeight - menu.current.clientHeight)
    setFooterHeight(footer.current.firstChild.clientHeight)
    setMenuHeight(menu.current.clientHeight)
    setTop(menu.current.children[0].clientHeight)
    valueMenu && handleFalseMenu()
    // eslint-disable-next-line
  }, [])

  return (
    <div className='page-container'>
      <div className='fixedMenu' ref={menu}>
        <Header />
        <Menu />
      </div>

      <div className='main'>
        <MapLogo />
        <UgtLogo />
      </div>

      <TextContainer footerHeight={footerHeight} menuHeight={menuHeight} />

      <div ref={footer}>
        <Footer id={'footer-main'} mainFooter={'setFooter'} />
      </div>
    </div>
  );
}

export default App;
