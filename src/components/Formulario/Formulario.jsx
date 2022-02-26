import { useState, useEffect } from "react";
const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [propietario, setPropietario] = useState("");
    const [email, setEmail] = useState("");
    const [fecha, setFecha] = useState("");
    const [sintomas, setSintomas] = useState("");
    
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if ([nombre, propietario, email, fecha, sintomas].includes("")){
            setError(true);
        }else{
            setError(false);

        }
    };

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-5">
            <h2 className="font-black text-3xl text-center">
                Seguimiento pacientes
            </h2>
            <p className="text-lg text-center | mt-5 mb-10">
                Añade pacientes y{" "}
                <span className="text-indigo-600 font-bold">
                    Administrarlos
                </span>
            </p>
            <form
                className="bg-white shadow-md rounded-lg py-10 px-5"
                onSubmit={handleSubmit}
            >
                {error && 
                    <div className="bg-red-500 text-white text-center p-3 uppercase font-bold mb-5 rounded-md">
                        <span>
                            Todos los campos son requeridos
                        </span>
                    </div>
                }
                <div className="mb-5">
                    <label
                        htmlFor="mascota"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre de la mascota {nombre}
                    </label>
                    <input
                        id="mascota"
                        type="text"
                        placeholder="Nombre de la mascota"
                        className="border-2 w-full p-2 mt-2 | placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label
                        htmlFor="propietario"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Nombre del propietario
                    </label>
                    <input
                        id="propietario"
                        type="text"
                        placeholder="Nombre del propietario"
                        className="border-2 w-full p-2 mt-2 | placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={(e) => setPropietario(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="email"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Email contacto propietario"
                        className="border-2 w-full p-2 mt-2 | placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="alta"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Alta
                    </label>
                    <input
                        id="alta"
                        type="date"
                        className="border-2 w-full p-2 mt-2 | placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={(e) => setFecha(e.target.value)}
                    />
                </div>

                <div className="mb-5">
                    <label
                        htmlFor="sintomas"
                        className="block text-gray-700 uppercase font-bold"
                    >
                        Síntomas
                    </label>
                    <textarea
                        id="sintomas"
                        placeholder="Describe los síntomas"
                        className="border-2 w-full p-2 mt-2 | placeholder-gray-400 rounded-md"
                        value={sintomas}
                        onChange={(e) => setSintomas(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <input
                        type="submit"
                        className="bg-indigo-600 w-full p-3 | text-white uppercase font-bold | hover:bg-indigo-700 cursor-pointer transition-all"
                        value="Agregar paciente"
                    />
                </div>
            </form>
        </div>
    );
};

export default Formulario;
