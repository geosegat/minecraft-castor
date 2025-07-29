'use client';

import { useState } from 'react';

const InstallInfo = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleInfo = () => {
    setIsVisible(!isVisible);
    if (!isVisible) {
      setTimeout(() => {
        document.getElementById('info-content')?.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'center' 
        });
      }, 100);
    }
  };

  return (
    <>
      <button
        onClick={toggleInfo}
        className="flex items-center justify-center gap-2.5 bg-[#fffbe4] text-[#2c2c2c] text-base font-bold px-3.5 py-3 rounded-[10px] border-2 border-[#62b453] cursor-pointer no-underline mt-4 mb-2 shadow-md transition-all duration-200 select-none hover:bg-[#e0ffcc] hover:shadow-lg sm:text-base sm:px-2.5 sm:py-3.5"
      >
        <span className="w-8 h-8 inline-block">💡</span> Como instalar os mods?
      </button>
      
      {isVisible && (
        <div 
          id="info-content"
          className="max-w-[340px] w-full bg-[#fffbe4] border-2 border-[#62b453] rounded-[10px] shadow-md px-4 py-3.5 text-base text-[#2c2c2c] mb-2.5 animate-fade-in sm:px-2 sm:py-2.5 sm:text-sm"
        >
          <strong className="block text-center text-[#3c7c1d]">PASSO A PASSO:</strong>
          <ol className="mt-2 pl-4">
            <li className="mb-1">Baixe o arquivo <strong>mods.rar</strong> acima.</li>
            <li className="mb-1">
              Vá na pasta onde o Minecraft está instalado (normalmente{' '}
              <code className="bg-black/10 px-1 py-0.5 rounded text-sm">%appdata%\.minecraft</code>).
            </li>
            <li className="mb-1">Feche o Minecraft se estiver aberto.</li>
            <li className="mb-1">
              Extraia o conteúdo do <strong>mods.rar</strong> dentro da pasta{' '}
              <strong>mods</strong> do Minecraft.
            </li>
            <li className="mb-1">Se pedir para substituir/mesclar arquivos, aceite.</li>
            <li className="mb-1">
              Abra o Minecraft pela versão <strong>TL Forge 1.21.8</strong> (igual na imagem acima).
            </li>
            <li>Entre no servidor usando o IP.</li>
          </ol>
        </div>
      )}
    </>
  );
};

export default InstallInfo;
