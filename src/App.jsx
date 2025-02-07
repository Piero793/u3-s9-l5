import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import TVShows from "../components/TvShows";
import Footer from "../components/Footer";
import TrendingNow from "../components/TrendingNow";

function App() {
  return (
    <>
      <NavBar />
      <TVShows />
      <TrendingNow />
      <Footer />
    </>
  );
}

export default App;
