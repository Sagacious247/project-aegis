"use client";

import { useState } from "react";

const navigationItems = [
  "Dashboard",
  "Market Intelligence",
  "Portfolio",
  "Risk Analytics",
  "Strategy Lab",
  "Backtesting",
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-[60] flex items-center justify-between border-b border-[#1E3A52] bg-[#07111F]/95 px-5 py-4 backdrop-blur md:hidden">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-white">
            VORIX
          </h1>

          <p className="text-[10px] text-[#8FAFC4]">
            AI Trading Intelligence
          </p>
        </div>

        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="rounded-lg border border-[#1E3A52] bg-[#0D2438] px-3 py-2 text-white transition hover:bg-[#123A5A]"
        >
          {open ? "✕" : "☰"}
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 bg-[#07111F] md:hidden">
          <div className="px-6 pb-8 pt-24">
            <nav className="space-y-2">
              {navigationItems.map((item, index) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setOpen(false)}
                  className={`block w-full rounded-xl px-4 py-4 text-left text-sm transition ${
                    index === 0
                      ? "bg-[#123A5A] text-white"
                      : "text-[#8FAFC4] hover:bg-[#0D2438] hover:text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </nav>

            <div className="mt-8 border-t border-[#1E3A52] pt-6">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="block w-full rounded-xl px-4 py-4 text-left text-sm text-[#8FAFC4] transition hover:bg-[#0D2438] hover:text-white"
              >
                Settings
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}