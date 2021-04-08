import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe';
import Particles from "react-particles-js"
import Services from "./components/Services"

function App() {
  return (
    <>
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 800
              }
            },
            shape: {
              type: "circle",
              stroke: {
                width: 6,
                color: "#04BDFB"
              }
            }
          }
        }}
      />
      <Navbar />
      <Header />
      <AboutMe />
      <Services />
    </>
  );
}

export default App;
