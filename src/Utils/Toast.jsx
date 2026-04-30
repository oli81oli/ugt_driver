import '../App.css';

export const Toast = ({ text, text_toast_menu, position }) => {

    return (
        <p className={text_toast_menu} style={{ top: position }}><u>{text}</u></p>
    )
}