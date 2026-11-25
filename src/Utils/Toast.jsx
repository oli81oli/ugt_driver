import './Toast.css';

export const Toast = ({ text, text_toast_menu }) => {

    return (
        <p className={text_toast_menu}>{text}</p>
    )
}