// import React from 'react';
import Logo from "../assets/Logo.png"


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-16 text-slate-400 font-sans">
      <div className="mx-auto max-w-7xl flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
        
        {/* Brand Information Column */}
        <div className="max-w-96">
          <div className="text-xl font-bold tracking-tight text-white mb-4 flex mx-2 items-center justify-center">
             <img src={Logo} alt="Logo" className='w-10 h-10 object-contain' />

            Mahhi
          </div>
          
          <p className="text-sm leading-relaxed font-extrabold text-white shadow-blue-700">
            Made By : Shrutika Raut & Mayank Dandare
          </p>
        </div>
        

        {/* Links Navigation Grid */}
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:gap-16">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-wider text-slate-200 uppercase mb-1">
              Platform
            </h4>
            <a href="#features" className="text-sm transition-colors hover:text-sky-400">Features</a>
            <a href="#security" className="text-sm transition-colors hover:text-sky-400">Security</a>
            <a href="#pricing" className="text-sm transition-colors hover:text-sky-400">Pricing</a>
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-semibold tracking-wider text-slate-200 uppercase mb-1">
              Resources
            </h4>
            <a href="#docs" className="text-sm transition-colors hover:text-sky-400">Documentation</a>
            <a href="#guides" className="text-sm transition-colors hover:text-sky-400">Guides</a>
            <a href="#api" className="text-sm transition-colors hover:text-sky-400">API Reference</a>
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-3 col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold tracking-wider text-slate-200 uppercase mb-1">
              Connect
            </h4>
            <a href="#github" className="text-sm transition-colors hover:text-sky-400">GitHub</a>
            <a href="#discord" className="text-sm transition-colors hover:text-sky-400">Discord</a>
            <a href="#twitter" className="text-sm transition-colors hover:text-sky-400">Twitter / X</a>
          </div>

        </div>
      </div>

      {/* Bottom Legal Section */}
      <div className="mx-auto max-w-7xl border-t border-slate-800 mt-16 pt-8 flex flex-col-reverse gap-4 items-center sm:flex-row sm:justify-between text-xs text-slate-500">
        <span>
          &copy; {currentYear} mayankdandare.in Inc. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a href="#privacy" className="transition-colors hover:text-slate-400">Privacy Policy</a>
          <a href="#terms" className="transition-colors hover:text-slate-400">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}