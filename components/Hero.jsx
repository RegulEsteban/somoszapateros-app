import Link from 'next/link';
import React from 'react';
import TextTransition, { presets } from "react-text-transition";

const TEXTS = [
  "Artesanos",
  "Productores",
  "Tradición",
  "San Mateo Atenco"
];

const Hero = ({heading, message}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className='flex items-center justify-center h-screen bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='text-5xl font-bold inline'>
          Somos <TextTransition delay={index * 100} inline>
          {TEXTS[index % TEXTS.length]}
          </TextTransition>
        </h2>
        <p className='py-5 text-xl'>{message}</p>
        <Link href={'/tienda'} className='px-8 py-3 border hover:bg-white hover:text-sz-dark'>Ver tienda</Link>
      </div>
    </div>
  );
};

export default Hero;
