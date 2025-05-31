import React from 'react'
import personaje from '../image/Barny.png'

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center px-4 bg-white">
      {/* Izquierda: Personaje + globo */}
      <div className="relative max-w-md md:max-w-lg">
        <img src={personaje} alt="Personaje" className="w-[300px] md:w-[400px]" />

        {/* Globo de texto */}
        <div className="absolute top-10 right-[-30px] bg-white shadow-lg rounded-full px-6 py-4 text-center text-[#f4543c] font-bold text-base leading-snug z-10">
          ¡Hola! <br /> Es un gusto <br /> conocerte

          {/* Pico apuntando hacia el personaje */}
          <svg
            className="absolute -bottom-[8px] left-2"
            width="32"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            style={{ transform: 'rotate(395deg)' }}
          >
            <path
              d="M0 0 C2 14, 14 14, 16 0 Z"
              fill="white"
              filter="drop-shadow(0px 1px 2px rgba(0,0,0,0.15))"
            />
          </svg>
        </div>
      </div>

      {/* Derecha: Texto y botón */}
      <div className="text-center md:text-left mt-8 md:mt-0 md:ml-10">
        <h1 className="text-[#5b5b5b] font-extrabold text-xl md:text-2xl mb-6">
          La manera entretenida, efectiva y <br /> gratuita de aprender lenguaje de señas.
        </h1>
        <button
          className="bg-[#f4543c] text-white font-bold py-3 px-12 rounded-xl shadow-[2px_2px_0_2px_#b23f2e] hover:bg-[#d84328] transition duration-300 text-lg w-full max-w-xs sm:max-w-sm md:max-w-md"
        >
          EMPEZAR
        </button>
      </div>
    </div>
  )
}

export default Home
