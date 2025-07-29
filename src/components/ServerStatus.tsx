'use client';

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import LoadingSkeleton from './LoadingSkeleton';

interface ServerData {
  status: string;
  Version: string;
  Players: number;
  MaxPlayers: number;
  Motd: string;
  Playerlist: string[];
}

interface ServerStatusProps {
  onVersionUpdate: (version: string) => void;
}

const ServerStatus = ({ onVersionUpdate }: ServerStatusProps) => {
  const [serverData, setServerData] = useState<ServerData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);


const USERS_COUNT_API_URL = 'https://api.minetools.eu/query/serket.lura.host/35604';
  const loadServerStatus = useCallback(async () => {
    try {
      const response = await axios.get(USERS_COUNT_API_URL);
      const data = response.data;
      
      setServerData(data);
      setError(false);
      onVersionUpdate(data.Version);

    } catch (err) {
      console.error('Erro ao carregar status do servidor:', err);
      setError(true);
      
      onVersionUpdate('');
    } finally {
      setLoading(false);
    }
  }, [onVersionUpdate]);

  useEffect(() => {
    loadServerStatus();
    const interval = setInterval(loadServerStatus, 2000);
    
    return () => clearInterval(interval);
  }, [loadServerStatus]);

  if (loading) {
    return (
      <div className="max-w-[340px] w-full bg-[#fffbe4] border-2 border-[#62b453] rounded-[10px] shadow-md p-4 mb-6 text-[#2c2c2c]">
        <h3 className="m-0 mb-3 text-[#3c7c1d] text-lg text-center">🖥️ Status do Servidor</h3>
        <LoadingSkeleton />
      </div>
    );
  }

  const online = serverData?.status === 'OK';
  const cached = serverData?.status === 'CACHED';
  const statusClass = online ? 'text-[#2ecc40] font-bold' : 'text-[#dc143c] font-bold';
  const statusText = online ? 'Online ✅' : cached ? 'Offline ❌ (último dado salvo)' : 'Erro ao conectar ❌';

  let playersListContent = null;
  if (online && Array.isArray(serverData?.Playerlist) && serverData.Playerlist.length > 0) {
    playersListContent = (
      <>
        <div className="flex justify-between items-center mb-2 text-sm">
          <span className="font-bold">Jogadores online:</span>
        </div>
        <div className="max-h-[100px] overflow-y-auto mt-1 py-1">
          {serverData.Playerlist.map((player, index) => (
            <div key={index} className="flex items-center gap-2 py-0.5 text-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                className="w-4 h-4 bg-[#62b453] rounded-sm inline-block" 
                src={`https://mc-heads.net/avatar/${player}/16`} 
                alt={player}
                onError={(e) => { e.currentTarget.style.display = 'none'; }}
              />
              <span>{player}</span>
            </div>
          ))}
        </div>
      </>
    );
  } else if (online || cached) {
    playersListContent = (
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="font-bold">Jogadores online:</span>
        <span className="font-mono">Nenhum jogador online</span>
      </div>
    );
  }

  return (
    <div className="max-w-[340px] w-full bg-[#fffbe4] border-2 border-[#62b453] rounded-[10px] shadow-md p-4 mb-6 text-[#2c2c2c]">
      <h3 className="m-0 mb-3 text-[#3c7c1d] text-lg text-center font-bold">🖥️ Status do Servidor</h3>
      
      <div className="flex justify-between items-center mb-2 text-sm">
        <span className="font-bold">Status:</span>
        <span className={statusClass}>{statusText}</span>
      </div>

      {(online || cached) && serverData && (
        <>
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="font-bold">Versão:</span>
            <span className="font-sans font-medium">{serverData.Version}</span>
          </div>
          
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="font-bold">Jogadores:</span>
            <span className="font-sans font-medium">{serverData.Players}/{serverData.MaxPlayers}</span>
          </div>
          
          <div className="flex justify-between items-center mb-2 text-sm">
            <span className="font-bold">MOTD:</span>
            <span className="font-sans font-medium">{serverData.Motd}</span>
          </div>
          
          {playersListContent}
        </>
      )}

      {error && !serverData && (
        <div className="text-center mt-2 text-sm text-gray-600 italic">
          Não foi possível verificar o status do servidor
        </div>
      )}
    </div>
  );
};

export default ServerStatus;
