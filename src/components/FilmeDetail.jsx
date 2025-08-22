import styles from "./FilmeDetail.module.css";
import FilmesLista from "./ListaDeFilme";
import { useParams } from "react-router-dom";
impport styles from "./FilmeDetail.module.css"; 

function FilmeDetail() {
  const { id } = useParams();
  const filme = FilmesLista.find((f) => f.id === id);

  if (!filme) {
    return <div>Filme não encontrado</div>;
  }

  return (
    <div className={styles.container}>
      <h1>{filme.nome}</h1>
      <img src={filme.cartaz} alt={filme.nome} className={styles.cartaz} />
      <div className={styles.info}>
        <p>Gênero: {filme.genero}</p>
        <p>Faixa etária: {filme.idade_indicada} anos</p>
        <p>Sinopse: {filme.sinopse}</p>
      </div>
    </div>
  );
}

export default FilmeDetail;