import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Searchpage from "./pages/Searchpage";
import Searchinput from "./components/Searchinput";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Searchinput />
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/search/:keyword" Component={Searchpage}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
