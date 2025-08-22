import styles from "./GridComponent.module.css";
import React from "react";
import FilmeComponent from "./FilmeComponent";
import FilmesLista from "./ListaDeFilme";


function GridComponent() {
  return (
    <div className={styles.grid}>
      {FilmesLista.map((filme) => (
        <div key={filme.id} className={styles.item}>
          <FilmeComponent filme={filme} />
        </div>
      ))}
    </div>
  );
}

export default GridComponent;
