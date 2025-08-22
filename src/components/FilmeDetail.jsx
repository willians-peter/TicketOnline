import React from "react";
import styles from "./FilmeDetail.module.css";
import { useParams, useNavigate } from "react-router-dom";
import FilmesLista from "./ListaDeFilme";

function FilmeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const filme = FilmesLista.find((f) => String(f.id) === id);

  if (!filme) {
    return <div>Filme não encontrado</div>;
  }

  const handleVoltar = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h1>{filme.nome}</h1>
      <img src={filme.cartaz} alt={filme.nome} className={styles.cartaz} />
      <div className={styles.info}>
        <p>Gênero: {filme.genero}</p>
        <p>Faixa etária: {filme.idade_indicada} anos</p>
        <p>Sinopse: {filme.sinopse}</p>
      </div>
      <button className={styles.botao} onClick={handleVoltar}>
        Voltar
      </button>
    </div>
  );
}
export default FilmeDetail;
