import '../App.css';

export const Footer = ({ id, mainFooter }) => {

    let showClassFooter = ''
    if (mainFooter) {
        showClassFooter = mainFooter
    }
  
    return (
        <footer id={id} className={showClassFooter}>
            <p>Servicio informativo de UGT</p>
        </footer>
    )
}