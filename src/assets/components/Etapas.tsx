import React from "react";
import { Gamepad2 } from "lucide-react";
import { IoSettingsOutline } from "react-icons/io5";
import { CiHome } from "react-icons/ci";
import personaje from "../image/barnie2.png";
import nino from "../image/nino.png";
import manitas from "../image/manitas.png";
import mano from "../image/mano.png";
export default function ManitasMagicas() {
  const etapas = [
    {
      numero: 1,
      color: "bg-[#7fbf4f]",
      buttonColor: "bg-white text-green-500",
      buttonText: "Continuar",
      disponible: true,
    },
    {
      numero: 2,
      color: "bg-[#62a9dc]",
      buttonColor: "bg-gray-300 text-blue-500",
      buttonText: "INICIAR",
      disponible: false,
    },
    {
      numero: 3,
      color: "bg-[#e8b068]",
      buttonColor: "bg-gray-300 text-orange-400",
      buttonText: "INICIAR",
      disponible: false,
    },
    {
      numero: 4,
      color: "bg-[#e27663]",
      buttonColor: "bg-gray-300 text-red-400",
      buttonText: "INICIAR",
      disponible: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#ade6e4]">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-red-500">MANITA</h1>
          <h2 className="text-xl font-bold text-teal-400">MÁGICAS</h2>
        </div>

        <div className="flex items-center space-x-16">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <IoSettingsOutline size={60} />
          </button>
          <button className="p-3 bg-[#ace6e4] rounded-full">
            <CiHome size={48} className="text-white" />
          </button>
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full">
            <Gamepad2 size={60} />
          </button>
        </div>

        <div className="flex flex-row">
          <button className=" py-2 text-gray-500 hover:text-gray-700 font-medium">
            DONAR
          </button>
          <img src={mano} alt="mano" className="" />
        </div>
      </header>

      <div className="flex p-8 space-x-8">
        {/* Panel Izquierdo */}
        <div className="flex flex-col space-y-6 w-80">
          {/* Perfil del Usuario */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src={nino}
                alt="Clase"
                className="w-16 h-16 rounded-full bg-[#8f9f9b]"
              />
              <div>
                <h3 className="font-bold text-gray-800">Emiliano Rodríguez</h3>
                <p className="text-gray-600">Principiante</p>
              </div>
            </div>
            <div className="relative h-2 bg-[#d1e8c0] rounded-full mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
          </div>

          {/* Etapa Actual */}
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={nino}
                alt="Clase"
                className="w-16 h-16 rounded-full bg-[#8f9f9b]"
              />
              <div>
                <h3 className="font-bold text-gray-800">Etapa 1</h3>
                <p className="text-gray-600">Clase 3</p>
              </div>
            </div>
            <div className="relative h-2 bg-[#d1e8c0] rounded-full mt-4">
              <div
                className="absolute top-0 left-0 h-full bg-[#7fbf4f] rounded-full"
                style={{ width: "15%" }}
              ></div>
            </div>

            {/* Alfabeto de Señas */}
            <div>
              <img src={manitas} alt="manitas" />
            </div>
          </div>
        </div>

        {/* Panel Central - Etapas */}
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className={`${etapa.color} rounded-3xl p-4 text-white`}
            >
              <h3 className="text-2xl font-bold ">Etapa {etapa.numero}</h3>
              <p className="text-white/90 mb-6 leading-relaxed text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore
              </p>
              <button
                className={`${etapa.buttonColor} h-8 w-full rounded-full shadow-lg font-semibold`}
                disabled={!etapa.disponible}
              >
                {etapa.buttonText}
              </button>
            </div>
          ))}
        </div>

        {/* Mascota y Globo de texto */}
        <div className="relative flex items-end">
          {/* Globo de texto */}
          <div className="">
            <img
              src={personaje}
              alt="Personaje"
              className="w-[300px] md:w-[300px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
