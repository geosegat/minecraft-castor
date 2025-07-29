
import ServerIP from './ServerIP';
import McButton from './McButton';

const DownloadButtons = () => {

const LINK_DOWNLOAD_TLAUNCHER = 'https://dl2.tlauncher.org/f.php?f=files%2FTLauncher-Installer-1.8.8.exe';
const LINK_DOWNLOAD_MODS = 'https://mega.nz/file/wdpiHBoI#uSCafX_UL7iovJMP3_ziIWlaGAIUTO4_HPZ9gkQ7tak';

  return (
    <div className="flex flex-col gap-6 items-center w-full mb-2">
      <div className="w-full max-w-[340px] flex flex-col gap-6">
          <ServerIP />
        <McButton
          icon={<>🗂️</>}
          href={LINK_DOWNLOAD_TLAUNCHER}
        >
          Baixar TLauncher
        </McButton>

        <McButton
          icon={<>📦</>}
          href={LINK_DOWNLOAD_MODS}
        >
          Baixar Mods
        </McButton>
        
      </div>
    </div>
  );
};

export default DownloadButtons;
