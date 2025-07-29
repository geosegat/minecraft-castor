'use client';

import { useGifAnimation } from '../hooks/useGifAnimation';

/* eslint-disable @next/next/no-img-element */

const AnimatedGifs = () => {
  const steveRef = useGifAnimation({
    startX: 50,
    startY: typeof window !== 'undefined' ? window.innerHeight - 120 : 500,
    width: 90,
    height: 90,
    speed: 2.7
  });

  const gif2Ref = useGifAnimation({
    startX: 200,
    startY: 100,
    width: 90,
    height: 90,
    speed: 2.5
  });

  const gif3Ref = useGifAnimation({
    startX: 400,
    startY: 200,
    width: 90,
    height: 90,
    speed: 2.9
  });

  const gif4Ref = useGifAnimation({
    startX: 600,
    startY: 300,
    width: 90,
    height: 90,
    speed: 2.3
  });

  const camelRef = useGifAnimation({
    startX: 300,
    startY: 400,
    width: 100,
    height: 100,
    speed: 2.6
  });

  const piglinRef = useGifAnimation({
    startX: 500,
    startY: 150,
    width: 90,
    height: 90,
    speed: 2.8
  });

  const zombieRef = useGifAnimation({
    startX: 100,
    startY: typeof window !== 'undefined' ? window.innerHeight * 0.6 : 400,
    width: 120,
    height: 120,
    speed: 2.2
  });

  const beeRef = useGifAnimation({
    startX: 200,
    startY: typeof window !== 'undefined' ? window.innerHeight * 0.35 : 300,
    width: 80,
    height: 80,
    speed: 3.1
  });

  return (
    <>
      {/* Steve andando */}
      <img
        ref={steveRef}
        src="https://media.tenor.com/OFUTOVFLMrsAAAAi/minecraft-steeeveeeee.gif"
        alt="Minecraft Steve andando"
        className="fixed w-[90px] z-[9998] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ bottom: '18px', left: '-100px' }}
      />

      {/* Segundo GIF */}
      <img
        ref={gif2Ref}
        src="https://media.tenor.com/TuWcGu4ZizcAAAAi/minecraft-mine-craft.gif"
        alt="Minecraft Steve engraçado 2"
        className="fixed w-[90px] z-[9998] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ left: '200px', top: '100px' }}
      />

      {/* Terceiro GIF */}
      <img
        ref={gif3Ref}
        src="https://media.tenor.com/729u0YBE2NcAAAAi/minecraft-minecraft-memes.gif"
        alt="Minecraft meme engraçado 3"
        className="fixed w-[90px] z-[9998] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ left: '400px', top: '200px' }}
      />

      {/* Quarto GIF */}
      <img
        ref={gif4Ref}
        src="https://media.tenor.com/WgNvQspF6EUAAAAi/mcdstudio-minecraft.gif"
        alt="Minecraft meme engraçado 4"
        className="fixed w-[90px] z-[9998] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ left: '600px', top: '300px' }}
      />

      {/* Camelo */}
      <img
        ref={camelRef}
        src="https://media.tenor.com/s7VuUDaFMM4AAAAi/camel-minecraft.gif"
        alt="Minecraft Camel"
        className="fixed w-[100px] z-[9998] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ left: '300px', top: '400px' }}
      />

      {/* Piglin dançando */}
      <img
        ref={piglinRef}
        src="https://media.tenor.com/676kHSbGs5kAAAAi/piglindance-minecraft.gif"
        alt="Minecraft Piglin Dance"
        className="fixed w-[90px] z-[9998] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ left: '500px', top: '150px' }}
      />

      {/* Zumbi */}
      <img
        ref={zombieRef}
        src="https://media.tenor.com/wJit3hJTWsMAAAAi/diamond.gif"
        alt="Minecraft Zumbi TLG"
        className="fixed w-[120px] z-[10000] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ top: '60%', left: '-140px' }}
      />

      {/* Abelha */}
      <img
        ref={beeRef}
        src="https://media.tenor.com/4iUS84WbpOQAAAAi/minecraft-bee-angry-minecraft-bee.gif"
        alt="Minecraft Bee"
        className="fixed w-[80px] z-[10001] pointer-events-none opacity-97 transition-all duration-100 linear"
        style={{ top: '35%', left: '-100px' }}
      />
    </>
  );
};

export default AnimatedGifs;
