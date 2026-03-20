import { useState, useEffect } from "react";
import { greetings } from "./lib/data/greetings";

function StarOrnament({ className = "" }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className={className}>
      <polygon points="10,1 12.4,7.2 19,7.6 14,12 15.9,18.5 10,15 4.1,18.5 6,12 1,7.6 7.6,7.2" />
    </svg>
  );
}

function Crescent() {
  return (
    <svg viewBox="0 0 50 50" fill="none" className="w-12 h-12">
      <path
        d="M30 6 C19 6 10 15 10 26 C10 37 19 46 30 46 C35 46 40 44 43 40 C38 41 32 38 28 33 C24 28 23 22 26 17 C28 12 30 8 30 6Z"
        className="fill-primary"
        opacity="0.9"
      />
      <circle cx="39" cy="12" r="2" className="fill-primary" opacity="0.5" />
      <circle cx="43" cy="21" r="1.2" className="fill-primary" opacity="0.35" />
    </svg>
  );
}

function Mandala({ className = "" }) {
  return (
    <svg viewBox="0 0 300 300" fill="none" className={className}>
      <circle
        cx="150"
        cy="150"
        r="140"
        stroke="currentColor"
        strokeWidth="0.6"
        strokeDasharray="4 6"
      />
      <circle
        cx="150"
        cy="150"
        r="120"
        stroke="currentColor"
        strokeWidth="0.4"
      />
      <circle
        cx="150"
        cy="150"
        r="90"
        stroke="currentColor"
        strokeWidth="0.4"
        strokeDasharray="2 4"
      />
      <circle
        cx="150"
        cy="150"
        r="60"
        stroke="currentColor"
        strokeWidth="0.4"
      />
      <circle
        cx="150"
        cy="150"
        r="30"
        stroke="currentColor"
        strokeWidth="0.4"
      />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * 45 * Math.PI) / 180;
        const a2 = ((i * 45 + 22.5) * Math.PI) / 180;
        return (
          <g key={i}>
            <line
              x1="150"
              y1="150"
              x2={150 + 120 * Math.cos(a)}
              y2={150 + 120 * Math.sin(a)}
              stroke="currentColor"
              strokeWidth="0.4"
              opacity="0.5"
            />
            <circle
              cx={150 + 90 * Math.cos(a2)}
              cy={150 + 90 * Math.sin(a2)}
              r="3"
              fill="currentColor"
              opacity="0.3"
            />
          </g>
        );
      })}
      {Array.from({ length: 12 }).map((_, i) => {
        const a = (i * 30 * Math.PI) / 180;
        return (
          <line
            key={i}
            x1={150 + 60 * Math.cos(a)}
            y1={150 + 60 * Math.sin(a)}
            x2={150 + 60 * Math.cos(a + (Math.PI * 2) / 3)}
            y2={150 + 60 * Math.sin(a + (Math.PI * 2) / 3)}
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.4"
          />
        );
      })}
      <polygon
        points="150,124 156,142 174,142 160,153 165,171 150,160 135,171 140,153 126,142 144,142"
        stroke="currentColor"
        strokeWidth="0.8"
        fill="currentColor"
        fillOpacity="0.08"
      />
    </svg>
  );
}

function Divider() {
  return (
    <div className="flex items-center justify-center gap-3 my-5">
      <div className="h-px flex-1 bg-accent opacity-50" />
      <div className="flex items-center gap-1.5">
        <div className="w-1 h-1 rounded-full bg-primary opacity-40" />
        <StarOrnament className="w-3.5 h-3.5 text-primary opacity-50" />
        <div className="w-1 h-1 rounded-full bg-primary opacity-40" />
      </div>
      <div className="h-px flex-1 bg-accent opacity-50" />
    </div>
  );
}

function Particles() {
  const dots = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 2,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 6}s`,
    duration: `${4 + Math.random() * 5}s`
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map(d => (
        <div
          key={d.id}
          className="absolute rounded-full bg-primary opacity-20"
          style={{
            width: d.size,
            height: d.size,
            top: d.top,
            left: d.left,
            animation: `floatDot ${d.duration} ease-in-out infinite`,
            animationDelay: d.delay
          }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => setVisible(true), 80);
  }, []);

  const searchParams = new URLSearchParams(window.location.search);
  const id = searchParams.get("id");
  const greeting = greetings.find(g => g.id === id) ?? greetings[0];

  const fadeUp = delay => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(16px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`
  });

  return (
    <>
      <style>{`
        @keyframes floatDot {
          0%,100% { transform: translateY(0) scale(1); opacity:0.15; }
          50%      { transform: translateY(-16px) scale(1.3); opacity:0.3; }
        }
        @keyframes rotateSlow  { from{transform:rotate(0deg)}   to{transform:rotate(360deg)}  }
        @keyframes rotateSlowR { from{transform:rotate(0deg)}   to{transform:rotate(-360deg)} }
        @keyframes pulseGlow   { 0%,100%{opacity:0.05} 50%{opacity:0.12} }
        .mandala-cw  { animation: rotateSlow  60s linear infinite; }
        .mandala-ccw { animation: rotateSlowR 80s linear infinite; }
        .glow-pulse  { animation: pulseGlow    4s ease-in-out infinite; }
      `}</style>

      <main>
        {/* ══════════════════════════════
            HERO
        ══════════════════════════════ */}
        <div className="hero bg-base-200 min-h-screen relative overflow-hidden">
          <Particles />

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Mandala className="w-[580px] h-[580px] text-primary mandala-cw opacity-[0.06]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Mandala className="w-[380px] h-[380px] text-secondary mandala-ccw opacity-[0.04]" />
          </div>

          <div
            className="absolute rounded-full glow-pulse pointer-events-none"
            style={{
              width: 460,
              height: 460,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background:
                "radial-gradient(circle, oklch(var(--p)/0.12) 0%, transparent 70%)"
            }}
          />

          <StarOrnament className="absolute top-6    left-6   w-5 h-5 text-primary    opacity-20" />
          <StarOrnament className="absolute top-6    right-6  w-4 h-4 text-secondary  opacity-20" />
          <StarOrnament className="absolute top-1/3  left-4   w-3 h-3 text-accent     opacity-20" />
          <StarOrnament className="absolute top-2/3  right-5  w-3 h-3 text-accent     opacity-20" />
          <StarOrnament className="absolute bottom-20 left-8  w-3 h-3 text-primary    opacity-15" />
          <StarOrnament className="absolute bottom-20 right-8 w-4 h-4 text-secondary  opacity-15" />

          <div className="hero-content text-center relative z-10">
            <div className="max-w-md w-full">
              <div className="flex justify-center mb-3" style={fadeUp(0.1)}>
                <Crescent />
              </div>

              <div
                className="flex items-center justify-center gap-2 mb-5"
                style={fadeUp(0.2)}
              >
                <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary opacity-40" />
                <StarOrnament className="w-3 h-3 text-primary opacity-55" />
                <div className="w-1.5 h-1.5 rounded-full bg-primary opacity-55" />
                <StarOrnament className="w-3 h-3 text-primary opacity-55" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary opacity-40" />
              </div>

              <p
                className="text-secondary text-xs tracking-[0.35em] uppercase font-semibold mb-1"
                style={fadeUp(0.3)}
              >
                Selamat Hari Raya
              </p>

              <h1
                className="text-primary font-display leading-tight mb-1"
                style={{ fontSize: "clamp(3rem,14vw,4.5rem)", ...fadeUp(0.4) }}
              >
                Idul Fitri
              </h1>

              <p
                className="text-secondary text-[0.62rem] tracking-[0.2em] uppercase mt-1 opacity-70"
                style={fadeUp(0.5)}
              >
                1 Syawal 1447 H &nbsp;·&nbsp; 21 Maret 2026 M
              </p>

              <div style={fadeUp(0.55)}>
                <Divider />
              </div>

              <div style={fadeUp(0.65)}>
                <p
                  className="font-display text-primary leading-snug"
                  style={{ fontSize: "clamp(1.6rem,7vw,2.2rem)" }}
                >
                  Minal Aidzin Walfaidzin
                </p>
                <p className="text-secondary text-sm tracking-widest mt-2 mb-1 opacity-80">
                  Mohon Maaf Lahir &amp; Batin
                </p>
              </div>

              <div style={fadeUp(0.7)}>
                <Divider />
              </div>

              <div style={fadeUp(0.8)}>
                <p className="text-secondary text-[0.58rem] tracking-[0.3em] uppercase mb-2 opacity-60">
                  dari
                </p>
                <span className="inline-flex items-center gap-2 badge badge-outline badge-lg border-primary text-primary px-4 py-3 font-semibold tracking-wide text-xs">
                  <StarOrnament className="w-3 h-3 opacity-70" />
                  CEO yang Menyamar
                  <StarOrnament className="w-3 h-3 opacity-70" />
                </span>
              </div>
            </div>
          </div>

          <a
            href="#greeting"
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
          >
            <button className="btn btn-ghost btn-circle animate-bounce text-primary opacity-50 hover:opacity-90 transition-opacity">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
          </a>
        </div>

        {/* ══════════════════════════════
            AMPLOP THR
        ══════════════════════════════ */}
        <div
          id="greeting"
          className="w-full bg-base-200/50 relative overflow-hidden px-6 py-24 flex flex-col items-center gap-4"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(oklch(var(--p)) 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Section label */}
          <div className="relative z-10 flex flex-col items-center gap-2 mb-4 text-center">
            <div className="flex items-center gap-2">
              <div className="h-px w-10 bg-primary opacity-30" />
              <StarOrnament className="w-3 h-3 text-primary opacity-40" />
              <div className="h-px w-10 bg-primary opacity-30" />
            </div>
            <p className="text-base-content/40 text-xs tracking-[0.3em] uppercase">
              Greeting
            </p>
          </div>

          <label className="swap swap-flip relative z-10 cursor-pointer">
            <input type="checkbox" />

            {/* ── swap-on ── */}
            <div className="swap-on">
              <div className="card bg-base-100 w-72 h-96 shadow-2xl overflow-hidden">
                {/* Top accent */}
                <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-primary" />
                {/* Dot bg */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(oklch(var(--p)) 1px, transparent 1px)",
                    backgroundSize: "18px 18px"
                  }}
                />
                <div className="card-body items-center text-center justify-between relative z-10">
                  {/* Header */}
                  <div className="flex flex-col items-center gap-1.5">
                    <div className="flex items-center gap-2">
                      <div className="h-px w-8 bg-primary opacity-30" />
                      <StarOrnament className="w-3 h-3 text-primary opacity-40" />
                      <div className="h-px w-8 bg-primary opacity-30" />
                    </div>
                    <h2 className="card-title font-display text-primary text-2xl font-normal">
                      {greeting.title}
                    </h2>
                    <p className="text-base-content/60 text-sm leading-relaxed italic">
                      "{greeting.message}"
                    </p>
                  </div>
                  {/* CTA */}
                  <div className="flex flex-col items-center gap-3">
                    <a
                      href="https://app.gopay.co.id/NF8p/fetrwaq2"
                      target="_blank"
                    >
                      <button className="btn btn-sm btn-primary rounded-full px-6">
                        🎁 Ambil Hadiah
                      </button>
                    </a>
                    <p className="text-base-content/25 text-[0.52rem] tracking-wider uppercase">
                      tap to close
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ── swap-off ── */}
            <div className="swap-off">
              <div className="card w-72 h-96 shadow-2xl overflow-hidden relative">
                {/* Base hijau primary */}
                <div className="absolute inset-0 bg-primary" />
                {/* Batik chevron */}
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `
                    linear-gradient(135deg, white 25%, transparent 25%),
                    linear-gradient(225deg, white 25%, transparent 25%),
                    linear-gradient(45deg,  white 25%, transparent 25%),
                    linear-gradient(315deg, white 25%, transparent 25%)`,
                    backgroundPosition: "10px 0, 10px 0, 0 0, 0 0",
                    backgroundSize: "20px 20px",
                    backgroundRepeat: "repeat",
                    opacity: 0.08
                  }}
                />
                {/* Top flap */}
                <div className="absolute top-0 left-0 right-0 pointer-events-none">
                  <svg
                    viewBox="0 0 288 120"
                    className="w-full"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,0 288,0 144,105"
                      fill="white"
                      fillOpacity="0.1"
                    />
                    <polygon
                      points="0,0 288,0 144,105"
                      stroke="white"
                      strokeOpacity="0.2"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                </div>
                {/* Bottom fold */}
                <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
                  <svg
                    viewBox="0 0 288 70"
                    className="w-full"
                    preserveAspectRatio="none"
                  >
                    <polygon
                      points="0,70 144,15 288,70"
                      fill="black"
                      fillOpacity="0.1"
                    />
                  </svg>
                </div>
                {/* Center seal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
                  <div className="w-20 h-20 rounded-full border-2 border-white/25 bg-white/10 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                      <StarOrnament className="w-7 h-7 text-white opacity-80" />
                    </div>
                  </div>
                  <p className="text-white/60 text-[0.58rem] tracking-[0.3em] uppercase font-semibold">
                    Tap to Open
                  </p>
                </div>
                {/* Corner stars */}
                <StarOrnament className="absolute top-4 left-4   w-4 h-4 text-white opacity-20" />
                <StarOrnament className="absolute top-4 right-4  w-4 h-4 text-white opacity-20" />
                <StarOrnament className="absolute bottom-5 left-4  w-3 h-3 text-white opacity-15" />
                <StarOrnament className="absolute bottom-5 right-4 w-3 h-3 text-white opacity-15" />
              </div>
            </div>
          </label>
        </div>

        {/* ══════════════════════════════
            FOOTER
        ══════════════════════════════ */}
        <footer className="footer footer-center bg-base-200 text-base-content p-10 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 pointer-events-none">
            <svg
              viewBox="0 0 1440 40"
              className="w-full"
              preserveAspectRatio="none"
            >
              <path
                fill="oklch(var(--p))"
                fillOpacity="0.08"
                d="M0,20L48,18C96,16,192,12,288,14C384,16,480,24,576,26C672,28,768,24,864,20C960,16,1056,12,1152,14C1248,16,1344,22,1392,25L1440,28L1440,0L0,0Z"
              />
            </svg>
          </div>
          <div className="flex flex-col items-center gap-2 relative z-10">
            <div className="flex items-center gap-2 opacity-25">
              <StarOrnament className="w-3 h-3 text-primary" />
              <div className="h-px w-16 bg-primary" />
              <StarOrnament className="w-3 h-3 text-primary" />
            </div>
            <p className="text-sm opacity-50">
              Copyright © {new Date().getFullYear()} — Bayu Aprio Pamungkas
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
