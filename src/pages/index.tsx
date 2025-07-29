'use client';

import { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import VersionGroup from '../components/VersionGroup';
import ServerStatus from '../components/ServerStatus';
import DownloadButtons from '../components/DownloadButtons';
import InstallInfo from '../components/InstallInfo';
import AnimatedGifs from '../components/AnimatedGifs';
import Footer from '../components/Footer';

export default function Home() {
  const [serverVersion, setServerVersion] = useState('Carregando versão...');

  const handleVersionUpdate = (version: string) => {
    setServerVersion(version || 'Versão desconhecida');
  };

  return (
    <>
      <Head>
        <title>Minecraft Do Luizao</title>
        <meta name="description" content="Downloads e informações para jogar no servidor Minecraft Luizao Castor Gamers" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="bg-gradient-to-br from-[#62b453] to-[#7c5a31] font-['Segoe_UI'] min-h-screen m-0 flex flex-col items-center justify-center">
      
        <AnimatedGifs />
        <Header />
        <VersionGroup version={serverVersion} />
        <ServerStatus onVersionUpdate={handleVersionUpdate} />
        <DownloadButtons />
        <InstallInfo />
        <Footer />
      </div>
    </>
  );
}
