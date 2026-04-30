import '../App.css';

export const TextContact = ({name}) => {
    
    return (
        <div className='p-container'>
            <p className='p'>Estos son los delegados de UGT de {name}, donde puedes contactar con cualquiera de ellos para
                hacer una consulta laboral pinchando en el logo del Whatsapp.
            </p>

            <p className='p second-p'>
                El mensaje llegará y os haremos llegar respuesta lo más pronto posible.
            </p>
        </div>
    )
}