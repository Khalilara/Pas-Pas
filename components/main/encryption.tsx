"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SamsungEnterpriseComponent from "@/components/sub/Recomendation";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      {/* Video background - le plus bas z-index */}
      <div className="w-full flex items-start justify-center absolute inset-0 -z-10">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto pointer-events-none"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>

      {/* Titre - z-index moyen */}
      <div className="absolute w-auto h-auto top-0 z-10">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &amp;
          </span>{" "}
          security.
        </motion.div>
      </div>

      {/* Composant Samsung - z-index le plus haut pour les interactions */}
      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-30 w-auto h-auto">
        <div className="flex flex-col items-center w-auto h-auto">
          <SamsungEnterpriseComponent />
        </div>
      </div>

      {/* Texte du bas */}
      <div className="absolute z-20 bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Secure your data with end-to-end encryption.
        </div>
      </div>
    </div>
  );
};