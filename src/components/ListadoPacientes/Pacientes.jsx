import React from "react";

const Pacientes = () => {
    return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Nombre: <span className="font-normal normal-case">Hook</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Propietario:{" "}
                <span className="font-normal normal-case">Kevin</span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Email:{" "}
                <span className="font-normal normal-case">
                    correo@correo.com
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Fecha alta:{" "}
                <span className="font-normal normal-case">
                    10 Diciembre 2022
                </span>
            </p>
            <p className="font-bold mb-3 text-gray-700 uppercase">
                {" "}
                Síntomas:{" "}
                <span className="font-normal normal-case">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Amet nostrum quasi obcaecati expedita! Perferendis omnis
                    nulla eius expedita itaque. Cum aspernatur consectetur
                    mollitia id pariatur earum voluptatem exercitationem omnis.
                    Ullam!
                </span>
            </p>
        </div>
    );
};

export default Pacientes;
