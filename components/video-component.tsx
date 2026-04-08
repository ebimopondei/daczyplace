import Image from 'next/image';
import React, { useState, useRef } from 'react';

interface PortraitVideoProps {
  src: string;
  poster?: string;
  width?: string | number;
  height?: string | number;
}

const PortraitVideo: React.FC<PortraitVideoProps> = ({ src, poster, width = "300px", height = "533px" }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative w-full h-120 md:h-150">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        className="w-full h-full object-cover rounded-lg"
        onClick={handlePlayPause}
      />
      {true && (
        <>
            <div className={` ${!isPlaying ? ' inset-0 bg-black/60 rounded-lg pointer-events-none':''} absolute transition-all duration-500`}></div>
            <button
            onClick={handlePlayPause}
            className={`${!isPlaying ? '':'opacity-0'} inset-0 flex items-center justify-center absolute transition-all duration-500`}
            >
            <div className="b bg-opacity-70 rounded-full p-4 animate-pulse">
                <Image src="/svg/play-button.svg" alt="play button" width={64} height={64} className=" w-30 md:w-40 h-30 md:h-40"/>

            </div>
            </button>
        </>
      )}
    </div>
  );
};

export default PortraitVideo;
