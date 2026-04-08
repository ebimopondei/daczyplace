"use client"
import { Dispatch, SetStateAction } from "react";

export function MenuIcon({ open, setOpen }: { open: boolean; setOpen: Dispatch<SetStateAction<boolean>> }) {
  return (
    <button
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
          className={"group w-12 h-12 rounded-lg flex md:hidden items-center justify-center backdrop-blur-sm shadow-lg ring-1 ring-slate-900/5 hover:scale-105 transform transition duration-200"}
        >
          <svg
            className="w-6 h-6 relative"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className={`transform transition duration-300 ease-in-out stroke-white`} 
              d="M4 7h16"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transformOrigin: '50% 50%',
                transform: open ? 'translateY(0rem) translateX(-0.3rem) rotate(45deg)' : 'none',
                opacity: open ? 0.9 : 1,
              }}
            />
            <path
              className={`transform transition duration-300 ease-in-out stroke-white`} 
              d="M4 12h16"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transformOrigin: '50% 50%',
                transform: open ? 'scaleX(0)' : 'none',
                opacity: open ? 0 : 1,
              }}
            />
            <path
              className={`transform transition duration-300 ease-in-out stroke-white`} 
              d="M4 17h16"
              strokeWidth="2"
              strokeLinecap="round"
              style={{
                transformOrigin: '50% 50%',
                transform: open ? 'translateY(-0.3rem) translateX(-0.3rem) rotate(-45deg)' : 'none',
                opacity: open ? 0.9 : 1,
              }}
            />
          </svg>
        </button>
  );}