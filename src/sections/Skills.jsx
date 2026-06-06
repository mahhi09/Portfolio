import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';

// Custom Minimal SVG Icons
const Icons = {
  frontend: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M20 7h-9m9 4h-5m5 4h-3M4 16V4M4 4h16v16H4v-4" />
    </svg>
  ),
  backend: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  database: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M2 22v-4h20v4Z" /><path d="M2 14v-4h20v4Z" /><path d="M2 6V2h20v4Z" />
    </svg>
  ),
  cloud: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M17.5 19A3.5 3.5 0 0 0 21 15.5c0-2.79-2.54-4.5-5-4.5-.47 0-.89.09-1.32.27A5 5 0 0 0 5 12c0 2.21 1.79 4 4 4h8.5Z" />
    </svg>
  ),
  os: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="M6 8h.01M10 8h.01M14 8h.01M18 8h.01M4 12h16" />
    </svg>
  ),
  tools: (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 0-7.94-7.94L9.76 1.36a1 1 0 0 0 0 1.41l1.61 1.61-6.8 6.8a2 2 0 0 0 0 2.83l2.83 2.83a2 2 0 0 0 2.83 0l6.8-6.8 1.61 1.61a1 1 0 0 0 1.41 0l3.77-3.77a6 6 0 0 0-7.94-7.94L14.7 6.3Z" />
    </svg>
  )
};

const skillData = [
  {
    id: "frontend",
    title: "Frontend Hub",
    subtitle: "Creating immersive interfaces",
    icon: Icons.frontend,
    color: "from-cyan-500 to-blue-600",
    shadow: "shadow-cyan-500/10",
    glow: "rgba(6, 182, 212, 0.15)",
    size: "col-span-12 md:col-span-7 row-span-2",
    direction: "left", // Left entry point
    skills: [
      { name: "React.js", level: "Expert", pct: 95 },
      { name: "Next.js", level: "Advanced", pct: 88 },
      { name: "Tailwind CSS", level: "Expert", pct: 98 },
      { name: "Framer Motion", level: "Advanced", pct: 85 }
    ]
  },
  {
    id: "backend",
    title: "Backend Engine",
    subtitle: "Scalable APIs & Architecture",
    icon: Icons.backend,
    color: "from-emerald-500 to-green-600",
    shadow: "shadow-emerald-500/10",
    glow: "rgba(16, 185, 129, 0.15)",
    size: "col-span-12 md:col-span-5 row-span-1",
    direction: "right", // Right entry point
    skills: [
      { name: "Node.js", level: "Expert", pct: 90 },
      { name: "Express.js", level: "Expert", pct: 92 },
      { name: "REST & GraphQL", level: "Advanced", pct: 85 }
    ]
  },
  {
    id: "database",
    title: "Database Vault",
    subtitle: "Secure & Optimized Storage",
    icon: Icons.database,
    color: "from-purple-500 to-indigo-600",
    shadow: "shadow-purple-500/10",
    glow: "rgba(147, 51, 234, 0.15)",
    size: "col-span-12 sm:col-span-6 md:col-span-5 row-span-1",
    direction: "left",
    skills: [
      { name: "MongoDB", level: "Advanced", pct: 88 },
      { name: "PostgreSQL", level: "Intermediate", pct: 80 }
    ]
  },
  {
    id: "cloud",
    title: "Cloud & DevOps",
    subtitle: "Deployment & Infrastructure",
    icon: Icons.cloud,
    color: "from-orange-500 to-amber-600",
    shadow: "shadow-orange-500/10",
    glow: "rgba(249, 115, 22, 0.15)",
    size: "col-span-12 sm:col-span-6 md:col-span-4 row-span-2",
    direction: "right",
    skills: [
      { name: "AWS (S3/EC2)", level: "Intermediate", pct: 72 },
      { name: "Docker", level: "Intermediate", pct: 68 },
      { name: "Vercel", level: "Expert", pct: 95 }
    ]
  },
  {
    id: "os",
    title: "OS & Core Systems",
    subtitle: "Environment & Fundamentals",
    icon: Icons.os,
    color: "from-yellow-500 to-orange-500",
    shadow: "shadow-yellow-500/10",
    glow: "rgba(234, 179, 8, 0.15)",
    size: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
    direction: "left",
    skills: [
      { name: "Linux / Bash", level: "Advanced", pct: 82 },
      { name: "Git & GitHub", level: "Expert", pct: 93 }
    ]
  },
  {
    id: "tools",
    title: "Tools & Weapons",
    subtitle: "Daily productivity stack",
    icon: Icons.tools,
    color: "from-pink-500 to-rose-600",
    shadow: "shadow-pink-500/10",
    glow: "rgba(236, 72, 153, 0.15)",
    size: "col-span-12 sm:col-span-6 md:col-span-4 row-span-1",
    direction: "right",
    skills: [
      { name: "VS Code", level: "Expert", pct: 96 },
      { name: "Postman", level: "Advanced", pct: 88 }
    ]
  }
];

export default function Skill() {
  const [activeCategory, setActiveCategory] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  // Ref for tracking section scroll visibility
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.15, once: false }); // triggers every time you enter the section
  const audioRef = useRef(null);

  // Audio trigger handling on view entry
  useEffect(() => {
    if (isInView && audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((err) => {
        console.log("Audio autoplay prevented. Interacting with the page first allows audio triggers.", err);
      });
    }
  }, [isInView]);

  return (
    <div ref={sectionRef} className="min-h-screen bg-slate-950 text-slate-100 py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Hidden Audio element for Action Movie Swoosh SFX */}
      <audio ref={audioRef} src="/swoosh.mp3" preload="auto" />

      {/* Dynamic Ambient Background */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/60 text-xs font-medium tracking-wider text-cyan-400 uppercase backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            Combat Stack
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
            Skills & Arsenals
          </h2>
        </div>

        {/* Action Movie Style Bento Grid */}
        <div className="grid grid-cols-12 auto-rows-[210px] gap-4 lg:gap-6">
          {skillData.map((category, index) => {
            const IconComponent = category.icon;
            const isHovered = hoveredCard === category.id;

            // Action Movie directional physics config
            const directionX = category.direction === "left" ? -250 : 250;

            return (
              <motion.div
                key={category.id}
                initial={{ x: directionX, opacity: 0, scale: 0.8 }}
                animate={isInView ? { x: 0, opacity: 1, scale: 1 } : { x: directionX, opacity: 0, scale: 0.8 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 140, 
                  damping: 14, 
                  delay: index * 0.08 // Staggered sequence layout 
                }}
                onMouseEnter={() => setHoveredCard(category.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                whileHover={{ y: -6, scale: 1.02 }}
                style={{
                  boxShadow: isHovered ? `0 20px 40px -15px ${category.glow}` : "none",
                }}
                className={`${category.size} relative rounded-3xl border border-slate-800/80 bg-slate-900/30 p-6 backdrop-blur-xl overflow-hidden cursor-pointer group transition-all duration-300`}
              >
                {/* 3D Glass Accent Neon border glow */}
                <div className={`absolute -inset-px bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-15 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Blueprint grid matrix overlay pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-[0.03]" />

                <div className="h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2.5">
                        <div className={`p-2 rounded-xl bg-gradient-to-br ${category.color} bg-opacity-10 text-white shadow-lg ${category.shadow} group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="w-5 h-5 text-white" />
                        </div>
                        <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-slate-200 transition-colors">
                          {category.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 font-medium pl-1">
                        {category.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Skills lists loader trackers */}
                  <div className="mt-4 space-y-3 overflow-y-auto pr-1">
                    {category.skills.map((skill, index) => (
                      <div key={index} className="space-y-1">
                        <div className="flex justify-between text-xs font-semibold">
                          <span className="text-slate-300 group-hover:text-white transition-colors">{skill.name}</span>
                          <span className="text-slate-500 group-hover:text-slate-300 transition-colors">{skill.level}</span>
                        </div>
                        <div className="w-full h-[5px] bg-slate-900 rounded-full overflow-hidden border border-slate-800/50">
                          <motion.div 
                            initial={{ width: 0 }}
                            animate={isInView ? { width: `${skill.pct}%` } : { width: 0 }}
                            transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Modal Window View Panel overlay */}
        <AnimatePresence>
          {activeCategory && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 flex items-center justify-center p-4"
              onClick={() => setActiveCategory(null)}
            >
              {(() => {
                const selected = skillData.find(c => c.id === activeCategory);
                const SelIcon = selected.icon;
                return (
                  <motion.div 
                    initial={{ scale: 0.85, y: 50, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.85, y: 50, opacity: 0 }}
                    transition={{ type: "spring", duration: 0.4 }}
                    className="bg-slate-900 border border-slate-800 w-full max-w-lg rounded-3xl p-6 md:p-8 relative overflow-hidden shadow-2xl"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`p-3 rounded-2xl bg-gradient-to-br ${selected.color} text-white`}>
                        <SelIcon className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">{selected.title}</h4>
                        <p className="text-sm text-slate-400">{selected.subtitle}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {selected.skills.map((skill, i) => (
                        <div key={i} className="space-y-2">
                          <div className="flex justify-between items-center text-sm">
                            <span className="font-bold text-slate-200">{skill.name}</span>
                            <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-slate-800 border border-slate-700 text-slate-300">{skill.level} ({skill.pct}%)</span>
                          </div>
                          <div className="w-full h-2 bg-slate-950 rounded-full overflow-hidden p-[2px]">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.pct}%` }}
                              className={`h-full bg-gradient-to-r ${selected.color} rounded-full`}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    <button 
                      onClick={() => setActiveCategory(null)}
                      className="mt-8 w-full py-3 px-4 bg-slate-800 hover:bg-slate-700 border border-slate-700 text-sm font-bold text-white rounded-2xl transition-colors"
                    >
                      Dismiss View
                    </button>
                  </motion.div>
                );
              })()}
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}