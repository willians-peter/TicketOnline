import { Link, NavLink } from "react-router-dom";
import styles from "./NavigationBar.module.css";
import Button from "../atoms/Button";
import { useContext } from "react";
import { AppContext } from "../AppContext";

function NavigationBar() {
  const { theme, toggleTheme } = useContext(AppContext);

  const navActiveClass = ({ isActive }) => {
    return isActive ? styles.active : "";
  };

  return (
    <nav className={theme === "dark" ? styles.dark : styles.light}>
      <div className={styles.container}>
        <div className={styles.title}>
          <img className={styles.logo} src="/iconCine.png" alt="Logo" />
          <Link to="/">
            <h1>Cinema</h1>
          </Link>
        </div>
        <ul className={styles.navList}>
          <li>
            <NavLink to="/" className={navActiveClass}>
              Início
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={navActiveClass}>
              Filmes
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={navActiveClass}>
              Contato
            </NavLink>
          </li>
        </ul>
        <div className={styles.buttonContainer}>
          <Button variant="primary" onClick={toggleTheme}>
            Mudar tema para {theme === "light" ? "dark" : "light"}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;