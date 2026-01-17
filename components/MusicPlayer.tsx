"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX, SkipForward, Music, ListMusic, X } from "lucide-react";
import clsx from "clsx";

const PLAYLIST = [
    { title: "Thôi quên đi", src: "/audio/thoi_quen_di.mp3" },
    { title: "Người từng thương", src: "/audio/nguoi_tung_thuong.mp3" },
    { title: "Tình yêu khép lại", src: "/audio/tinh_yeu_khep_lai.mp3" },
];

export default function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);
    const audioRef = useRef<HTMLAudioElement | null>(null);

    // Initialize random song on mount
    useEffect(() => {
        setCurrentSongIndex(Math.floor(Math.random() * PLAYLIST.length));
    }, []);

    useEffect(() => {
        if (!audioRef.current) {
            audioRef.current = new Audio(PLAYLIST[currentSongIndex].src);
            audioRef.current.volume = 0.5;

            // Auto-play next song when ended
            audioRef.current.onended = () => {
                handleNext();
            };
        } else {
            // Change source if index changes
            const wasPlaying = !audioRef.current.paused;
            audioRef.current.src = PLAYLIST[currentSongIndex].src;
            if (wasPlaying || (hasInteracted && isPlaying)) {
                audioRef.current.play().catch(e => console.log("Audio play failed:", e));
            }
        }
    }, [currentSongIndex]);

    useEffect(() => {
        if (hasInteracted && audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((e) => console.log("Audio play failed:", e));
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying, hasInteracted]);

    // Expose a function to global window to allow other components (like IntroScreen) to start music
    useEffect(() => {
        (window as any).startMusic = () => {
            setHasInteracted(true);
            setIsPlaying(true);
        };
    }, []);

    const handleNext = () => {
        setCurrentSongIndex((prev) => (prev + 1) % PLAYLIST.length);
        setIsPlaying(true);
        setHasInteracted(true);
    };

    const playSong = (index: number) => {
        setCurrentSongIndex(index);
        setIsPlaying(true);
        setHasInteracted(true);
    };

    return (
        <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
            {/* Playlist UI */}
            <AnimatePresence>
                {isPlaylistOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        className="mb-2 w-64 bg-black/90 border border-neon-blue/30 rounded-lg overflow-hidden backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.5)]"
                    >
                        <div className="p-3 border-b border-white/10 flex justify-between items-center">
                            <span className="text-neon-blue font-bold text-sm tracking-wider">PLAYLIST_</span>
                            <button onClick={() => setIsPlaylistOpen(false)} className="text-gray-400 hover:text-white">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <div className="max-h-48 overflow-y-auto custom-scrollbar p-2 space-y-1">
                            {PLAYLIST.map((song, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => playSong(idx)}
                                    className={clsx(
                                        "w-full text-left px-3 py-2 rounded text-sm transition-all flex items-center gap-2 group",
                                        currentSongIndex === idx
                                            ? "bg-neon-blue/20 text-neon-blue"
                                            : "text-gray-400 hover:bg-white/5 hover:text-white"
                                    )}
                                >
                                    <span className={clsx(
                                        "w-1.5 h-1.5 rounded-full",
                                        currentSongIndex === idx ? "bg-neon-blue animate-pulse" : "bg-gray-600 group-hover:bg-white"
                                    )} />
                                    <span className="truncate">{song.title}</span>
                                    {currentSongIndex === idx && isPlaying && (
                                        <Music className="w-3 h-3 ml-auto animate-bounce" />
                                    )}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Song Info (Visible when playing) */}
            <AnimatePresence>
                {isPlaying && !isPlaylistOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        className="bg-black/80 border border-neon-blue/30 px-3 py-1 rounded-md mb-1 backdrop-blur-sm"
                    >
                        <div className="flex items-center gap-2">
                            <Music className="w-3 h-3 text-neon-purple animate-pulse" />
                            <span className="text-xs text-neon-blue font-mono tracking-wider">
                                {PLAYLIST[currentSongIndex].title}
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <div className="flex items-center gap-2 p-2 rounded-full border border-neon-blue/30 bg-black/80 backdrop-blur-md">
                {/* Playlist Toggle */}
                <button
                    onClick={() => setIsPlaylistOpen(!isPlaylistOpen)}
                    className={clsx(
                        "p-2 rounded-full transition-colors",
                        isPlaylistOpen ? "text-neon-blue bg-white/10" : "text-white hover:text-neon-blue"
                    )}
                    title="Playlist"
                >
                    <ListMusic className="w-5 h-5" />
                </button>

                <div className="w-[1px] h-6 bg-white/20 mx-1" />

                {/* Audio Visualizer */}
                <div className="flex items-end gap-[2px] h-6 overflow-hidden w-8 justify-center">
                    {isPlaying ? (
                        [...Array(4)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="w-1 bg-neon-blue"
                                animate={{
                                    height: ["20%", "80%", "40%"],
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatType: "reverse",
                                    delay: i * 0.1,
                                }}
                            />
                        ))
                    ) : (
                        <div className="w-full h-[2px] bg-gray-600 self-center" />
                    )}
                </div>

                {/* Controls */}
                <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="p-2 rounded-full text-white hover:text-neon-blue transition-colors"
                >
                    {isPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
                </button>

                <button
                    onClick={handleNext}
                    className="p-2 rounded-full text-white hover:text-neon-purple transition-colors"
                    title="Next Track"
                >
                    <SkipForward className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}
