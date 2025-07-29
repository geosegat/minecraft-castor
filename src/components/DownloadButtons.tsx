import ServerIP from './ServerIP';

const DownloadButtons = () => {
  return (
    <div className="flex flex-col gap-6 items-center w-full mb-2">
      <div className="w-full max-w-[340px] flex flex-col gap-6">
          <ServerIP />
        <a
          className="flex items-center justify-center gap-4 bg-[#fffbe4] text-[#2c2c2c] text-xl font-bold px-4 py-5 rounded-xl border-[3px] border-[#62b453] cursor-pointer no-underline transition-all duration-200 shadow-md select-none hover:bg-[#e0ffcc] hover:shadow-lg sm:text-base sm:px-2.5 sm:py-3.5"
          href="https://dl2.tlauncher.org/f.php?f=files%2FTLauncher-Installer-1.8.8.exe"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-8 h-8 inline-block">🗂️</span> Baixar TLauncher
        </a>

      

        <a
          className="flex items-center justify-center gap-4 bg-[#fffbe4] text-[#2c2c2c] text-xl font-bold px-4 py-5 rounded-xl border-[3px] border-[#62b453] cursor-pointer no-underline transition-all duration-200 shadow-md select-none hover:bg-[#e0ffcc] hover:shadow-lg sm:text-base sm:px-2.5 sm:py-3.5"
          href="https://mega.nz/file/wdpiHBoI#uSCafX_UL7iovJMP3_ziIWlaGAIUTO4_HPZ9gkQ7tak"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="w-8 h-8 inline-block">📦</span> Baixar Mods
        </a>
        
      </div>
    </div>
  );
};

export default DownloadButtons;
