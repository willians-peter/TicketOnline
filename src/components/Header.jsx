import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.Header}>
      <div className={styles.container}>
        <h1>Ticket Online</h1>
      </div>
    </header>
  );
}

export default Header;
