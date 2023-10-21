import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Searchpage from "./pages/Searchpage";
import Searchinput from "./components/Searchinput";
import Populer from "./pages/Populer";
import Footer from "./components/Footer";
import Movies from "./pages/Movies";
import NotFound from "./pages/NotFound";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Searchinput />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/search/:keyword" Component={Searchpage}></Route>
          <Route path="/populer" Component={Populer}></Route>
          <Route path="/movies" Component={Movies}></Route>
          <Route path="*" Component={NotFound}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
