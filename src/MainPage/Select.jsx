import '../App.css';
import { useContext } from 'react';

import { useNavigate } from 'react-router-dom';
import MenuContext from '../context/MenuContext';


export const Select = () => {
    const { valueMenu, handleFalseMenu } = useContext(MenuContext)
    const setMenu = () => valueMenu && handleFalseMenu()

    const navigate = useNavigate()

    const handleChange = (e) => navigate(`/${e.target.value}`)

    return (
        <select id="selectTag" onChange={handleChange} onClick={setMenu}>
            <option value="">-- Selecciona una Base --</option>
            <option value="miravete">miravete</option>
            <option value="sanEpifanio">san epifanio</option>
            <option value="ventas">ventas</option>
            <option value="vistalegre">vistalegre</option>
            <option value="vaguada">vaguada</option>
            <option value="madridRio">madrid rio</option>
        </select>
    )
}
