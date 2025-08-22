import React from 'react';
import styles from "./FilmeComponent.module.css";

function FilmeComponent({ filme }) {
  return (
    <div className={styles.container}>
      <img src={filme.cartaz} alt={filme.nome} className={styles.cartaz} />
      <div className={styles.info}>
        <h2>{filme.nome}</h2>
        <p>Gênero: {filme.genero}</p>
        <p>Faixa etária: {filme.idade_indicada} anos</p>
      </div>
      <button className={styles.botao}>Ver mais informações</button>
    </div>
  );
}

export default FilmeComponent;