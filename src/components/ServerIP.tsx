'use client';

import { useState } from 'react';

const ServerIP = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = 'serket.lura.host:35604';

  const copyIP = async () => {
    try {
      await navigator.clipboard.writeText(serverIP);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch (err) {
      console.error('Erro ao copiar IP:', err);
    }
  };

  return (
    <div className="flex items-center justify-center gap-3 mb-0">
      <div className="bg-[#e5ffe5] border-2 border-[#62b453] rounded-lg text-lg px-4 py-2.5 font-mono text-[#2c2c2c] select-all min-w-[220px] text-center sm:text-base sm:min-w-[100px] sm:px-1.5">
        {serverIP}
      </div>
      <button
        onClick={copyIP}
        className={`border-none rounded-lg px-4 py-2.5 text-base font-bold cursor-pointer transition-colors duration-200 shadow-md sm:px-2.5 sm:py-2 sm:text-sm ${
          copied 
            ? 'bg-[#2ecc40] text-white' 
            : 'bg-[#62b453] text-white hover:bg-[#4a8f3c] active:bg-[#4a8f3c] focus:bg-[#4a8f3c]'
        }`}
      >
        {copied ? 'Copiado!' : 'Copiar IP'}
      </button>
    </div>
  );
};

export default ServerIP;
