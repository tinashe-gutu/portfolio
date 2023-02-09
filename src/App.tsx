import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import "./App.css";
import { NavBar } from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Header />
        <MainContent />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
