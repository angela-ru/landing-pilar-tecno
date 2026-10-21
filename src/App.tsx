import BarraNavegacion from "./components/BarraNavegacion/BarraNavegacion";
import SeccionHero from "./components/SeccionHero/SeccionHero";
import"./App.css";
import SeccionCursos from "./components/SeccionCursos/SeccionCursos";
import SeccionContacto from "./components/SeccionContacto/SeccionContacto";

function App() {
  return (
    <>
    <BarraNavegacion />
    <SeccionHero />
    <SeccionCursos/>
    <SeccionContacto></SeccionContacto>
    </>
  );
}
export default App;