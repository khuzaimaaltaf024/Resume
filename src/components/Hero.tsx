import { useEffect, useState } from 'react';
import { Mail, ChevronDown, Database, Workflow, Zap, Mic, MessageSquare, Bot } from 'lucide-react';

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'AI Automation Specialist';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex]);

  const tools = [
    { name: 'n8n', icon: Workflow, x: 0, y: -160, delay: 0 },
    { name: 'Make.com', icon: Zap, x: 150, y: -80, delay: 1000 },
    { name: 'Vapi', icon: Mic, x: 150, y: 80, delay: 2000 },
    { name: 'Retell AI', icon: MessageSquare, x: 0, y: 160, delay: 3000 },
    { name: 'Supabase', icon: Database, x: -150, y: 80, delay: 4000 },
    { name: 'Zapier', icon: Bot, x: -150, y: -80, delay: 5000 },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="space-y-10 text-center lg:text-left z-10">
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-bold leading-tight">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-500">
                Khuzaima
              </span>
            </h1>

            <div className="text-3xl sm:text-4xl lg:text-5xl text-slate-300 h-16 flex items-center justify-center lg:justify-start">
              <span>{displayedText}</span>
              <span className="typing-cursor ml-1 text-emerald-500">|</span>
            </div>

            <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-justify">
              I build intelligent AI workflows and automation solutions using n8n, Vapi, Retell AI, Manychat, Elevenlabs, Supabase and cutting-edge AI technologies.
              Transforming complex business processes into seamless automated systems.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-6">
              <a
                href="https://www.freelancer.com/u/khuzaima024"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-48 gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-sky-400 text-sky-400 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 group"
              >
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAY1BMVEX////4/P/0+f7w9v661fhjovHM3/qCs/SUv/UAgO0AcOsAbOsAaesOhO7C2vnY6Pvl8P2kyPaw0fhYnfHE3frR4/oAdewAeewAfO0ri+5PmfAAc+wAf+0AeOyZwfWKuPRwqvK16K7yAAAAh0lEQVR4Ad3LwwEEQQAEwF6bY0/+SZ6N96GeDfyzZC/NUtzIixI7Vd20XT9UY4KzsZzmul5mrITQIk9xi3WcCyHkojQZ8YgZa62olZSG4Qndtc0irOUZnuXGLYPdwStr43dHSfDSzHc/HvBaza0jeI1p3xZ4w5tixTvERLzVVnirrPDejO+3BXE2CASMVEIeAAAAAElFTkSuQmCC" className="w-[26px] h-[26px]" alt="Freelancer" />
                <span className="font-semibold text-lg">Freelancer</span>
              </a>
              <a
                href="https://www.upwork.com/freelancers/~0118556ff8223dea4f"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-48 gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-emerald-500 text-emerald-500 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1 group"
              >
                <svg role="img" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-white">
                  <title>Upwork</title>
                  <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
                </svg>
                <span className="font-semibold text-lg">Upwork</span>
              </a>
              <a
                href="https://www.linkedin.com/in/khuzaima-altaf-441639212/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-48 gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-sky-400 text-sky-400 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-sky-400/20 transform hover:-translate-y-1 group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 27" fill="currentColor" className="w-7 h-7 text-white">
                  <path fillRule="evenodd" d="M1.91 0h22.363a1.91 1.91 0 011.909 1.91v22.363a1.91 1.91 0 01-1.91 1.909H1.91A1.91 1.91 0 010 24.272V1.91A1.91 1.91 0 011.91 0zm1.908 22.364h3.818V9.818H3.818zM8.182 5.727a2.455 2.455 0 10-4.91 0 2.455 2.455 0 004.91 0zm2.182 4.091v12.546h3.818v-6.077c0-2.037.75-3.332 2.553-3.332 1.3 0 1.81 1.201 1.81 3.332v6.077h3.819v-6.93c0-3.74-.895-5.78-4.667-5.78-1.967 0-3.277.921-3.788 1.946V9.818z" clipRule="evenodd"></path>
                </svg>
                <span className="font-semibold text-lg">LinkedIn</span>
              </a>
              <a
                href="mailto:khuzaimaaltaf024@gmail.com"
                className="flex items-center justify-center w-48 gap-3 px-6 py-4 bg-slate-800/50 backdrop-blur-sm border border-emerald-500 text-emerald-500 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/20 transform hover:-translate-y-1 group"
              >
                <Mail size={28} className="text-white" />
                <span className="font-semibold text-lg">Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Mapping Tree */}
          <div className="relative h-[600px] flex items-center justify-center z-10 hidden lg:flex scale-110">
            {/* Center Node */}
            <div className="relative z-20 w-40 h-40 bg-slate-900 border-2 border-emerald-500/50 rounded-full flex items-center justify-center animate-pulse-glow hover:scale-105 transition-transform duration-300 cursor-default">
              <div className="text-center">
                <Bot className="w-12 h-12 text-emerald-500 mx-auto mb-2" />
                <span className="text-lg font-bold text-slate-200">AI Automation</span>
              </div>
            </div>

            {/* Orbiting Tool Nodes */}
            {tools.map((tool, index) => (
              <div
                key={index}
                className="absolute z-10"
                style={{
                  transform: `translate(${tool.x}px, ${tool.y}px)`,
                }}
              >
                {/* Connecting Line */}
                <svg
                  className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${Math.atan2(tool.y, tool.x) * (180 / Math.PI) + 90}deg)`,
                  }}
                >
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="50"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-emerald-500/20"
                  />
                  <circle cx="200" cy="50" r="3" className="fill-emerald-500 animate-ping" />
                </svg>

                {/* Tool Node */}
                <div
                  className={`flex flex-col items-center justify-center w-24 h-24 bg-slate-800/80 backdrop-blur-md border border-slate-700 hover:border-emerald-500/50 rounded-2xl shadow-xl transition-all duration-300 hover:-translate-y-1 ${index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'}`}
                >
                  <tool.icon className="w-10 h-10 text-emerald-400 mb-2" />
                  <span className="text-sm font-medium text-slate-300">{tool.name}</span>
                </div>
              </div>
            ))}

            {/* Orbital Rings */}
            <div className="absolute border border-slate-700/30 rounded-full w-[350px] h-[350px] animate-spin-slow pointer-events-none"></div>
            <div className="absolute border border-slate-700/20 rounded-full w-[500px] h-[500px] pointer-events-none"></div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer opacity-50 hover:opacity-100 transition-opacity">
          <ChevronDown size={32} className="text-emerald-500" />
        </div>
      </div>
    </section>
  );
}
