import personaje from "../image/barnie2.png";
import nino from "../image/nino.png";
import manitas from "../image/manitas.png";
import mano from "../image/mano.png";
import header from "../image/header.png"
import tittle from "../image/tittle.png";

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
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className=" ">
          <img src={tittle} alt="tittle"  className="w-48 h-24"/>
        </div>

        <div className="flex items-center space-x-16">
          <img src={header} alt="settings" className="w-72   h-32" />

        </div>

        <div className="flex flex-row">
          <img src={mano} alt="mano" className="" />
        </div>
      </header>

      <div className="flex p-8 space-x-8">
        <div className="flex flex-col space-y-6 w-80">
          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4">
              <img
                src={nino}
                alt="Clase"
                className="w-20 h-20 rounded-full bg-[#8f9f9b]"
              />
              <div className="">
                <h3 className="font-bold text-gray-800 text-left">
                  Emiliano Rodríguez
                </h3>
                <p className="text-gray-600 text-left">Principiante</p>
                <div className="relative h-2 bg-[#d1e8c0] rounded-full w-full mt-2">
                  <div
                    className="absolute top-0 left-0 h-full bg-red-500 rounded-full"
                    style={{ width: "25%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-lg">
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={nino}
                alt="Clase"
                className="w-20 h-20 rounded-full bg-[#8f9f9b]"
              />
              <div className="">
                <h3 className="font-bold text-gray-800 text-left">Etapa 1</h3>
                <p className="text-gray-600 text-left">Clase 3</p>

                <div className="relative h-2 bg-[#d1e8c0] rounded-full mt-4 w-38">
                  <div
                    className="absolute top-0 left-0 h-full bg-[#7fbf4f] rounded-full"
                    style={{ width: "15%" }}
                  ></div>
                </div>
              </div>
            </div>

            <div>
              <img src={manitas} alt="manitas" />
            </div>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-2 gap-4 p-2 m-2 ">
          {etapas.map((etapa) => (
            <div
              key={etapa.numero}
              className={`${etapa.color} rounded-3xl p-4 text-white`}
            >
              <h3 className="text-2xl font-bold">Etapa {etapa.numero}</h3>
              <p className="text-white/90 mb-6 leading-relaxed text-sm ">
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

        <div className="relative flex items-end">
          <div>
            <img
              src={personaje}
              alt="Personaje"
              className="w-[340px] md:w-[340px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
