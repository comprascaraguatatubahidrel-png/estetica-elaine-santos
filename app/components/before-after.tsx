'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import Image from 'next/image';

interface BeforeAfterProps {
    beforeImage: string;
    afterImage: string;
    beforeLabel?: string;
    afterLabel?: string;
}

export function BeforeAfter({
    beforeImage,
    afterImage,
    beforeLabel = 'Antes',
    afterLabel = 'Depois',
}: BeforeAfterProps) {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isResizing, setIsResizing] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback((clientX: number) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
        setSliderPosition(percent);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (!isResizing) return;
        handleMove(e.clientX);
    }, [isResizing, handleMove]);

    const handleTouchMove = useCallback((e: TouchEvent) => {
        if (!isResizing) return;
        handleMove(e.touches[0].clientX);
    }, [isResizing, handleMove]);

    const handleMouseUp = useCallback(() => {
        setIsResizing(false);
    }, []);

    useEffect(() => {
        if (isResizing) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);
            window.addEventListener('touchmove', handleTouchMove);
            window.addEventListener('touchend', handleMouseUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseup', handleMouseUp);
            window.removeEventListener('touchmove', handleTouchMove);
            window.removeEventListener('touchend', handleMouseUp);
        };
    }, [isResizing, handleMouseMove, handleTouchMove, handleMouseUp]);

    return (
        <div
            className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl cursor-ew-resize select-none"
            ref={containerRef}
            onMouseDown={() => setIsResizing(true)}
            onTouchStart={() => setIsResizing(true)}
        >
            {/* Imagem do "Depois" (Fundo) */}
            <div className="absolute inset-0">
                <Image
                    src={afterImage}
                    alt="Depois"
                    fill
                    className="object-cover"
                    draggable={false}
                />
                <span className="absolute top-4 right-4 bg-black/60 text-white px-3 py-1 rounded-full text-xs font-bold tracking-widest backdrop-blur-sm z-10">
                    {afterLabel}
                </span>
            </div>

            {/* Imagem do "Antes" (Sobreposta com Clip-Path) */}
            <div
                className="absolute inset-0"
                style={{
                    clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`
                }}
            >
                <Image
                    src={beforeImage}
                    alt="Antes"
                    fill
                    className="object-cover"
                    draggable={false}
                />
                <span className="absolute top-4 left-4 bg-white/90 text-black px-3 py-1 rounded-full text-xs font-bold tracking-widest backdrop-blur-sm z-10 border border-black/10">
                    {beforeLabel}
                </span>
            </div>

            {/* Linha Divisória */}
            <div
                className="absolute top-0 bottom-0 w-1 bg-white z-20 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
            >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-rose-500">
                    <ChevronsLeftRight size={20} />
                </div>
            </div>
        </div>
    );
}
