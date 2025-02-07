import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import TVShows from "../components/TvShows";
import Footer from "../components/Footer";
import TrendingNow from "../components/TrendingNow";
import WatchItAgain from "../components/WatchItAgain";
import NewReleases from "../components/NewReleases";
import Settings from "../components/Settings";
import AccountPage from "../components/AccountPage";

function App() {
  return (
    <>
      <NavBar />
      <TVShows />
      <TrendingNow />
      <WatchItAgain />
      <NewReleases />
      <Footer />
      <AccountPage />
      <Settings />
    </>
  );
}

export default App;
