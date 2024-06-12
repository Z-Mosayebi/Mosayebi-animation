import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Howl } from 'howler';
import LoginForm from './LoginForm'; // Adjust the path if necessary
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  const audioRef = useRef(null);
  const [isSoundPlaying, setIsSoundPlaying] = useState(false);

  useEffect(() => {
    const sound = new Howl({
      src: [process.env.PUBLIC_URL + '/heart.mp3'],
      loop: true,
      volume: 1.0,
    });

    audioRef.current = sound;
  }, []);

  const handlePlaySound = () => {
    if (!isSoundPlaying && audioRef.current) {
      audioRef.current.play();
      setIsSoundPlaying(true);
      console.log("Sound started");
      
      setTimeout(() => {
        if (audioRef.current) {
          audioRef.current.stop();
          console.log("Sound stopped after timeout");
        }
      }, 5000); // Adjust the delay to match when the login form appears
    }
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {!isSoundPlaying && (
        <button 
          onClick={handlePlaySound} 
          className="fixed top-4 right-4 bg-[#ff4d58] text-white p-4 rounded-full z-50 flex items-center justify-center"
        >
          <i className="fas fa-volume-up"></i>
        </button>
      )}
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <motion.div
          initial={{ y: 200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            ease: 'easeOut',
            duration: 1,
          }}
          className="flex h-full w-full items-center justify-center bg-white"
        >
          <img src="/Alegrion-logo.png" alt="" className="w-80" />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: -650, x: -650 }}
        animate={{ y: 0, x: 0 }}
        transition={{
          ease: 'easeOut',
          duration: 1,
          delay: 1.5,
        }}
        className="absolute top-0 left-0 right-0 h-full w-full"
      >
        <img src="/bg-blur-cp.png" alt="" className="h-full w-full scale-[2]" />
      </motion.div>
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{ x: -700, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 3.3,
            }}
            className="mr-80 mb-72 text-9xl font-black italic tracking-widest text-white"
          >
            Alegrion
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <div className="flex h-full w-full items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: 700 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              ease: 'easeInOut',
              type: 'spring',
              duration: 2,
              delay: 3.3,
            }}
            className="ml-80 mt-96 text-9xl font-black italic tracking-widest text-white"
          >
            Alegrion
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 right-0 h-full w-full">
        <LoginForm />
      </div>
    </div>
  );
}

export default App;
