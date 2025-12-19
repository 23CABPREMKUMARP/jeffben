"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe, { COBEOptions } from "cobe";
import { useMotionValue, useSpring } from "motion/react";

import { cn } from "@/src/lib/utils";

const MOVEMENT_DAMPING = 1400;

export function Globe({
  className,
  config = {
    width: 800,
    height: 800,
    onRender: () => { },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
      { location: [14.5995, 120.9842], size: 0.03 },
      { location: [19.076, 72.8777], size: 0.1 },
      { location: [23.8103, 90.4125], size: 0.05 },
      { location: [30.0444, 31.2357], size: 0.07 },
      { location: [39.9042, 116.4074], size: 0.08 },
      { location: [-23.5505, -46.6333], size: 0.1 },
      { location: [19.4326, -99.1332], size: 0.1 },
      { location: [40.7128, -74.006], size: 0.1 },
      { location: [34.6937, 135.5022], size: 0.05 },
      { location: [41.0082, 28.9784], size: 0.06 },
    ],
  },
}: {
  className?: string;
  config?: Partial<COBEOptions>;
}) {
  const phi = useRef(0);
  const width = useRef(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0 }
    );

    const currentCanvas = canvasRef.current;
    if (currentCanvas) {
      observer.observe(currentCanvas);
    }

    return () => {
      if (currentCanvas) {
        observer.unobserve(currentCanvas);
      }
    };
  }, []);

  const r = useMotionValue(0);
  const rs = useSpring(r, {
    mass: 1,
    damping: 30,
    stiffness: 100,
  });

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value !== null ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.set(r.get() + delta / MOVEMENT_DAMPING);
    }
  };

  useEffect(() => {
    const onResize = () => {
      if (canvasRef.current) {
        width.current = canvasRef.current.offsetWidth;
      }
    };

    window.addEventListener("resize", onResize);
    onResize();

    const setupGlobe = () => {
      if (!canvasRef.current || !isInView) return;

      const isMobile = window.innerWidth < 768;
      const samples = isMobile ? (config.mapSamples ? config.mapSamples / 2 : 8000) : (config.mapSamples ?? 16000);
      const dpr = window.devicePixelRatio || 2;

      const globe = createGlobe(canvasRef.current!, {
        ...config,
        phi: config.phi ?? 0,
        theta: config.theta ?? 0.3,
        dark: config.dark ?? 0,
        diffuse: config.diffuse ?? 0.4,
        mapSamples: samples,
        mapBrightness: config.mapBrightness ?? 1.2,
        baseColor: config.baseColor ?? [1, 1, 1],
        markerColor: config.markerColor ?? [251 / 255, 100 / 255, 21 / 255],
        glowColor: config.glowColor ?? [1, 1, 1],
        markers: config.markers ?? [],
        devicePixelRatio: Math.min(dpr, 2), // Cap DPR for performance
        width: width.current * 2,
        height: width.current * 2,
        onRender: (state) => {
          if (!pointerInteracting.current) phi.current += 0.005;
          state.phi = phi.current + rs.get();
          state.width = width.current * 2;
          state.height = width.current * 2;
        },
      });

      setTimeout(() => {
        if (canvasRef.current) canvasRef.current.style.opacity = "1";
      }, 0);

      return globe;
    };

    let globe: { destroy: () => void } | undefined;
    if (isInView) {
      globe = setupGlobe();
    }

    return () => {
      if (globe) globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [rs, config, isInView]);

  return (
    <div
      className={cn(
        "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
        className
      )}
    >
      <canvas
        className={cn(
          "size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        )}
        ref={canvasRef}
        onPointerDown={(e) => {
          pointerInteracting.current = e.clientX;
          updatePointerInteraction(e.clientX);
        }}
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
