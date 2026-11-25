import './App.css';
import { useContext, useEffect } from 'react';

import { Header } from './MainPage/Header';
import { Menu } from './MainPage/Menu';
import { MapLogo } from './MainPage/MapLogo';
import { UgtLogo } from './MainPage/UgtLogo';
import { TextContainer } from './MainPage/TextContainer';
import { FormHelp } from './MainPage/FormHelp';
import { Footer } from './MainPage/Footer';

import MenuContext from './context/MenuContext';

function App() {
  const { valueMenu, handleFalseMenu } = useContext(MenuContext);

  // La navegación siempre empieza cerrada al entrar en la home.
  useEffect(() => {
    if (valueMenu) handleFalseMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="page-container">
      <div className="fixedMenu">
        <Header />
        <Menu />
      </div>

      <main className="main">
        <div className="home-visual">
          <MapLogo />
          <UgtLogo />
        </div>

        <div className="home-panel">
          <TextContainer />
          <FormHelp />
        </div>
      </main>

      <Footer id="footer-main" />
    </div>
  );
}

export default App;
