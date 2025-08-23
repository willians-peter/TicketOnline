import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { AppContext } from "./AppContext";
import HomePage from "./pages/HomePage";
import MoviesPage from "./pages/MoviesPage";
import FilmeDetail from "./components/FilmeDetail";
import ContactPage from "./pages/ContactPage";
import NotFoundPage from "./pages/NotFoundPage";
import NavigationBar from "./organisms/NavigationBar";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";


function App() {
  const { theme } = useContext(AppContext);
  console.log({ theme });

  return (
    <div className={theme === "dark" ? "dark-mode" : "light-mode"}>
      <Header />
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:id" element={<FilmeDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

