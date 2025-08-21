"use client";

import Image from "next/image";

export const KnoxSection = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-start gap-12 p-8 bg-gray-900 text-white">
      {/* Left Section */}
      <div className="flex flex-1 flex-col lg:flex-row items-center gap-6 min-w-[250px]">
        <Image src="/image1.png" alt="Knox Platform" width={300} height={200} />
        <div>
          <h2 className="text-3xl font-bold mb-4">Knox Security Platform
            
          </h2>
          <p className="text-base leading-relaxed">
            Secured by Knox symbolise la sécurité de niveau gouvernemental intégrée dans les appareils Samsung.
             Knox protège les entreprises et utilisateurs finaux à la fois au niveau du matériel et du logiciel.
          </p>
        </div>
      </div>

      {/* Middle Section */}
      <div className="text-5xl font-bold text-white self-center">+</div>

      {/* Right Section */}
      <div className="flex flex-1 flex-col lg:flex-row items-center gap-6 min-w-[250px]">
        <Image src="/image.png" alt="Knox Cloud" width={300} height={200} />
        <div>
          <h2 className="text-3xl font-bold mb-4">Knox Cloud Solutions</h2>
          <p className="text-base leading-relaxed">
            Notre portefeuille de solutions cloud Knox
             permet aux entreprises de configurer, personnaliser, déployer, analyser et gérer leurs appareils. Cela améliore les performances de l&apos;entreprise et aide les travailleurs à obtenir une plus grande productivité et
             efficacité, au bureau ou sur le terrain.
          </p>
        </div>
      </div>
    </div>
  );
};
