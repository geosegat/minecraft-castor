interface VersionGroupProps {
  version: string;
}

const VersionGroup = ({ version }: VersionGroupProps) => {
  return (
    <div className="flex items-center gap-2.5 bg-[#fffbe4] border-2 border-[#62b453] rounded-[10px] px-4 py-2.5 mb-8 shadow-md">
      <span className="text-sm text-[#2c2c2c] font-press font-bold">
        <strong>TL Forge</strong>{' '}
        <span>{version || 'Carregando versão...'}</span>
      </span>
    </div>
  );
};

export default VersionGroup;
