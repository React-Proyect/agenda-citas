import Pacientes from "./Pacientes";
const ListadoPacientes = () => {
    return (
        <div className="md:w-1/2 lg:w-3/5 mx-5 md:h-screen xl:mt-0 lg:mt-0 md:mt-0 sm:mt-10 mt-10 h-screen ">
            <h2 className="font-black text-3xl text-center">
                Listado Pacientes
            </h2>
            <p className="text-xl mt-5 mb-10 text-center">
                Administra tus{" "}
                <span className="text-indigo-600 font-bold">
                    Pacientes y citas
                </span>
            </p>
            <div className="h-3/4 xl:overflow-y-scroll lg:overflow-y-scroll md:overflow-y-scroll overflow-visible">
                <Pacientes />
                <Pacientes />
                <Pacientes />
            </div>
        </div>
    );
};

export default ListadoPacientes;
