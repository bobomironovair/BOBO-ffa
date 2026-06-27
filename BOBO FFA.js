import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const BoboFFA = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const canvasRef = useRef(null);

    const playVideo = (id) => {
        const video = document.getElementById(id);
        if (video) video.play();
    };

    const pauseVideo = (id) => {
        const video = document.getElementById(id);
        if (video) video.pause();
    };

    const stopVideo = (id) => {
        const video = document.getElementById(id);
        if (video) {
            video.pause();
            video.currentTime = 0;
        }
    };

    const playAudio = (id) => {
        const audio = document.getElementById(id);
        if (audio) audio.play();
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        
        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const drawBackground = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            const x = Math.random() * canvas.width;
            const y = Math.random() * canvas.height;
            const size = 30 + Math.random() * 50;
            ctx.fillStyle = `rgba(255, 105, 180, ${Math.random()})`;
            ctx.beginPath();
            ctx.arc(x, y, size / 2, 0, Math.PI * 2);
            ctx.fill();
        };
        
        const interval = setInterval(drawBackground, 1000);
        
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            clearInterval(interval);
        };
    }, []);

    let lastScrollTop = 0;
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > lastScrollTop) {
                // Scrolling down
            } else {
                // Scrolling up
            }
            lastScrollTop = scrollTop;
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    let firstScroll = true;
    useEffect(() => {
        const handleScroll = () => {
            if (firstScroll) {
                firstScroll = false;
                return;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    useEffect(() => {
        const updateDateTime = () => {
            const now = new Date();
            const hours2 = now.getHours().toString().padStart(2, '0');
            const minutes2 = now.getMinutes().toString().padStart(2, '0');
            const seconds2 = now.getSeconds().toString().padStart(2, '0');
            const day = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear();
            const timeElement = document.getElementById('currentTime');
            const dateElement = document.getElementById('currentDate');
            const tzElement = document.getElementById('currentTimeZone');

            if (timeElement) {
                timeElement.textContent = `${hours2}:${minutes2}:${seconds2}`;
            }
            if (dateElement) {
                dateElement.textContent = `${day}/${month}/${year}`;
            }
            if (tzElement) {
                tzElement.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
            }
        };

        const updateTimes = function ( ) {
            locations.forEach{location => {
                const output = location.querySelector(output)
                const timezone = location.getAttribute("data-timezone")

                const now = luxon.DateTime.now( ) .setZone ("Europe/Zurich")
                output.innerHTML = now.toFormat ("HH:mm:ss")
            }}
        }

        updateTimes( )

        setInterval(function () {
            updateTimes () 
        } , 1000


        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, zIndex: -1 }} />
            <video id="video1" src="path_to_video.mp4" style={{ display: 'none' }} />
            <audio id="audio1" src="path_to_audio.mp3" style={{ display: 'none' }} />
            <div id="currentTime" style={{ color: '#fff', fontSize: '2rem' }}>00:00:00</div>
            <div id="currentDate" style={{ color: '#fff', fontSize: '1rem' }}>00/00/0000</div>
            <div id="currentTimeZone" style={{ color: '#fff', fontSize: '1rem' }}>Loading timezone...</div>
            {/* Add your UI components here */}
        </div>
    );
};

export default BoboFFA;
