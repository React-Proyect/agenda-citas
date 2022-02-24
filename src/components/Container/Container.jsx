import Formulario from "../Formulario/Formulario";
import ListadoPacientes from "../ListadoPacientes/ListadoPacientes";

const Container = () => {
    return (
        <div className="mt-12 | md:flex">
            <Formulario />
            <ListadoPacientes />
        </div>
    );
};

export default Container;
