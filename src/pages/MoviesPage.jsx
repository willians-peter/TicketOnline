import React from "react";
import GridComponent from "../components/GridComponent";
import FilmesLista from "../components/ListaDeFilme";

function MoviePage() {
  return (
    <div>
      <GridComponent filmes={FilmesLista} />
    </div>
  );
}

export default MoviePage;



