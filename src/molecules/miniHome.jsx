import styles from "./miniHome.module.css";
import Fachada from "../assets/fachada_cinema.jpg";

function MiniHome() {
  return (
    <div className={styles.home}>
      <h1>Muito mais cinema!</h1>
      <img src={Fachada} alt="imagem da fachada do cinema" />
    </div>
  );
}

export default MiniHome;