import styles from "./Footer.module.css";
import instagranLogo from "../../public/insta_logo.png";
import faceLogo from "../../public/face_logo.png";
import whatsLogo from "../../public/whats_logo.png";

function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.container}>
        <div className={styles.RichText}>
          <div className={styles.Icones}>
            <a href="https://www.instagram.com/accounts/login/" target="_blank" rel="noopener noreferrer">
              <img src={instagranLogo} alt="Logotipo do Instagram" />
            </a>
            <a href="https://www.facebook.com/?locale=pt_BR" target="_blank" rel="noopener noreferrer">
              <img src={faceLogo} alt="Logotipo do Facebook" />
            </a>
            <a href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer">
              <img src={whatsLogo} alt="Logotipo do Whatsapp" />
            </a>
          </div>
          <h2>Ticket Online</h2>
          <p>Endereço: Hollywood Walk of Fame, Hollywood, Califórnia, EUA</p>
          <p>Telefone: (47) 91234-56789</p>
          <a href="mailto:contato@ticketonline.com.br">Enviar Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
