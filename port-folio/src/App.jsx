import Footer from "./components/Footer";
import Header from "./components/Header";
import Routes from "./components/Routes";
import "./style.scss";
function App() {
  return (
    <div className="App">
      <main>
        <Header />
        <Routes />
        <Footer />
      </main>
    </div>
  );
}

export default App;
