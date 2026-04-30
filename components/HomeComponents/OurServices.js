
// // "use client";
// // import React, { useEffect, useRef, useState } from "react";
// // import styled from 'styled-components';
// // import { motion, useAnimation } from "framer-motion";
// // import { useInView } from "react-intersection-observer";
// // import {
// //   FaLaptopCode,
// //   FaMobileAlt,
// //   FaCode,
// //   FaPalette,
// //   FaBullhorn,
// //   FaBrush,
// //   FaBrain,
// // } from "react-icons/fa";
// // import { SiGoogleanalytics } from "react-icons/si";


// // const Pattern = () => <StyledPattern />;

// // const StyledPattern = styled.div`
// //   position: absolute;
// //   inset: 0;
// //   width: 100%;
// //   height: 100%;
// //   pointer-events: none;
// //   z-index: 0;
// //   background-color: #000;
// //   background-image: radial-gradient(rgba(103, 232, 249, 0.4) 10%, transparent 10%);
// //   background-size: 11px 11px;
// //   opacity: 0.5;

// //   mask-image: linear-gradient(
// //     to bottom,
// //     transparent 0%,
// //     black 20%,
// //     black 80%,
// //     transparent 100%
// //   );
// //   mask-size: 100% 100%;
// //   mask-repeat: no-repeat;

// //   -webkit-mask-image: linear-gradient(
// //     to bottom,
// //     transparent 0%,
// //     black 20%,
// //     black 80%,
// //     transparent 100%
// //   );
// //   -webkit-mask-size: 100% 100%;
// //   -webkit-mask-repeat: no-repeat;
// // `;

// // export default function OurServicesWithWires() {
// //   const canvasRef = useRef(null);
// //   const containerRef = useRef(null);
// //   const chipRef = useRef(null);
// //   const boxRefs = useRef([]);
// //   const rafRef = useRef(null);
// //   const resizeObserverRef = useRef(null);

// //   const [ready, setReady] = useState(false);

// //   const { ref: sectionRef, inView } = useInView({
// //     threshold: 0.3,
// //     triggerOnce: true,
// //   });

// //   const topControls = useAnimation();
// //   const bottomControls = useAnimation();

// //   useEffect(() => {
// //     if (inView) {
// //       topControls.start({
// //         opacity: 1,
// //         y: 0,
// //         transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
// //       });
// //       bottomControls.start({
// //         opacity: 1,
// //         y: 0,
// //         transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
// //       });
// //     }
// //   }, [inView, topControls, bottomControls]);

// //   // ✅ AI & Intelligent Systems is now FIRST (index 0)
// //   const services = [
// //     {
// //       icon: <FaBrain size={38} />,
// //       title: "AI & Intelligent Systems",
// //       desc: "Unlock AI power through intelligent automation, machine learning, and large language models.",
// //     },
// //     {
// //       icon: <FaLaptopCode size={38} />,
// //       title: "Web Development",
// //       desc: "Crafting responsive and dynamic websites tailored to your needs.",
// //     },
// //     {
// //       icon: <FaMobileAlt size={38} />,
// //       title: "App Development",
// //       desc: "Building innovative and user-friendly mobile applications.",
// //     },
// //     {
// //       icon: <FaCode size={38} />,
// //       title: "Software Development",
// //       desc: "Custom software solutions to optimize your business processes.",
// //     },
// //     {
// //       icon: <FaPalette size={38} />,
// //       title: "UI/UX Design",
// //       desc: "Creating intuitive and visually appealing user interfaces.",
// //     },
// //     {
// //       icon: <FaBullhorn size={38} />,
// //       title: "Digital Marketing",
// //       desc: "Boost your online presence with targeted marketing strategies.",
// //     },
// //     {
// //       icon: <FaBrush size={38} />,
// //       title: "Graphic Design",
// //       desc: "Designing stunning visuals to enhance your brand identity.",
// //     },
// //     {
// //       icon: <SiGoogleanalytics size={38} />,
// //       title: "Research and Analytics",
// //       desc: "We help businesses make sharper, faster decisions.",
// //     },
// //   ];

// //   const getElementCenterRelativeToCanvas = (elem, canvas) => {
// //     const cRect = canvas.getBoundingClientRect();
// //     const r = elem.getBoundingClientRect();
// //     return {
// //       x: r.left + r.width / 2 - cRect.left,
// //       y: r.top + r.height / 2 - cRect.top,
// //     };
// //   };

// //   useEffect(() => {
// //     boxRefs.current = boxRefs.current.slice(0, services.length);

// //     const canvas = canvasRef.current;
// //     const container = containerRef.current;
// //     const chipEl = chipRef.current;
// //     if (!canvas || !container || !chipEl) return;

// //     const ctx = canvas.getContext("2d");

// //     // ✅ 8 colors — AI (violet) is first
// //     const boxColors = [
// //       [139, 92, 246],  // AI: violet-500
// //       [14, 116, 144],  // Web Development: cyan-700
// //       [21, 128, 61],   // App Development: green-700
// //       [4, 120, 87],    // Software Development: emerald-700
// //       [15, 118, 110],  // UI/UX Design: teal-700
// //       [3, 105, 161],   // Digital Marketing: sky-700
// //       [29, 78, 216],   // Graphic Design: blue-700
// //       [67, 56, 202],   // Research and Analytics: indigo-700
// //     ];

// //     const cableColor = [55, 65, 81];
// //     const cableGlowColor = [40, 50, 66];

// //     const setCanvasSize = () => {
// //       const dpr = Math.min(window.devicePixelRatio || 1, 2);
// //       const rect = container.getBoundingClientRect();
// //       canvas.width = Math.round(rect.width * dpr);
// //       canvas.height = Math.round(rect.height * dpr);
// //       canvas.style.width = `${rect.width}px`;
// //       canvas.style.height = `${rect.height}px`;
// //       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
// //     };

// //     setCanvasSize();

// //     resizeObserverRef.current = new ResizeObserver(() => {
// //       setCanvasSize();
// //     });
// //     resizeObserverRef.current.observe(container);

// //     const computeLayout = () => {
// //       const canvasRect = canvas.getBoundingClientRect();
// //       const chipRect = chipEl.getBoundingClientRect();

// //       const chipCenter = {
// //         x: chipRect.left + chipRect.width / 2 - canvasRect.left,
// //         y: chipRect.top + chipRect.height / 2 - canvasRect.top,
// //       };

// //       const topCount = 7;
// //       const bottomCount = 7;
// //       const leftCount = 3;
// //       const rightCount = 3;

// //       const chipVisualW = Math.max(180, chipRect.width);
// //       const chipVisualH = Math.max(70, chipRect.height);

// //       const hSpan = chipVisualW * 0.84;

// //       const topPins = Array.from({ length: topCount }, (_, i) => {
// //         const t = topCount === 1 ? 0.5 : i / (topCount - 1);
// //         return {
// //           x: chipCenter.x - hSpan / 2 + t * hSpan,
// //           y: chipCenter.y - chipVisualH / 2 - 10,
// //         };
// //       });

// //       const bottomPins = Array.from({ length: bottomCount }, (_, i) => {
// //         const t = bottomCount === 1 ? 0.5 : i / (bottomCount - 1);
// //         return {
// //           x: chipCenter.x - hSpan / 2 + t * hSpan,
// //           y: chipCenter.y + chipVisualH / 2 + 10,
// //         };
// //       });

// //       const vSpan = chipVisualH * 0.6;
// //       const leftPins = Array.from({ length: leftCount }, (_, i) => {
// //         const t = leftCount === 1 ? 0.5 : i / (leftCount - 1);
// //         return {
// //           x: chipCenter.x - chipVisualW / 2 - 10,
// //           y: chipCenter.y - vSpan / 2 + t * vSpan,
// //         };
// //       });
// //       const rightPins = Array.from({ length: rightCount }, (_, i) => {
// //         const t = rightCount === 1 ? 0.5 : i / (rightCount - 1);
// //         return {
// //           x: chipCenter.x + chipVisualW / 2 + 10,
// //           y: chipCenter.y - vSpan / 2 + t * vSpan,
// //         };
// //       });

// //       const pins = { top: topPins, bottom: bottomPins, left: leftPins, right: rightPins };

// //       const dests = services.map((_, idx) => {
// //         const boxEl = boxRefs.current[idx];
// //         if (!boxEl) return null;
// //         const center = getElementCenterRelativeToCanvas(boxEl, canvas);
// //         return center;
// //       });

// //       // ✅ Updated connections: 4 top pins → first 4 services, 4 bottom pins → last 4 services
// //       const connections = [
// //         { pin: pins.top[0], to: dests[0] }, // top-0 → AI & Intelligent Systems
// //         { pin: pins.top[2], to: dests[1] }, // top-2 → Web Development
// //         { pin: pins.top[4], to: dests[2] }, // top-4 → App Development
// //         { pin: pins.top[6], to: dests[3] }, // top-6 → Software Development
// //         { pin: pins.bottom[0], to: dests[4] }, // bottom-0 → UI/UX Design
// //         { pin: pins.bottom[2], to: dests[5] }, // bottom-2 → Digital Marketing
// //         { pin: pins.bottom[4], to: dests[6] }, // bottom-4 → Graphic Design
// //         { pin: pins.bottom[6], to: dests[7] }, // bottom-6 → Research and Analytics
// //       ];

// //       const validPaths = connections
// //         .filter((c) => c.pin && c.to)
// //         .map((c) => {
// //           const from = { x: c.pin.x, y: c.pin.y };
// //           const to = { x: c.to.x, y: c.to.y };
// //           return { from, to, dist: Math.hypot(to.x - from.x, to.y - from.y) };
// //         });

// //       const connectedPins = connections.map((c) => c.pin);
// //       const allPins = [...pins.top, ...pins.bottom, ...pins.left, ...pins.right];
// //       const unconnected = allPins.filter(
// //         (pin) => !connectedPins.some((cp) => cp && cp.x === pin.x && cp.y === pin.y)
// //       );

// //       return { canvasRect, chipCenter, pins, paths: validPaths, unconnected };
// //     };

// //     const cubicAt = (t, p0, p1, p2, p3) => {
// //       const u = 1 - t;
// //       const tt = t * t;
// //       const uu = u * u;
// //       const uuu = uu * u;
// //       const ttt = tt * t;
// //       const x = uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x;
// //       const y = uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y;
// //       return { x, y };
// //     };

// //     const makeControlPoints = (from, to) => {
// //       const dx = to.x - from.x;
// //       const dy = to.y - from.y;
// //       const d = Math.hypot(dx, dy);
// //       const common = Math.min(160, d * 0.35);
// //       const horizBias = Math.abs(dx) > Math.abs(dy);
// //       const signX = dx >= 0 ? 1 : -1;
// //       const signY = dy >= 0 ? 1 : -1;

// //       const cp1 = {
// //         x: from.x + (horizBias ? dx * 0.25 : -signX * common * 0.4),
// //         y: from.y + (horizBias ? signY * common * 0.18 : dy * 0.25),
// //       };
// //       const cp2 = {
// //         x: from.x + (horizBias ? dx * 0.75 : signX * common * 0.4),
// //         y: from.y + (horizBias ? dy * 0.75 : dy * 0.75 + signY * common * 0.18),
// //       };
// //       return [cp1, cp2];
// //     };

// //     let lastTs = 0;
// //     let tProgress = 0;

// //     const drawFrame = (ts) => {
// //       if (!canvas) return;
// //       const ctx = canvas.getContext("2d");
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       ctx.save();

// //       const w = canvas.width;
// //       const h = canvas.height;
// //       const grd = ctx.createRadialGradient(w / 2, h / 2, 10, w / 2, h / 2, Math.max(w, h) * 0.6);
// //       grd.addColorStop(0, "rgba(0,40,40,0.06)");
// //       grd.addColorStop(1, "rgba(0,0,0,0)");
// //       ctx.fillStyle = grd;
// //       ctx.fillRect(0, 0, w, h);

// //       const layout = computeLayout();
// //       const paths = layout.paths;

// //       paths.forEach((p, idx) => {
// //         const [r, g, b] = boxColors[idx];
// //         const from = p.from;
// //         const to = p.to;
// //         const [cp1, cp2] = makeControlPoints(from, to);
// //         const segments = 120;
// //         for (let i = 0; i < segments; i++) {
// //           const t1 = i / segments;
// //           const t2 = (i + 1) / segments;
// //           const pt1 = cubicAt(t1, from, cp1, cp2, to);
// //           const pt2 = cubicAt(t2, from, cp1, cp2, to);

// //           const fade = Math.pow(1 - t1, 1.8);
// //           const alpha = 0.22 * fade + 0.05;
// //           ctx.lineWidth = 1.6 + 2.2 * fade;
// //           ctx.lineCap = "round";

// //           ctx.strokeStyle = `rgba(${cableColor[0]},${cableColor[1]},${cableColor[2]},${alpha})`;
// //           ctx.beginPath();
// //           ctx.moveTo(pt1.x, pt1.y);
// //           ctx.lineTo(pt2.x, pt2.y);
// //           ctx.stroke();
// //         }

// //         ctx.lineWidth = 0.8;
// //         ctx.beginPath();
// //         for (let i = 0; i <= segments; i++) {
// //           const t = i / segments;
// //           const q = cubicAt(t, from, cp1, cp2, to);
// //           if (i === 0) ctx.moveTo(q.x, q.y);
// //           else ctx.lineTo(q.x, q.y);
// //         }
// //         ctx.strokeStyle = `rgba(${cableGlowColor[0]},${cableGlowColor[1]},${cableGlowColor[2]},0.12)`;
// //         ctx.stroke();

// //         ctx.beginPath();
// //         ctx.fillStyle = `rgba(${cableColor[0]},${cableColor[1]},${cableColor[2]},0.72)`;
// //         ctx.arc(from.x, from.y, 3.2, 0, Math.PI * 2);
// //         ctx.fill();
// //         ctx.beginPath();
// //         ctx.arc(to.x, to.y, 3.2, 0, Math.PI * 2);
// //         ctx.fill();
// //       });

// //       tProgress += (ts - lastTs) * 0.0006;
// //       if (tProgress > 1) tProgress -= 1;
// //       lastTs = ts;

// //       paths.forEach((p, idx) => {
// //         const [r, g, b] = boxColors[idx];
// //         const from = p.from;
// //         const to = p.to;
// //         const [cp1, cp2] = makeControlPoints(from, to);
// //         const pulses = 1;
// //         for (let pi = 0; pi < pulses; pi++) {
// //           const offset = (idx / Math.max(1, paths.length)) * 0.45;
// //           const t0 = (tProgress + offset + pi * 0.12) % 1;
// //           const pt = cubicAt(t0, from, cp1, cp2, to);
// //           ctx.beginPath();
// //           ctx.fillStyle = `rgba(${r},${g},${b},0.95)`;
// //           ctx.arc(pt.x, pt.y, 3.6, 0, Math.PI * 2);
// //           ctx.fill();

// //           ctx.beginPath();
// //           ctx.fillStyle = `rgba(${r},${g},${b},0.14)`;
// //           ctx.arc(pt.x, pt.y, 8, 0, Math.PI * 2);
// //           ctx.fill();
// //         }
// //       });

// //       layout.unconnected.forEach((pin) => {
// //         const pulse = (Math.sin(ts * 0.004 + (pin.x + pin.y) * 0.001) + 1) / 2;
// //         const alpha = 0.28 + pulse * 0.42;
// //         const r = 3.8 + pulse * 1.6;
// //         ctx.beginPath();
// //         ctx.fillStyle = `rgba(0,255,255,${alpha})`;
// //         ctx.arc(pin.x, pin.y, r, 0, Math.PI * 2);
// //         ctx.fill();

// //         ctx.beginPath();
// //         ctx.strokeStyle = `rgba(0,200,255,${0.25 + pulse * 0.25})`;
// //         ctx.lineWidth = 1;
// //         ctx.arc(pin.x, pin.y, r + 3, 0, Math.PI * 2);
// //         ctx.stroke();
// //       });

// //       ctx.restore();
// //       rafRef.current = requestAnimationFrame(drawFrame);
// //     };

// //     rafRef.current = requestAnimationFrame((ts) => {
// //       lastTs = ts;
// //       drawFrame(ts);
// //       setReady(true);
// //     });

// //     return () => {
// //       if (rafRef.current) cancelAnimationFrame(rafRef.current);
// //       if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
// //     };
// //     // eslint-disable-next-line react-hooks/exhaustive-deps
// //   }, []);

// //   return (
// //     <section
// //       ref={containerRef}
// //       className="relative z-0 py-16 bg-black w-full"
// //     >
// //       <Pattern />

// //       <canvas
// //         ref={canvasRef}
// //         className="absolute inset-0 w-full h-full pointer-events-none"
// //         aria-hidden
// //       />

// //       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
// //         <div className="w-[200px] h-[40px] rounded-full blur-[300px] bg-cyan-400 opacity-10" />
// //       </div>

// //       <div
// //         className="absolute inset-0 pointer-events-none"
// //         style={{
// //           background:
// //             "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.12), transparent 45%)",
// //         }}
// //       />

// //       <div className="relative text-center z-10">
// //         <div className="max-w-7xl mx-auto">
// //           <h2 className="text-4xl font-bold text-white mb-12 tracking-wide">
// //             Our <span className="text-cyan-400">Services</span>
// //           </h2>

// //           {/* ✅ Top row — 4 services: AI first, then Web, App, Software */}
// //           <motion.div
// //             ref={sectionRef}
// //             className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16"
// //             initial={{ opacity: 0, y: -80 }}
// //             animate={topControls}
// //           >
// //             {/* AI & Intelligent Systems — index 0 */}
// //             <div
// //               ref={(el) => (boxRefs.current[0] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(139,92,246,0.3),inset_0_0_15px_rgba(139,92,246,0.05)]">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #8B5CF6 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-violet-400 mb-2 z-10">
// //                   <FaBrain size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">AI & Intelligent Systems</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Unlock AI power through <br /> intelligent automation <br /> & machine learning.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Web Development — index 1 */}
// //             <div
// //               ref={(el) => (boxRefs.current[1] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(14,116,144,0.3),inset_0_0_15px_rgba(14,116,144,0.05)] animate-pulseShadow">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #0E7490 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #0E7490 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <FaLaptopCode size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">Web Development</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Crafting responsive and dynamic <br /> websites tailored
// //                 </p>
// //               </div>
// //             </div>

// //             {/* App Development — index 2 */}
// //             <div
// //               ref={(el) => (boxRefs.current[2] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(21,128,61,0.3),inset_0_0_15px_rgba(21,128,61,0.05)] animate-pulseShadowGreen">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #15803D 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #15803D 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <FaMobileAlt size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">App Development</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Building innovative and <br /> user-friendly mobile <br /> applications.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Software Development — index 3 */}
// //             <div
// //               ref={(el) => (boxRefs.current[3] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(4,120,87,0.3),inset_0_0_15px_rgba(4,120,87,0.05)] animate-pulseShadowEmerald">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #047857 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #047857 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <FaCode size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">Software Development</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Custom software solutions to <br /> optimize your business <br /> processes.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>

// //           {/* Chip */}
// //           <div className="flex items-center justify-center relative my-6">
// //             <div
// //               ref={chipRef}
// //               className="relative w-[300px] h-[92px] bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] rounded-lg border border-[#222] shadow-[0_18px_60px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-visible"
// //             >
// //               <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
// //                 {Array(7).fill().map((_, idx) => (
// //                   <div key={idx} className="flex flex-col items-center">
// //                     <div className="w-[2px] h-[14px] bg-gradient-to-b from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
// //                     <div className="w-[10px] h-[12px] bg-gradient-to-b from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-b-[3px]" />
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
// //                 {Array(7).fill().map((_, idx) => (
// //                   <div key={idx} className="flex flex-col items-center">
// //                     <div className="w-[10px] h-[12px] bg-gradient-to-t from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-t-[3px]" />
// //                     <div className="w-[2px] h-[14px] bg-gradient-to-t from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
// //                 {Array(3).fill().map((_, idx) => (
// //                   <div key={idx} className="flex items-center">
// //                     <div className="w-[14px] h-[2px] bg-gradient-to-r from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
// //                     <div className="w-[12px] h-[10px] bg-gradient-to-r from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-r-[3px]" />
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="absolute -right-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
// //                 {Array(3).fill().map((_, idx) => (
// //                   <div key={idx} className="flex items-center">
// //                     <div className="w-[12px] h-[10px] bg-gradient-to-l from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-l-[3px]" />
// //                     <div className="w-[14px] h-[2px] bg-gradient-to-l from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
// //                   </div>
// //                 ))}
// //               </div>

// //               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg" />
// //               <div className="absolute inset-0 flex items-center justify-center text-cyan-300 text-lg font-semibold tracking-wide">
// //                 Cyberspace Works
// //               </div>
// //               <div className="absolute inset-0 pointer-events-none">
// //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] animate-pulse" />
// //               </div>
// //             </div>
// //           </div>

// //           {/* ✅ Bottom row — 4 services: UI/UX, Digital Marketing, Graphic Design, Research */}
// //           <motion.div
// //             className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16"
// //             initial={{ opacity: 0, y: 80 }}
// //             animate={bottomControls}
// //           >
// //             {/* UI/UX Design — index 4 */}
// //             <div
// //               ref={(el) => (boxRefs.current[4] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(15,118,110,0.3),inset_0_0_15px_rgba(15,118,110,0.05)] animate-pulseShadowTeal">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #0F766E 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #0F766E 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <FaPalette size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">UI/UX Design</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Creating intuitive and <br /> visually appealing user <br /> interfaces.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Digital Marketing — index 5 */}
// //             <div
// //               ref={(el) => (boxRefs.current[5] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(3,105,161,0.3),inset_0_0_15px_rgba(3,105,161,0.05)] animate-pulseShadowSky">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #0369A1 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #0369A1 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <FaBullhorn size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">Digital Marketing</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Boost your online presence <br /> with targeted marketing <br /> strategies.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Graphic Design — index 6 */}
// //             <div
// //               ref={(el) => (boxRefs.current[6] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(29,78,216,0.3),inset_0_0_15px_rgba(29,78,216,0.05)] animate-pulseShadowBlue">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #1D4ED8 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #1D4ED8 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <FaBrush size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">Graphic Design</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   Designing stunning visuals <br /> to enhance your <br /> brand identity.
// //                 </p>
// //               </div>
// //             </div>

// //             {/* Research and Analytics — index 7 */}
// //             <div
// //               ref={(el) => (boxRefs.current[7] = el)}
// //               className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
// //             >
// //               <div className="relative rounded-2xl p-6 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 shadow-[0_0_15px_rgba(67,56,202,0.3),inset_0_0_15px_rgba(67,56,202,0.05)] animate-pulseShadowIndigo">
// //                 <div
// //                   className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #4338CA 0%, transparent 100%)" }}
// //                 />
// //                 <div
// //                   className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40"
// //                   style={{ background: "radial-gradient(circle, #4338CA 0%, transparent 100%)" }}
// //                 />
// //                 <div className="text-cyan-400 mb-2 z-10">
// //                   <SiGoogleanalytics size={38} />
// //                 </div>
// //                 <h3 className="text-sm font-semibold text-white z-10">Research and Analytics</h3>
// //                 <p className="text-xs text-gray-400 mt-1 leading-tight z-10">
// //                   We help businesses<br /> make <br /> sharper, faster decisions.
// //                 </p>
// //               </div>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }



// "use client";
// import React, { useEffect, useRef, useState } from "react";
// import styled from 'styled-components';
// import { motion, useAnimation } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaLaptopCode,
//   FaMobileAlt,
//   FaCode,
//   FaPalette,
//   FaBullhorn,
//   FaBrush,
//   FaBrain,
// } from "react-icons/fa";
// import { SiGoogleanalytics } from "react-icons/si";


// const Pattern = () => <StyledPattern />;

// const StyledPattern = styled.div`
//   position: absolute;
//   inset: 0;
//   width: 100%;
//   height: 100%;
//   pointer-events: none;
//   z-index: 0;
//   background-color: #000;
//   background-image: radial-gradient(rgba(103, 232, 249, 0.4) 10%, transparent 10%);
//   background-size: 11px 11px;
//   opacity: 0.5;

//   mask-image: linear-gradient(
//     to bottom,
//     transparent 0%,
//     black 20%,
//     black 80%,
//     transparent 100%
//   );
//   mask-size: 100% 100%;
//   mask-repeat: no-repeat;

//   -webkit-mask-image: linear-gradient(
//     to bottom,
//     transparent 0%,
//     black 20%,
//     black 80%,
//     transparent 100%
//   );
//   -webkit-mask-size: 100% 100%;
//   -webkit-mask-repeat: no-repeat;
// `;

// export default function OurServicesWithWires() {
//   const canvasRef = useRef(null);
//   const containerRef = useRef(null);
//   const chipRef = useRef(null);
//   const boxRefs = useRef([]);
//   const rafRef = useRef(null);
//   const resizeObserverRef = useRef(null);

//   const [ready, setReady] = useState(false);

//   const { ref: sectionRef, inView } = useInView({
//     threshold: 0.3,
//     triggerOnce: true,
//   });

//   const topControls = useAnimation();
//   const bottomControls = useAnimation();

//   useEffect(() => {
//     if (inView) {
//       topControls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
//       });
//       bottomControls.start({
//         opacity: 1,
//         y: 0,
//         transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.15 },
//       });
//     }
//   }, [inView, topControls, bottomControls]);

//   const services = [
//     { icon: <FaBrain size={38} />, title: "AI & Intelligent Systems", desc: "Unlock AI power through intelligent automation, machine learning, and large language models." },
//     { icon: <FaLaptopCode size={38} />, title: "Web Development", desc: "Crafting responsive and dynamic websites tailored to your needs." },
//     { icon: <FaMobileAlt size={38} />, title: "App Development", desc: "Building innovative and user-friendly mobile applications." },
//     { icon: <FaCode size={38} />, title: "Software Development", desc: "Custom software solutions to optimize your business processes." },
//     { icon: <FaPalette size={38} />, title: "UI/UX Design", desc: "Creating intuitive and visually appealing user interfaces." },
//     { icon: <FaBullhorn size={38} />, title: "Digital Marketing", desc: "Boost your online presence with targeted marketing strategies." },
//     { icon: <FaBrush size={38} />, title: "Graphic Design", desc: "Designing stunning visuals to enhance your brand identity." },
//     { icon: <SiGoogleanalytics size={38} />, title: "Research and Analytics", desc: "We help businesses make sharper, faster decisions." },
//   ];

//   const getElementCenterRelativeToCanvas = (elem, canvas) => {
//     const cRect = canvas.getBoundingClientRect();
//     const r = elem.getBoundingClientRect();
//     return {
//       x: r.left + r.width / 2 - cRect.left,
//       y: r.top + r.height / 2 - cRect.top,
//     };
//   };

//   useEffect(() => {
//     boxRefs.current = boxRefs.current.slice(0, services.length);

//     const canvas = canvasRef.current;
//     const container = containerRef.current;
//     const chipEl = chipRef.current;
//     if (!canvas || !container || !chipEl) return;

//     const ctx = canvas.getContext("2d");

//     const boxColors = [
//       [139, 92, 246],
//       [14, 116, 144],
//       [21, 128, 61],
//       [4, 120, 87],
//       [15, 118, 110],
//       [3, 105, 161],
//       [29, 78, 216],
//       [67, 56, 202],
//     ];

//     const setCanvasSize = () => {
//       const dpr = Math.min(window.devicePixelRatio || 1, 2);
//       const rect = container.getBoundingClientRect();
//       canvas.width = Math.round(rect.width * dpr);
//       canvas.height = Math.round(rect.height * dpr);
//       canvas.style.width = `${rect.width}px`;
//       canvas.style.height = `${rect.height}px`;
//       ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
//     };

//     setCanvasSize();

//     resizeObserverRef.current = new ResizeObserver(() => { setCanvasSize(); });
//     resizeObserverRef.current.observe(container);

//     /**
//      * Build orthogonal (right-angle) path like PCB traces:
//      * Top pins: exit upward → horizontal → enter box from bottom
//      * Bottom pins: exit downward → horizontal → enter box from top
//      * Each path: [pin, elbow1, elbow2, dest]
//      */
//     const buildOrthogonalPath = (from, to, pinSide) => {
//       // Stagger the horizontal routing band based on index to avoid overlaps
//       const exitLen = pinSide === 'top' ? -38 : 38;
//       // elbow 1: move straight out from pin
//       const p1 = { x: from.x, y: from.y + exitLen };
//       // elbow 2: move horizontally to dest x
//       const p2 = { x: to.x, y: from.y + exitLen };
//       // dest
//       const p3 = { x: to.x, y: to.y };
//       return [from, p1, p2, p3];
//     };

//     /**
//      * Sample a point along a polyline at normalized t ∈ [0,1]
//      */
//     const samplePolyline = (pts, t) => {
//       let totalLen = 0;
//       const lens = [];
//       for (let i = 1; i < pts.length; i++) {
//         const d = Math.hypot(pts[i].x - pts[i - 1].x, pts[i].y - pts[i - 1].y);
//         lens.push(d);
//         totalLen += d;
//       }
//       if (totalLen === 0) return pts[0];
//       const target = t * totalLen;
//       let acc = 0;
//       for (let i = 0; i < lens.length; i++) {
//         if (acc + lens[i] >= target) {
//           const local = lens[i] === 0 ? 0 : (target - acc) / lens[i];
//           return {
//             x: pts[i].x + local * (pts[i + 1].x - pts[i].x),
//             y: pts[i].y + local * (pts[i + 1].y - pts[i].y),
//           };
//         }
//         acc += lens[i];
//       }
//       return pts[pts.length - 1];
//     };

//     const computeLayout = () => {
//       const canvasRect = canvas.getBoundingClientRect();
//       const chipRect = chipEl.getBoundingClientRect();

//       const chipCenter = {
//         x: chipRect.left + chipRect.width / 2 - canvasRect.left,
//         y: chipRect.top + chipRect.height / 2 - canvasRect.top,
//       };

//       const chipVisualW = Math.max(180, chipRect.width);
//       const chipVisualH = Math.max(70, chipRect.height);
//       const hSpan = chipVisualW * 0.84;

//       const topCount = 7;
//       const bottomCount = 7;
//       const leftCount = 3;
//       const rightCount = 3;

//       const topPins = Array.from({ length: topCount }, (_, i) => {
//         const t = topCount === 1 ? 0.5 : i / (topCount - 1);
//         return { x: chipCenter.x - hSpan / 2 + t * hSpan, y: chipCenter.y - chipVisualH / 2 - 10 };
//       });

//       const bottomPins = Array.from({ length: bottomCount }, (_, i) => {
//         const t = bottomCount === 1 ? 0.5 : i / (bottomCount - 1);
//         return { x: chipCenter.x - hSpan / 2 + t * hSpan, y: chipCenter.y + chipVisualH / 2 + 10 };
//       });

//       const vSpan = chipVisualH * 0.6;
//       const leftPins = Array.from({ length: leftCount }, (_, i) => {
//         const t = leftCount === 1 ? 0.5 : i / (leftCount - 1);
//         return { x: chipCenter.x - chipVisualW / 2 - 10, y: chipCenter.y - vSpan / 2 + t * vSpan };
//       });
//       const rightPins = Array.from({ length: rightCount }, (_, i) => {
//         const t = rightCount === 1 ? 0.5 : i / (rightCount - 1);
//         return { x: chipCenter.x + chipVisualW / 2 + 10, y: chipCenter.y - vSpan / 2 + t * vSpan };
//       });

//       const pins = { top: topPins, bottom: bottomPins, left: leftPins, right: rightPins };

//       const dests = services.map((_, idx) => {
//         const boxEl = boxRefs.current[idx];
//         if (!boxEl) return null;
//         return getElementCenterRelativeToCanvas(boxEl, canvas);
//       });

//       const connections = [
//         { pin: pins.top[0], to: dests[0], pinSide: 'top' },
//         { pin: pins.top[2], to: dests[1], pinSide: 'top' },
//         { pin: pins.top[4], to: dests[2], pinSide: 'top' },
//         { pin: pins.top[6], to: dests[3], pinSide: 'top' },
//         { pin: pins.bottom[0], to: dests[4], pinSide: 'bottom' },
//         { pin: pins.bottom[2], to: dests[5], pinSide: 'bottom' },
//         { pin: pins.bottom[4], to: dests[6], pinSide: 'bottom' },
//         { pin: pins.bottom[6], to: dests[7], pinSide: 'bottom' },
//       ];

//       const validPaths = connections
//         .filter((c) => c.pin && c.to)
//         .map((c) => ({
//           from: { x: c.pin.x, y: c.pin.y },
//           to: { x: c.to.x, y: c.to.y },
//           waypoints: buildOrthogonalPath({ x: c.pin.x, y: c.pin.y }, { x: c.to.x, y: c.to.y }, c.pinSide),
//         }));

//       const connectedPins = connections.map((c) => c.pin);
//       const allPins = [...pins.top, ...pins.bottom, ...pins.left, ...pins.right];
//       const unconnected = allPins.filter(
//         (pin) => !connectedPins.some((cp) => cp && cp.x === pin.x && cp.y === pin.y)
//       );

//       return { paths: validPaths, unconnected };
//     };

//     let lastTs = 0;
//     let tProgress = 0;

//     const drawFrame = (ts) => {
//       if (!canvas) return;
//       const ctx = canvas.getContext("2d");
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ctx.save();

//       const layout = computeLayout();
//       const { paths } = layout;

//       // Draw orthogonal wire traces
//       paths.forEach((p, idx) => {
//         const [r, g, b] = boxColors[idx];
//         const pts = p.waypoints;

//         // Glow layer (wide, soft)
//         ctx.beginPath();
//         ctx.moveTo(pts[0].x, pts[0].y);
//         for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
//         ctx.strokeStyle = `rgba(${r},${g},${b},0.12)`;
//         ctx.lineWidth = 5;
//         ctx.lineCap = 'square';
//         ctx.lineJoin = 'miter';
//         ctx.stroke();

//         // Main trace line
//         ctx.beginPath();
//         ctx.moveTo(pts[0].x, pts[0].y);
//         for (let i = 1; i < pts.length; i++) ctx.lineTo(pts[i].x, pts[i].y);
//         ctx.strokeStyle = `rgba(${r},${g},${b},0.45)`;
//         ctx.lineWidth = 1.5;
//         ctx.lineCap = 'square';
//         ctx.lineJoin = 'miter';
//         ctx.stroke();

//         // Corner junction dots (at 90° bends)
//         for (let i = 1; i < pts.length - 1; i++) {
//           ctx.beginPath();
//           ctx.fillStyle = `rgba(${r},${g},${b},0.9)`;
//           ctx.arc(pts[i].x, pts[i].y, 2.8, 0, Math.PI * 2);
//           ctx.fill();
//           // outer ring
//           ctx.beginPath();
//           ctx.strokeStyle = `rgba(${r},${g},${b},0.3)`;
//           ctx.lineWidth = 1;
//           ctx.arc(pts[i].x, pts[i].y, 5, 0, Math.PI * 2);
//           ctx.stroke();
//         }

//         // Pin dot
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
//         ctx.arc(pts[0].x, pts[0].y, 3, 0, Math.PI * 2);
//         ctx.fill();

//         // Destination dot
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(${r},${g},${b},0.8)`;
//         ctx.arc(pts[pts.length - 1].x, pts[pts.length - 1].y, 3, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       // Travelling pulse dots
//       tProgress += (ts - lastTs) * 0.0006;
//       if (tProgress > 1) tProgress -= 1;
//       lastTs = ts;

//       paths.forEach((p, idx) => {
//         const [r, g, b] = boxColors[idx];
//         const pts = p.waypoints;
//         const offset = (idx / Math.max(1, paths.length)) * 0.6;
//         const t0 = (tProgress + offset) % 1;
//         const pt = samplePolyline(pts, t0);

//         // Bright dot
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(${r},${g},${b},1)`;
//         ctx.arc(pt.x, pt.y, 3.8, 0, Math.PI * 2);
//         ctx.fill();

//         // Halo
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(${r},${g},${b},0.2)`;
//         ctx.arc(pt.x, pt.y, 9, 0, Math.PI * 2);
//         ctx.fill();
//       });

//       // Unconnected pin pulses
//       layout.unconnected.forEach((pin) => {
//         const pulse = (Math.sin(ts * 0.004 + (pin.x + pin.y) * 0.001) + 1) / 2;
//         const alpha = 0.28 + pulse * 0.42;
//         const rad = 3.8 + pulse * 1.6;
//         ctx.beginPath();
//         ctx.fillStyle = `rgba(0,255,255,${alpha})`;
//         ctx.arc(pin.x, pin.y, rad, 0, Math.PI * 2);
//         ctx.fill();

//         ctx.beginPath();
//         ctx.strokeStyle = `rgba(0,200,255,${0.25 + pulse * 0.25})`;
//         ctx.lineWidth = 1;
//         ctx.arc(pin.x, pin.y, rad + 3, 0, Math.PI * 2);
//         ctx.stroke();
//       });

//       ctx.restore();
//       rafRef.current = requestAnimationFrame(drawFrame);
//     };

//     rafRef.current = requestAnimationFrame((ts) => {
//       lastTs = ts;
//       drawFrame(ts);
//       setReady(true);
//     });

//     return () => {
//       if (rafRef.current) cancelAnimationFrame(rafRef.current);
//       if (resizeObserverRef.current) resizeObserverRef.current.disconnect();
//     };
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <section ref={containerRef} className="relative z-0 py-16 bg-black w-full">
//       <Pattern />

//       <canvas
//         ref={canvasRef}
//         className="absolute inset-0 w-full h-full pointer-events-none"
//         aria-hidden
//       />

//       <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
//         <div className="w-[200px] h-[40px] rounded-full blur-[300px] bg-cyan-400 opacity-10" />
//       </div>

//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{ background: "radial-gradient(circle at 50% 50%, rgba(14,186,199,0.12), transparent 45%)" }}
//       />

//       <div className="relative text-center z-10">
//         <div className="max-w-7xl mx-auto">
//           <h2 className="text-4xl font-bold text-white mb-12 tracking-wide">
//             Our <span className="text-cyan-400">Services</span>
//           </h2>

//           {/* Top row */}
//           <motion.div
//             ref={sectionRef}
//             className="flex flex-wrap justify-center gap-6 md:gap-8 mb-16"
//             initial={{ opacity: 0, y: -80 }}
//             animate={topControls}
//           >
//             <ServiceCard refFn={(el) => (boxRefs.current[0] = el)} color="#8B5CF6" icon={<FaBrain size={38} />} iconClass="text-violet-400" title="AI & Intelligent Systems" desc={<>Unlock AI power through <br /> intelligent automation <br /> & machine learning.</>} shadow="rgba(139,92,246,0.3)" shadowInner="rgba(139,92,246,0.05)" />
//             <ServiceCard refFn={(el) => (boxRefs.current[1] = el)} color="#0E7490" icon={<FaLaptopCode size={38} />} iconClass="text-cyan-400" title="Web Development" desc={<>Crafting responsive and dynamic <br /> websites tailored</>} shadow="rgba(14,116,144,0.3)" shadowInner="rgba(14,116,144,0.05)" />
//             <ServiceCard refFn={(el) => (boxRefs.current[2] = el)} color="#15803D" icon={<FaMobileAlt size={38} />} iconClass="text-cyan-400" title="App Development" desc={<>Building innovative and <br /> user-friendly mobile <br /> applications.</>} shadow="rgba(21,128,61,0.3)" shadowInner="rgba(21,128,61,0.05)" />
//             <ServiceCard refFn={(el) => (boxRefs.current[3] = el)} color="#047857" icon={<FaCode size={38} />} iconClass="text-cyan-400" title="Software Development" desc={<>Custom software solutions to <br /> optimize your business <br /> processes.</>} shadow="rgba(4,120,87,0.3)" shadowInner="rgba(4,120,87,0.05)" />
//           </motion.div>

//           {/* Chip */}
//           <div className="flex items-center justify-center relative my-6">
//             <div
//               ref={chipRef}
//               className="relative w-[300px] h-[92px] bg-gradient-to-b from-[#1b1b1b] to-[#0e0e0e] rounded-lg border border-[#222] shadow-[0_18px_60px_rgba(0,0,0,0.7)] flex items-center justify-center overflow-visible"
//             >
//               <div className="absolute -top-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
//                 {Array(7).fill().map((_, idx) => (
//                   <div key={idx} className="flex flex-col items-center">
//                     <div className="w-[2px] h-[14px] bg-gradient-to-b from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
//                     <div className="w-[10px] h-[12px] bg-gradient-to-b from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-b-[3px]" />
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute -bottom-[28px] left-1/2 -translate-x-1/2 flex justify-between w-[260px]">
//                 {Array(7).fill().map((_, idx) => (
//                   <div key={idx} className="flex flex-col items-center">
//                     <div className="w-[10px] h-[12px] bg-gradient-to-t from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-t-[3px]" />
//                     <div className="w-[2px] h-[14px] bg-gradient-to-t from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute -left-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
//                 {Array(3).fill().map((_, idx) => (
//                   <div key={idx} className="flex items-center">
//                     <div className="w-[14px] h-[2px] bg-gradient-to-r from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
//                     <div className="w-[12px] h-[10px] bg-gradient-to-r from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-r-[3px]" />
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute -right-[28px] top-1/2 -translate-y-1/2 flex flex-col justify-between h-[66px]">
//                 {Array(3).fill().map((_, idx) => (
//                   <div key={idx} className="flex items-center">
//                     <div className="w-[12px] h-[10px] bg-gradient-to-l from-[#cfcfcf] via-[#9a9a9a] to-[#6b6b6b] rounded-l-[3px]" />
//                     <div className="w-[14px] h-[2px] bg-gradient-to-l from-[#3a3a3a] via-[#7b7b7b] to-[#00d8ff] opacity-80" />
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] to-[#0a0a0a] rounded-lg" />
//               <div className="absolute inset-0 flex items-center justify-center text-cyan-300 text-lg font-semibold tracking-wide">
//                 Cyberspace Works
//               </div>
//               <div className="absolute inset-0 pointer-events-none">
//                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_70%)] animate-pulse" />
//               </div>
//             </div>
//           </div>

//           {/* Bottom row */}
//           <motion.div
//             className="flex flex-wrap justify-center gap-6 md:gap-8 mt-16"
//             initial={{ opacity: 0, y: 80 }}
//             animate={bottomControls}
//           >
//             <ServiceCard refFn={(el) => (boxRefs.current[4] = el)} color="#0F766E" icon={<FaPalette size={38} />} iconClass="text-cyan-400" title="UI/UX Design" desc={<>Creating intuitive and <br /> visually appealing user <br /> interfaces.</>} shadow="rgba(15,118,110,0.3)" shadowInner="rgba(15,118,110,0.05)" />
//             <ServiceCard refFn={(el) => (boxRefs.current[5] = el)} color="#0369A1" icon={<FaBullhorn size={38} />} iconClass="text-cyan-400" title="Digital Marketing" desc={<>Boost your online presence <br /> with targeted marketing <br /> strategies.</>} shadow="rgba(3,105,161,0.3)" shadowInner="rgba(3,105,161,0.05)" />
//             <ServiceCard refFn={(el) => (boxRefs.current[6] = el)} color="#1D4ED8" icon={<FaBrush size={38} />} iconClass="text-cyan-400" title="Graphic Design" desc={<>Designing stunning visuals <br /> to enhance your <br /> brand identity.</>} shadow="rgba(29,78,216,0.3)" shadowInner="rgba(29,78,216,0.05)" />
//             <ServiceCard refFn={(el) => (boxRefs.current[7] = el)} color="#4338CA" icon={<SiGoogleanalytics size={38} />} iconClass="text-cyan-400" title="Research and Analytics" desc={<>We help businesses<br /> make <br /> sharper, faster decisions.</>} shadow="rgba(67,56,202,0.3)" shadowInner="rgba(67,56,202,0.05)" />
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ServiceCard({ refFn, color, icon, iconClass, title, desc, shadow, shadowInner }) {
//   return (
//     <div
//       ref={refFn}
//       className="relative group w-[220px] h-[150px] transition-transform duration-500 ease-out"
//     >
//       <div
//         className="relative rounded-2xl p-6 mb-30 bg-black/60 backdrop-blur-xl border border-white/10 overflow-hidden flex flex-col items-center justify-center text-center transition-all duration-300 h-full"
//         style={{ boxShadow: `0 0 15px ${shadow}, inset 0 0 15px ${shadowInner}` }}
//       >
//         <div className="absolute top-0 left-0 w-40 h-40 -translate-x-20 -translate-y-20 blur-2xl opacity-40" style={{ background: `radial-gradient(circle, ${color} 0%, transparent 100%)` }} />
//         <div className="absolute bottom-0 right-0 w-40 h-40 translate-x-20 translate-y-20 blur-2xl opacity-40" style={{ background: `radial-gradient(circle, ${color} 0%, transparent 100%)` }} />
//         <div className={`${iconClass} mb-2 z-10`}>{icon}</div>
//         <h3 className="text-sm font-semibold text-white z-10">{title}</h3>
//         <p className="text-xs text-gray-400 mt-1 leading-tight z-10">{desc}</p>
//       </div>
//     </div>
//   );
// }



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
      const OUTER_MARGIN = 32;
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