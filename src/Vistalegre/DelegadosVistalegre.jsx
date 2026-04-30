import '../App.css';

import { Chat } from '../Contact/Chat';

export const DelegadosVistalegre = ({ name, showInfoDelegados, setShowFooterChat }) => {

    return (
        <div className={showInfoDelegados ? 'show' : 'hide'}>
            <div className='p-container'>
                <p className='p'>Todavía no hay delegad@s en {name}.
                </p>

                <p className='p second-p'>
                    En cuanto haya información acerca de la formación sindical en esta base, actualizaremos esta sección.
                </p>
            </div>
            <div className='profile-container' style={{ paddingBottom: '.4%' }}>
            </div>

            <Chat resetValues={setShowFooterChat} />
        </div>
    )
}