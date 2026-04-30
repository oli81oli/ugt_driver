import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';
import { Miravete } from './Miravete/Miravete';
import { SanEpifanio } from './SanEpifanio/SanEpifanio';
import { Ventas } from './Ventas/Ventas';
import { Vistalegre } from './Vistalegre/Vistalegre';
import { Vaguada } from './Vaguada/Vaguada';
import { MadridRio } from './MadridRio/MadridRio';
import { Documents } from './Documents/Documents';
import { Base } from './Base/Base';
import { Afiliacion } from './Afiliacion/Afiliacion'
import { Denuncia } from './Denuncia/Denuncia';
import { Rrhh } from './RRHH/Rrhh';
import { Whatsapp } from './Whatsapp/Whatsapp';
// import { News } from './News/News';
import { Seguro } from './Seguro/Seguro'

import MenuProvider from './context/MenuProvider';
import ChatProvider from './context/ChatProvider';
// import EmailProvider from './context/EmailProvider';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* <ClientContext.Provider value={client}> */}
      <MenuProvider>
        <ChatProvider>
          {/* <EmailProvider> */}
            <Router>
              <Routes>
                <Route path='/' element={<App />} />
                <Route path='/documents' element={<Documents />} />
                <Route path='/base' element={<Base />} />
                <Route path='/afiliacion' element={<Afiliacion />} />
                <Route path='/denuncia' element={<Denuncia />} />
                <Route path='/rrhh' element={<Rrhh />} />
                <Route path='/whatsapp' element={<Whatsapp />} />
                {/* <Route path='/news' element={<News />} /> */}
                <Route path='/seguro' element={<Seguro />} />
                <Route path='/miravete' element={<Miravete name={'Miravete'} url={'https://chat.whatsapp.com/Cf8JdJ8sQJTCVnHIRaUmN2'} />} />
                <Route path='/sanEpifanio' element={<SanEpifanio name={'San Epifanio'} url={'https://chat.whatsapp.com/Gd094MyOh1V8UbsDyoEzeW?mode=hqrc'} />} />
                <Route path='/ventas' element={<Ventas name={'Ventas'} url={'https://chat.whatsapp.com/GeQvrAyCaOwlq02UYegO6d'} />} />
                <Route path='/vaguada' element={<Vaguada name={'Vaguada'} url={'https://chat.whatsapp.com/K7rs8XioTP92CAFvKukWLZ'} />} />
                <Route path='/vistalegre' element={<Vistalegre name={'Vistalegre'} url={'https://chat.whatsapp.com/BAKhR3y9DnzLLsZgA2cYgy'} />} />
                <Route path='/madridRio' element={<MadridRio name={'Madrid Rio'} url={'https://chat.whatsapp.com/Cf8JdJ8sQJTCVnHIRaUmN2'} />} />
              </Routes>
            </Router>
          {/* </EmailProvider> */}
        </ChatProvider>
      </MenuProvider>
    {/* </ClientContext.Provider> */}
  </StrictMode>
);


