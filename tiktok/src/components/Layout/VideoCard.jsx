import { useRef, useEffect, useState } from "react";
import {Play, Volume2, VolumeOff, Heart, MessageCircle, Share} from 'lucide-react'

function VideoCard({ video }) {
    const videoRef = useRef();
    const [isMuted, setIsMuted] = useState(false);
    const [isPlay, setIsPlay] = useState(false);
    const [progress, setProgress] = useState(0);
    const [redHeart, setRedHeart] = useState(true);

     // Detect video visible
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    videoRef.current.play();
                    setIsPlay(true);
                } else {
                    videoRef.current.pause();
                    setIsPlay(false);
                }
            },
            {
                threshold: 0.7,
            }
        );

        observer.observe(videoRef.current);

        return () => observer.disconnect();
    }, []);

    // Heart
    const handleHeart = () => {
        if(!redHeart) {
            setRedHeart(true);
        } else {
            setRedHeart(false);
        }
    }

    // Click play/pause
    const handleToggleVideo = () => {
        if (isPlay) {
            videoRef.current.pause();
            setIsPlay(false);
        } else {
            videoRef.current.play();
            setIsPlay(true);
        }
    };

    // On/Off volume
    const handleToggleMute = () => {
        videoRef.current.muted = !videoRef.current.muted;
        setIsMuted(videoRef.current.muted);
    };

    // Theo dõi thời gian của video
    const handleTimeUpdate = () => {

    const currentTime = videoRef.current.currentTime;

    const duration = videoRef.current.duration;

    const progressPercent = (currentTime / duration) * 100;

    setProgress(progressPercent);
    };
    const handleSeek = (e) => {

    const seekTime = e.target.value;

    setProgress(seekTime);

    const duration =
        videoRef.current.duration;

    videoRef.current.currentTime =
        (seekTime / 100) * duration;
    };

    return (
        <div className="relative h-[90vh] mt-1 mb-2 w-full flex items-center justify-center bg-black">
            
            {/* Video */}
            <video
                ref={videoRef}
                src={video.video}
                onClick={handleToggleVideo}
                // onDoubleClick={handleHeart}
                onTimeUpdate={handleTimeUpdate}
                loop
                muted
                autoPlay
                className="h-[90vh] object-cover"
            />

            {/* Pause Icon */}
            {!isPlay && (
                <div
                    className="
                        absolute
                        text-white
                        text-7xl
                    "
                >
                    <Play size={40}  
                    onClick={handleToggleVideo} 
                    className="opacity-75 cursor-pointer" />
                </div>
            )}

            {/* Info */}
            <div className="absolute bottom-10 left-5 text-white">
                <h2 className="font-bold text-lg">
                    @{video.username}
                </h2>

                <p>{video.caption}</p>
            </div>

            {/* Actions */}
            <div className="absolute right-5 bottom-20 flex flex-col gap-5 text-white">
                <button onClick={handleHeart}
                 className="cursor-pointer">{redHeart? <Heart /> : "❤️"}</button>
                <button><MessageCircle /></button>
                <button><Share /></button>
            </div>

            {/* Progress bar */}
            <input
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={handleSeek}
            className="
            absolute
            bottom-0
            left-0
            w-full
            h-1
            appearance-none
            bg-white/30
            cursor-pointer
            "
            />

            <button
                onClick={handleToggleMute}
                className="
                    absolute
                    bottom-5
                    right-3.5
                    text-white
                    text-2xl
                    bg-black/40
                    p-3
                    rounded-full
                "
            >
                {isMuted ? <Volume2 size={10} className="cursor-pointer" /> : <VolumeOff size={10} className="cursor-pointer" />}
            </button>
        </div>
    );
}

export default VideoCard;