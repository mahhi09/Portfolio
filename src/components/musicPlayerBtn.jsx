import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";

import song1 from "../assets/music/song1.mp3";
import song2 from "../assets/music/song2.mp3";
import song3 from "../assets/music/song3.mp3";
import song4 from "../assets/music/song4.mp3";

const songs = [song1, song2, song3, song4];

export default function MusicPlayerBtn() {
  const [playing, setPlaying] = useState(false);
  const [songIndex, setSongIndex] = useState(0);

  const audioRef = useRef(new Audio(songs[0]));

  // Auto play after intro
  useEffect(() => {
    const audio = audioRef.current;

    audio.volume = 0.5;

    const timer = setTimeout(() => {
      audio
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch(() => {
          console.log("Autoplay blocked by browser");
        });
    },);

    return () => {
      clearTimeout(timer);
      audio.pause();
    };
  }, []);

  // Change song
  useEffect(() => {
    const audio = audioRef.current;

    audio.src = songs[songIndex];

    if (playing) {
      audio.play().catch(() => {});
    }
  }, [songIndex]);

  // Auto next song
  useEffect(() => {
    const audio = audioRef.current;

    const handleEnded = () => {
      setSongIndex((prev) => (prev + 1) % songs.length);
    };

    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (playing) {
      audio.pause();
    } else {
      audio.play().catch(() => {});
    }

    setPlaying(!playing);
  };

  const nextSong = () => {
    const nextIndex = (songIndex + 1) % songs.length;

    setSongIndex(nextIndex);

    const audio = audioRef.current;
    audio.src = songs[nextIndex];

    audio.play().catch(() => {});

    setPlaying(true);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[99999]">
      <button
        onClick={togglePlay}
        onDoubleClick={nextSong}
        className="group relative flex items-center justify-center"
      >
        {/* Outer Glow */}
        <span className="absolute h-20 w-20 rounded-full bg-cyan-400/20 blur-xl animate-pulse" />

        {/* Middle Glow */}
        <span className="absolute h-16 w-16 rounded-full bg-cyan-400/40 blur-md" />

        {/* Main Button */}
        <div
          className="
            relative
            h-14 w-14
            rounded-full
            bg-gradient-to-b
            from-cyan-300
            to-emerald-400
            flex items-center justify-center
            shadow-[0_0_25px_#22d3ee,0_0_60px_#34d399]
            transition-all duration-300
            group-hover:scale-110
          "
        >
          {playing ? (
            <Pause size={22} className="text-white" strokeWidth={3} />
          ) : (
            <Play
              size={22}
              className="text-white ml-[2px]"
              strokeWidth={3}
            />
          )}
        </div>
      </button>

      <p className="absolute -top-10 right-0 text-xs text-white/70 whitespace-nowrap">
        Double Click = Next Song
      </p>
    </div>
  );
}