import React from 'react';

const SamsungEnterpriseComponent = () => {
  return (
    <div className="w-full flex items-center justify-center p-8">
      <div className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Section Gartner */}
        <div className="flex flex-col items-center text-center space-y-6 p-8 border border-gray-300 rounded-xl shadow-md bg-white/5">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-500 rounded opacity-60"></div>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed tracking-wide">
            <h2 className="text-3xl font-extrabold text-white">Rapport Gartner</h2>

            <div className="bg-gray-200/80 rounded-full px-6 py-3 inline-block">
              <p className="text-sm italic text-white font-light">
                Le leader reconnu du marché dans la gestion<br />
                d'appareils
              </p>
            </div>

            <p className="text-base text-white font-medium">
              La plate-forme Knox 3.2 a reçu <strong>27 notes</strong><br />
              <span className="text-blue-300 font-semibold">Forte sur 30</span> dans le rapport de Gartner.
            </p>
          </div>

          <button
            onClick={() => window.open('https://www.samsungknox.com/fr/blog/samsung-knox-platform-3-2-receives-strong-ratings-by-gartner', '_blank')}
            className="bg-gray-100 hover:bg-gray-200 text-white font-semibold py-3 px-8 rounded-full border border-gray-300 transition-all duration-200"
          >
            VOIR LE RAPPORT GARTNER
          </button>
        </div>

        {/* Section Android Enterprise */}
        <div className="flex flex-col items-center text-center space-y-6 p-8 border border-gray-300 rounded-xl shadow-md bg-white/5">
          <div className="bg-green-600 text-white px-6 py-2 rounded-full flex items-center space-x-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 text-xs font-bold">a</span>
            </div>
            <span className="text-sm font-medium text-white">android enterprise recommended</span>
          </div>

          <div className="space-y-4 leading-relaxed tracking-wide">
            <h2 className="text-3xl font-extrabold text-white">Android Enterprise Recommended</h2>

            <p className="text-base text-white font-light">
              Les appareils Samsung Galaxy et Knox<br />
              Manage sont validés par le label Android<br />
              Enterprise Recommended.
            </p>
          </div>

          <button
            onClick={() => window.open('https://www.samsungknox.com/fr/aer', '_blank')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-200 border-2 border-blue-600"
          >
            EN SAVOIR PLUS
          </button>
        </div>

        {/* Section IDC */}
        <div className="flex flex-col items-center text-center space-y-6 p-8 border border-gray-300 rounded-xl shadow-md bg-white/5">
          <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
            <div className="w-10 h-10 bg-gray-300 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-gray-500 rounded opacity-60"></div>
            </div>
          </div>

          <div className="space-y-4 leading-relaxed tracking-wide">
            <h2 className="text-3xl font-extrabold text-white">Rapport IDC</h2>

            <p className="text-base text-white font-light">
              Samsung nommé <span className="font-semibold text-white">leader et acteur majeur</span><br />
              dans le rapport IDC MarketScape de 2024<br />
              : Worldwide Unified Endpoint<br />
              Management
            </p>
          </div>

          <button
            onClick={() => window.open('https://www.samsungknox.com/fr/blog/samsung-idc-marketscape-2024', '_blank')}
            className="bg-gray-100 hover:bg-gray-200 text-white font-semibold py-3 px-8 rounded-full border border-gray-300 transition-all duration-200"
            >
            EN SAVOIR PLUS
        </button>
        </div>

      </div>
    </div>
  );
};

export default SamsungEnterpriseComponent;
