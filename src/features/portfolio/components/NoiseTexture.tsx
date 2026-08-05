"use client";

import { useEffect, useRef } from "react";

const GRAIN_SIZE = 128;

function makeGrain(ctx: CanvasRenderingContext2D) {
  const tile = document.createElement("canvas");
  tile.width = tile.height = GRAIN_SIZE;
  const tileCtx = tile.getContext("2d");
  if (!tileCtx) return null;

  const img = tileCtx.createImageData(GRAIN_SIZE, GRAIN_SIZE);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = v;
    img.data[i + 1] = v;
    img.data[i + 2] = v;
    img.data[i + 3] = 18;
  }
  tileCtx.putImageData(img, 0, 0);
  return ctx.createPattern(tile, "repeat");
}

export default function NoiseTexture() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const grain = makeGrain(ctx);

    const draw = () => {
      if (!grain) return;
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      ctx.fillStyle = grain;
      ctx.fillRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    };

    resize();
    draw();

    const ro = new ResizeObserver(() => {
      resize();
      draw();
    });
    ro.observe(canvas);

    if (still) return () => ro.disconnect();

    let raf = 0;
    const loop = () => {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
      if (grain) {
        ctx.save();
        ctx.translate(
          -Math.floor(Math.random() * GRAIN_SIZE),
          -Math.floor(Math.random() * GRAIN_SIZE),
        );
        ctx.fillStyle = grain;
        ctx.fillRect(0, 0, canvas.clientWidth + GRAIN_SIZE, canvas.clientHeight + GRAIN_SIZE);
        ctx.restore();
      }
      raf = requestAnimationFrame(loop);
    };

    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !raf) loop();
      else if (!e.isIntersecting && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });
    io.observe(canvas);

    return () => {
      ro.disconnect();
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[9999] h-full w-full"
    />
  );
}
