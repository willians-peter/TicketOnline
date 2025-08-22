import React from "react";
import GridComponent from "../components/GridComponent";
import FilmesLista from "../components/ListaDeFilme";

function HomePage() {
  return (
    <div>
      <GridComponent filmes={FilmesLista} />
    </div>
  );
}

export default HomePage;