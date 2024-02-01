import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./assets/components/NavBar/NavBar.jsx";
import Header from "./assets/components/Header/Header.jsx";
import FormHeroContainer from "./assets/components/FormHeroContainer/FormHeroContainer.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="heroContainer">
        <Header />
        <FormHeroContainer />
      </div>
    </>
  );
}

export default App;
