import React from 'react';
import styles from "./FilmeComponent.module.css";
import { useNavigate } from 'react-router-dom';

function FilmeComponent({ filme }) {
  const navigate = useNavigate();

  const handleVerMais = () => {
    navigate(`/movies/${filme.id}`);
  };

  return (
    <div className={styles.container}>
      <img src={filme.cartaz} alt={filme.nome} className={styles.cartaz} />
      <div className={styles.info}>
        <h2>{filme.nome}</h2>
        <p>Gênero: {filme.genero}</p>
        <p>Faixa etária: {filme.idade_indicada} anos</p>
      </div>
      <button className={styles.botao} onClick={handleVerMais}>Ver mais informações</button>
    </div>
  );
}

export default FilmeComponent;