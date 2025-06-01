import React from "react";
import fondo from "../image/Fondo.png";
import tittle from "../image/tittle.png";

export default function LoginPage() {
  return (
    <div className="flex h-screen w-screen overflow-hidden">
      
      <div className="w-[30%] min-w-[100px] flex flex-col justify-center items-center bg-white">
        <div className="w-72">
          <img src={tittle} alt="Título" className="w-full" />
        </div>

        <h2 className="mt-10 text-4xl font-bold text-zinc-600 fredoka">
          ¿Listo para empezar?
        </h2>

        <input
          type="text"
          placeholder="Usuario"
          className="mt-6 w-64 px-4 py-3 rounded-4xl border border-gray-300 placeholder-gray-400 focus:outline-none text-center md:font-black bg-zinc-100"
        />
        <input
          type="password"
          placeholder="Contraseña"
          className="mt-4 w-64 px-4 py-3 rounded-4xl border border-gray-300 placeholder-gray-400 focus:outline-none text-center md:font-black bg-zinc-100"
        />

        <button className="mt-6 w-52 bg-teal-300 text-white font-bold py-3 rounded-4xl shadow-md">
          Entrar
        </button>

        <a href="#" className="mt-4 text-sm text-gray-500">
          Crear cuenta
        </a>
      </div>

      <div className="w-[70%] h-full">
        <img
          src={fondo}
          alt="Fondo"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}
