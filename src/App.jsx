import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import TVShows from "../components/TvShows";
import Footer from "../components/Footer";
import TrendingNow from "../components/TrendingNow";
import WatchItAgain from "../components/WatchItAgain";

function App() {
  return (
    <>
      <NavBar />
      <TVShows />
      <TrendingNow />
      <WatchItAgain />
      <Footer />
    </>
  );
}

export default App;
