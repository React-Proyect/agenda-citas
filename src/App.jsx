import Header from "./components/Header/Header";
import Formulario from "./components/Formulario/Formulario";
import ListadoPacientes from "./components/ListadoPacientes/ListadoPacientes";

function App() {
  

    return (
        <div className="App">
            <h1>Hola Mundo</h1>
            <Header/>
            <Formulario />
            <ListadoPacientes/>
        </div>
    );
}

export default App;
