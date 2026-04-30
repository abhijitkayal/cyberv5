


"use client";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaLaptopCode, FaMobileAlt, FaCode,
  FaPalette, FaBullhorn, FaBrush, FaBrain,
} from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";

/* ── dot-grid bg ── */
const StyledPattern = styled.div`
  position: absolute; inset: 0; width: 100%; height: 100%;
  pointer-events: none; z-index: 0;
  background-image: radial-gradient(rgba(103,232,249,0.2) 1px, transparent 1px);
  background-size: 22px 22px; opacity: 0.45;
  mask-image: linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom,transparent 0%,black 12%,black 88%,transparent 100%);
`;
const Pattern = () => <StyledPattern />;

/* ── services ── */
const TOP_SERVICES = [
  { icon:<FaBrain size={34}/>,      title:"AI & Intelligent Systems", desc:"Unlock AI power through intelligent automation & machine learning.", color:"#8B5CF6", rgb:[139,92,246]  },
  { icon:<FaLaptopCode size={34}/>, title:"Web Development",          desc:"Crafting responsive and dynamic websites tailored to your needs.",  color:"#06B6D4", rgb:[6,182,212]   },
  { icon:<FaMobileAlt size={34}/>,  title:"App Development",          desc:"Building innovative and user-friendly mobile applications.",        color:"#22C55E", rgb:[34,197,94]   },
  { icon:<FaCode size={34}/>,       title:"Software Development",     desc:"Custom software solutions to optimize your business processes.",    color:"#10B981", rgb:[16,185,129]  },
];
const BOTTOM_SERVICES = [
  { icon:<FaPalette size={34}/>,        title:"UI/UX Design",          desc:"Creating intuitive and visually appealing user interfaces.",       color:"#14B8A6", rgb:[20,184,166]  },
  { icon:<FaBullhorn size={34}/>,       title:"Digital Marketing",     desc:"Boost your online presence with targeted marketing strategies.",   color:"#38BDF8", rgb:[56,189,248]  },
  { icon:<FaBrush size={34}/>,          title:"Graphic Design",        desc:"Designing stunning visuals to enhance your brand identity.",       color:"#3B82F6", rgb:[59,130,246]  },
  { icon:<SiGoogleanalytics size={34}/>,title:"Research & Analytics",  desc:"We help businesses make sharper, faster decisions.",               color:"#6366F1", rgb:[99,102,241]  },
];

/* ── service card ── */
function ServiceCard({ service, refCallback }) {
  const { icon, title, desc, color, rgb } = service;
  const glow = `rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.28)`;
  return (
    <div ref={refCallback}
      className="relative w-[220px] min-h-[180px] rounded-2xl flex-shrink-0 overflow-hidden cursor-pointer"
      style={{
        background:"rgba(8,10,18,0.90)",
        border:`1px solid rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.20)`,
        boxShadow:`0 0 22px ${glow},inset 0 0 14px rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.05)`,
        backdropFilter:"blur(14px)", transition:"box-shadow 0.3s,transform 0.3s",
      }}
      onMouseEnter={e=>{
        e.currentTarget.style.boxShadow=`0 0 40px rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.55),inset 0 0 22px rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.10)`;
        e.currentTarget.style.transform="translateY(-3px)";
      }}
      onMouseLeave={e=>{
        e.currentTarget.style.boxShadow=`0 0 22px ${glow},inset 0 0 14px rgba(${rgb[0]},${rgb[1]},${rgb[2]},0.05)`;
        e.currentTarget.style.transform="translateY(0)";
      }}
    >
      <div className="absolute top-0 left-0 w-28 h-28 -translate-x-12 -translate-y-12 blur-2xl opacity-20 pointer-events-none"
        style={{background:`radial-gradient(circle,${color},transparent 70%)`}}/>
      <div className="absolute bottom-0 right-0 w-28 h-28 translate-x-12 translate-y-12 blur-2xl opacity-20 pointer-events-none"
        style={{background:`radial-gradient(circle,${color},transparent 70%)`}}/>
      <div className="relative z-10 p-5 flex flex-col h-full">
        <div className="mb-4" style={{color}}>{icon}</div>
        <h3 className="text-[13.5px] font-bold text-white flex items-center gap-1.5 mb-2 leading-snug">
          {title}
          <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" className="opacity-50 flex-shrink-0">
            <line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>
          </svg>
        </h3>
        <p className="text-[11.5px] text-gray-400 leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}

/* ── polyline point at parameter t ── */
function ptOnLine(pts, t) {
  if (!pts || pts.length < 2) return pts?.[0] ?? { x: 0, y: 0 };
  let total = 0;
  const lens = pts.slice(0, -1).map((_, i) => {
    const l = Math.hypot(pts[i+1].x - pts[i].x, pts[i+1].y - pts[i].y);
    total += l;
    return l;
  });
  if (total === 0) return pts[0];
  let rem = t * total;
  for (let i = 0; i < lens.length; i++) {
    if (rem <= lens[i]) {
      const f = lens[i] === 0 ? 0 : rem / lens[i];
      return { x: pts[i].x + (pts[i+1].x - pts[i].x) * f, y: pts[i].y + (pts[i+1].y - pts[i].y) * f };
    }
    rem -= lens[i];
  }
  return pts[pts.length - 1];
}

/*
  ════════════════════════════════════════════════════════════════════
  WIRE ROUTING — matches the hand-drawn diagram exactly
  ════════════════════════════════════════════════════════════════════

  TOP ROW  (cards exit from their BOTTOM edge, enter chip TOP pins):
  ─────────────────────────────────────────────────────────────────
  Card 0 (AI, far-left):
    → drops a little down from card bottom
    → jogs LEFT to a margin beyond left edge of all cards
    → drops straight down (long vertical run on the far-left)
    → turns RIGHT at mid-gap level
    → arrives at pin-0 (leftmost top pin) from the left
    Route: cardBottom → (cardCx, cardY+drop) → (leftMargin, cardY+drop)
            → (leftMargin, pinY-offset) → (pinX, pinY-offset) → (pinX, pinY)

  Card 1 (Web Dev):
    → drops straight down, slight horizontal jog, into pin-2
    Simple Z: cardBottom → midY → pinX,midY → pinX,pinY

  Card 2 (App Dev):
    → drops straight down, slight horizontal jog, into pin-4
    Simple Z: cardBottom → midY → pinX,midY → pinX,pinY

  Card 3 (Software Dev, far-right):
    → mirrors Card 0 but on the right side
    Route: cardBottom → (cardCx, cardY+drop) → (rightMargin, cardY+drop)
            → (rightMargin, pinY-offset) → (pinX, pinY-offset) → (pinX, pinY)

  BOTTOM ROW  (cards exit from their TOP edge, enter chip BOTTOM pins):
  ─────────────────────────────────────────────────────────────────
  Mirror of top row — exactly the same logic flipped vertically.
  ════════════════════════════════════════════════════════════════════
*/

/* ═══════════════ MAIN ═══════════════ */
export default function OurServicesWithWires() {
  const containerRef = useRef(null);
  const canvasRef    = useRef(null);
  const chipRef      = useRef(null);
  const boxRefs      = useRef([]);
  const pinRefs      = useRef([]);
  const rafRef       = useRef(null);
  const roRef        = useRef(null);
  const [, setReady] = useState(false);

  const { ref: sectionRef, inView } = useInView({ threshold: 0.15, triggerOnce: true });
  const topCtrl = useAnimation(), botCtrl = useAnimation();

  useEffect(() => {
    if (inView) {
      topCtrl.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } });
      botCtrl.start({ opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.12 } });
    }
  }, [inView, topCtrl, botCtrl]);

  useEffect(() => {
    const canvas    = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r   = container.getBoundingClientRect();
      canvas.width  = Math.round(r.width  * dpr);
      canvas.height = Math.round(r.height * dpr);
      canvas.style.width  = `${r.width}px`;
      canvas.style.height = `${r.height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    roRef.current = new ResizeObserver(resize);
    roRef.current.observe(container);

    /*
      PIN SLOT ASSIGNMENTS
      ─────────────────────────────────────
      Top pins  (refs 0-6 , left→right):
        Card 0 → slot 0   Card 1 → slot 2
        Card 2 → slot 4   Card 3 → slot 6

      Bottom pins (refs 7-13, left→right):
        Card 4 → slot 0   Card 5 → slot 2
        Card 6 → slot 4   Card 7 → slot 6
    */
    const TOP_PIN_SLOTS    = [0, 2, 4, 6];
    const BOTTOM_PIN_SLOTS = [0, 2, 4, 6];

    const buildPaths = () => {
      const cr = canvas.getBoundingClientRect();
      const paths = [];

      // ── Collect all card and pin positions ──
      const getRect = (el) => {
        if (!el) return null;
        const r = el.getBoundingClientRect();
        return {
          top:    r.top    - cr.top,
          bottom: r.bottom - cr.top,
          left:   r.left   - cr.left,
          right:  r.right  - cr.left,
          cx:     r.left   - cr.left + r.width  / 2,
          cy:     r.top    - cr.top  + r.height / 2,
          width:  r.width,
          height: r.height,
        };
      };

      // Pre-compute all card rects and pin rects
      const topCards = TOP_SERVICES.map((_, i) => getRect(boxRefs.current[i]));
      const botCards = BOTTOM_SERVICES.map((_, i) => getRect(boxRefs.current[i + 4]));
      const topPins  = TOP_PIN_SLOTS.map(s => getRect(pinRefs.current[s]));
      const botPins  = BOTTOM_PIN_SLOTS.map(s => getRect(pinRefs.current[7 + s]));

      // ── Compute routing margins ──
      // For outer cards we route OUTSIDE the card row — find the leftmost and rightmost extent
      const allCardsLeft  = Math.min(...topCards.filter(Boolean).map(r => r.left),
                                     ...botCards.filter(Boolean).map(r => r.left));
      const allCardsRight = Math.max(...topCards.filter(Boolean).map(r => r.right),
                                     ...botCards.filter(Boolean).map(r => r.right));

      // Outer routing margin: 32px beyond the outermost card edge
      const OUTER_MARGIN = 0;
      const leftRail  = allCardsLeft  - OUTER_MARGIN;
      const rightRail = allCardsRight + OUTER_MARGIN;

      // For inner cards (i=1,2) we use a simple Z routing with staggered midY bands
      // that sit in the gap between cards and chip, guaranteed non-overlapping.

      // ── TOP ROW ──
      // Compute the vertical gap between bottom of top cards and top of chip pins
      const topCardBottoms = topCards.filter(Boolean).map(r => r.bottom);
      const topPinTops     = topPins.filter(Boolean).map(r => r.top);
      const topGapTop      = Math.max(...topCardBottoms);
      const topGapBot      = Math.min(...topPinTops);
      const topGap         = Math.max(topGapBot - topGapTop, 60);

      for (let i = 0; i < 4; i++) {
        const card = topCards[i];
        const pin  = topPins[i];
        if (!card || !pin) continue;

        const svc    = TOP_SERVICES[i];
        const cardCx = card.cx;
        const cardY  = card.bottom;    // wire exits card bottom
        const pinX   = pin.cx;
        const pinY   = pin.top;        // wire enters chip pin from above

        let pts;

        if (i === 0) {
          // Far-left card: go left to outer rail, drop down, turn right to pin
          // Drop a little below card first so the horizontal exit is clear
          const exitY   = cardY + topGap * 0.12;   // small drop below card
          const cornerY = pinY - topGap * 0.12;    // rise level above pin entry
          pts = [
            { x: cardCx,   y: cardY    },   // card bottom centre
            { x: cardCx,   y: exitY    },   // short drop
            { x: leftRail, y: exitY    },   // run left to outer rail
            { x: leftRail, y: cornerY  },   // drop down outside everything
            { x: pinX,     y: cornerY  },   // run right to pin column
            { x: pinX,     y: pinY     },   // enter pin
          ];
        } else if (i === 3) {
          // Far-right card: mirror of i=0
          const exitY   = cardY + topGap * 0.12;
          const cornerY = pinY - topGap * 0.12;
          pts = [
            { x: cardCx,    y: cardY    },
            { x: cardCx,    y: exitY    },
            { x: rightRail, y: exitY    },
            { x: rightRail, y: cornerY  },
            { x: pinX,      y: cornerY  },
            { x: pinX,      y: pinY     },
          ];
        } else {
          // Inner cards (i=1 Web Dev, i=2 App Dev): simple Z with staggered midY
          // i=1 → midY closer to pin (25% from top of gap)
          // i=2 → midY closer to card (75% from top of gap)
          // (these two are symmetric and never share a Y level)
          const frac = i === 1 ? 0.35 : 0.65;
          const midY = topGapTop + topGap * frac;
          pts = [
            { x: cardCx, y: cardY },
            { x: cardCx, y: midY  },
            { x: pinX,   y: midY  },
            { x: pinX,   y: pinY  },
          ];
        }

        paths.push({ pts: pts.slice().reverse(), rgb: svc.rgb, pinPt: { x: pinX, y: pinY }, cardPt: { x: cardCx, y: cardY } });
      }

      // ── BOTTOM ROW (exact vertical mirror of top) ──
      const botCardTops = botCards.filter(Boolean).map(r => r.top);
      const botPinBots  = botPins.filter(Boolean).map(r => r.bottom);
      const botGapTop   = Math.max(...botPinBots);
      const botGapBot   = Math.min(...botCardTops);
      const botGap      = Math.max(botGapBot - botGapTop, 60);

      for (let i = 0; i < 4; i++) {
        const card = botCards[i];
        const pin  = botPins[i];
        if (!card || !pin) continue;

        const svc    = BOTTOM_SERVICES[i];
        const cardCx = card.cx;
        const cardY  = card.top;       // wire exits card top
        const pinX   = pin.cx;
        const pinY   = pin.bottom;     // wire enters chip pin from below

        let pts;

        if (i === 0) {
          // Far-left card: go left to outer rail, rise up, turn right to pin
          const exitY   = cardY - botGap * 0.12;   // small rise above card
          const cornerY = pinY + botGap * 0.12;    // drop level below pin exit
          pts = [
            { x: cardCx,   y: cardY    },
            { x: cardCx,   y: exitY    },
            { x: leftRail, y: exitY    },
            { x: leftRail, y: cornerY  },
            { x: pinX,     y: cornerY  },
            { x: pinX,     y: pinY     },
          ];
        } else if (i === 3) {
          // Far-right card: mirror of i=0
          const exitY   = cardY - botGap * 0.12;
          const cornerY = pinY + botGap * 0.12;
          pts = [
            { x: cardCx,    y: cardY    },
            { x: cardCx,    y: exitY    },
            { x: rightRail, y: exitY    },
            { x: rightRail, y: cornerY  },
            { x: pinX,      y: cornerY  },
            { x: pinX,      y: pinY     },
          ];
        } else {
          // Inner cards: simple Z with staggered midY
          const frac = i === 1 ? 0.65 : 0.35;
          const midY = botGapTop + botGap * frac;
          pts = [
            { x: cardCx, y: cardY },
            { x: cardCx, y: midY  },
            { x: pinX,   y: midY  },
            { x: pinX,   y: pinY  },
          ];
        }

        paths.push({ pts: pts.slice().reverse(), rgb: svc.rgb, pinPt: { x: pinX, y: pinY }, cardPt: { x: cardCx, y: cardY } });
      }

      // ── IDLE PINS ──
      const usedTopSlots    = new Set(TOP_PIN_SLOTS);
      const usedBottomSlots = new Set(BOTTOM_PIN_SLOTS);
      const idlePins = [];

      for (let s = 0; s < 7; s++) {
        if (!usedTopSlots.has(s)) {
          const el = pinRefs.current[s];
          if (el) {
            const r = el.getBoundingClientRect();
            idlePins.push({ x: r.left + r.width / 2 - cr.left, y: r.top - cr.top });
          }
        }
        if (!usedBottomSlots.has(s)) {
          const el = pinRefs.current[7 + s];
          if (el) {
            const r = el.getBoundingClientRect();
            idlePins.push({ x: r.left + r.width / 2 - cr.left, y: r.bottom - cr.top });
          }
        }
      }

      for (let s = 14; s < 20; s++) {
        const el = pinRefs.current[s];
        if (el) {
          const r = el.getBoundingClientRect();
          const isLeft = s < 17;
          idlePins.push({
            x: isLeft ? r.left - cr.left : r.right - cr.left,
            y: r.top + r.height / 2 - cr.top,
          });
        }
      }

      return { paths, idlePins };
    };

    let lastTs = 0, tG = 0;

    const draw = (ts) => {
      ctx.clearRect(0, 0, 99999, 99999);
      ctx.save();

      tG += (ts - lastTs) * 0.00042;
      if (tG > 1) tG -= 1;
      lastTs = ts;

      const { paths, idlePins } = buildPaths();

      /* 1 ── BASE WIRE (dim static trace) */
      paths.forEach(({ pts }) => {
        ctx.beginPath();
        ctx.moveTo(pts[0].x, pts[0].y);
        pts.slice(1).forEach(p => ctx.lineTo(p.x, p.y));
        ctx.strokeStyle = "rgba(65,78,108,0.32)";
        ctx.lineWidth   = 1.5;
        ctx.lineJoin    = "miter";
        ctx.lineCap     = "square";
        ctx.stroke();
      });

      /* 2 ── ANIMATED PULSE */
      paths.forEach(({ pts, rgb }, idx) => {
        const [r, g, b] = rgb;
        const head     = (tG + idx * 0.115) % 1;
        const trailLen = 0.22;
        const tail     = Math.max(0, head - trailLen);
        const STEPS    = 52;

        for (let i = 0; i < STEPS; i++) {
          const tA  = tail + (i / STEPS)       * (head - tail);
          const tB  = tail + ((i + 1) / STEPS) * (head - tail);
          const pA  = ptOnLine(pts, tA);
          const pB  = ptOnLine(pts, tB);
          const alpha = (i / STEPS) * 0.95;
          ctx.beginPath();
          ctx.moveTo(pA.x, pA.y);
          ctx.lineTo(pB.x, pB.y);
          ctx.strokeStyle = `rgba(${r},${g},${b},${alpha})`;
          ctx.lineWidth   = 2.4;
          ctx.lineCap     = "round";
          ctx.stroke();
        }
      });

      /* 3 ── PIN-END GLOW (chip side) */
      paths.forEach(({ pinPt, rgb }) => {
        const [r, g, b] = rgb;
        const { x, y }  = pinPt;
        const pulse = (Math.sin(ts * 0.003 + x * 0.04) + 1) / 2;
        const a     = 0.5 + pulse * 0.5;

        ctx.beginPath(); ctx.arc(x, y, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`; ctx.fill();

        const pg = ctx.createRadialGradient(x, y, 0, x, y, 14);
        pg.addColorStop(0, `rgba(${r},${g},${b},${a * 0.7})`);
        pg.addColorStop(1, `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = pg;
        ctx.beginPath(); ctx.arc(x, y, 14, 0, Math.PI * 2); ctx.fill();
      });

      /* 4 ── CARD-END JUNCTION GLOW */
      paths.forEach(({ cardPt, rgb }) => {
        const [r, g, b] = rgb;
        const { x, y }  = cardPt;
        const pulse = (Math.sin(ts * 0.0025 + x * 0.035) + 1) / 2;
        const a     = 0.55 + pulse * 0.45;

        ctx.beginPath(); ctx.arc(x, y, 3.4, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},${a})`; ctx.fill();

        ctx.beginPath(); ctx.arc(x, y, 6.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${r},${g},${b},${a * 0.38})`;
        ctx.lineWidth = 1.1; ctx.stroke();

        const jg = ctx.createRadialGradient(x, y, 0, x, y, 22);
        jg.addColorStop(0,   `rgba(${r},${g},${b},${a * 0.45})`);
        jg.addColorStop(0.4, `rgba(${r},${g},${b},${a * 0.14})`);
        jg.addColorStop(1,   `rgba(${r},${g},${b},0)`);
        ctx.fillStyle = jg;
        ctx.beginPath(); ctx.arc(x, y, 22, 0, Math.PI * 2); ctx.fill();
      });

      /* 5 ── IDLE PIN GLOW */
      idlePins.forEach(({ x, y }) => {
        const pulse = (Math.sin(ts * 0.004 + x * 0.024 + y * 0.018) + 1) / 2;
        const a     = 0.18 + pulse * 0.52;
        const rad   = 2.1 + pulse * 1.6;
        ctx.beginPath(); ctx.arc(x, y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,210,255,${a})`; ctx.fill();
        ctx.beginPath(); ctx.arc(x, y, rad + 3.5, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,200,255,${a * 0.28})`;
        ctx.lineWidth = 0.8; ctx.stroke();
      });

      ctx.restore();
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(ts => { lastTs = ts; draw(ts); setReady(true); });

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (roRef.current)  roRef.current.disconnect();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pinRef = (i) => (el) => { pinRefs.current[i] = el; };

  return (
    <section
      ref={containerRef}
      className="relative z-0 w-full overflow-hidden bg-[#030508]"
      style={{ paddingTop: "72px", paddingBottom: "72px" }}
    >
      <Pattern />

      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 65% 50% at 50% 50%,rgba(6,182,212,0.07) 0%,transparent 65%)"
      }} />

      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }} aria-hidden />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Heading */}
        <div ref={sectionRef} className="text-center mb-12">
          <h2
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
            style={{ fontFamily: "'Syne','DM Sans',sans-serif" }}
          >
            Our{" "}
            <span style={{
              background: "linear-gradient(120deg,#22d3ee 0%,#818cf8 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"
            }}>
              Services
            </span>
          </h2>
          <p className="mt-2 text-xs tracking-[0.22em] uppercase text-gray-500">
            Everything your business needs to grow
          </p>
        </div>

        {/* TOP ROW */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: -50 }}
          animate={topCtrl}
          style={{ marginBottom: "72px" }}
        >
          {TOP_SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} refCallback={el => { boxRefs.current[i] = el; }} />
          ))}
        </motion.div>

        {/* ── CHIP ── */}
        <div className="flex justify-center" style={{ marginBottom: "72px" }}>
          <div
            ref={chipRef}
            className="relative flex items-center justify-center overflow-visible"
            style={{
              width: "300px", height: "88px", borderRadius: "10px",
              background: "linear-gradient(150deg,#1a1a1a 0%,#0d0d0d 100%)",
              border: "1px solid #272727",
              boxShadow: "0 0 0 1px rgba(255,255,255,0.04) inset,0 28px 64px rgba(0,0,0,0.92)",
            }}
          >
            {/* TOP 7 PINS */}
            <div className="absolute -top-[26px] left-1/2 -translate-x-1/2 flex justify-between w-[80%]">
              {Array(7).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col items-center">
                  <div className="w-[2px] h-[13px] bg-gradient-to-b from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(i)}
                    className="w-[9px] h-[9px] bg-gradient-to-b from-[#d0d0d0] via-[#888] to-[#555] rounded-b-sm"
                  />
                </div>
              ))}
            </div>

            {/* BOTTOM 7 PINS */}
            <div className="absolute -bottom-[26px] left-1/2 -translate-x-1/2 flex justify-between w-[80%]">
              {Array(7).fill(0).map((_, i) => (
                <div key={i} className="flex flex-col-reverse items-center">
                  <div className="w-[2px] h-[13px] bg-gradient-to-t from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(7 + i)}
                    className="w-[9px] h-[9px] bg-gradient-to-t from-[#d0d0d0] via-[#888] to-[#555] rounded-t-sm"
                  />
                </div>
              ))}
            </div>

            {/* LEFT 3 PINS */}
            <div className="absolute -left-[24px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[58px]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-[13px] h-[2px] bg-gradient-to-r from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(14 + i)}
                    className="w-[9px] h-[9px] bg-gradient-to-r from-[#d0d0d0] via-[#888] to-[#555] rounded-r-sm"
                  />
                </div>
              ))}
            </div>

            {/* RIGHT 3 PINS */}
            <div className="absolute -right-[24px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[58px]">
              {Array(3).fill(0).map((_, i) => (
                <div key={i} className="flex flex-row-reverse items-center">
                  <div className="w-[13px] h-[2px] bg-gradient-to-l from-[#2a2a2a] via-[#777] to-[#00d8ff] opacity-75" />
                  <div
                    ref={pinRef(17 + i)}
                    className="w-[9px] h-[9px] bg-gradient-to-l from-[#d0d0d0] via-[#888] to-[#555] rounded-l-sm"
                  />
                </div>
              ))}
            </div>

            {/* inner glow */}
            <div className="absolute inset-0 rounded-[10px] pointer-events-none" style={{
              background: "radial-gradient(circle at 50% 50%,rgba(0,210,255,0.12) 0%,transparent 68%)",
              animation: "chipPulse 2.6s ease-in-out infinite",
            }} />

            {/* corner marks */}
            <div className="absolute top-[6px]    left-[6px]  w-3 h-3 border-t border-l border-cyan-900/40" />
            <div className="absolute top-[6px]    right-[6px] w-3 h-3 border-t border-r border-cyan-900/40" />
            <div className="absolute bottom-[6px] left-[6px]  w-3 h-3 border-b border-l border-cyan-900/40" />
            <div className="absolute bottom-[6px] right-[6px] w-3 h-3 border-b border-r border-cyan-900/40" />

            <span className="relative z-10 font-bold tracking-wide select-none" style={{
              fontSize: "15px", color: "#67e8f9",
              fontFamily: "'Syne',monospace", letterSpacing: "0.07em",
            }}>
              Cyberspace Works
            </span>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 50 }}
          animate={botCtrl}
        >
          {BOTTOM_SERVICES.map((svc, i) => (
            <ServiceCard key={svc.title} service={svc} refCallback={el => { boxRefs.current[i + 4] = el; }} />
          ))}
        </motion.div>

      </div>

      <style>{`
        @keyframes chipPulse {
          0%,100% { opacity: 0.55 }
          50%      { opacity: 1    }
        }
      `}</style>
    </section>
  );
}