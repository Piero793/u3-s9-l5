import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import TVShows from "../components/TvShows";
import Footer from "../components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <TVShows />
      <Footer />
    </>
  );
}

export default App;
