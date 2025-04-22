"use client";

import React from "react";
import { SplineScene } from "@/components/ui/splite";
import { Card } from "./ui/card";

// Create a new component for the Uiverse button with proper TypeScript typing
const UiverseButton = ({ 
  children, 
  onClick = () => {} 
}: { 
  children: React.ReactNode; 
  onClick?: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-transform duration-200 ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group relative animate-rainbow cursor-pointer border-0 bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] text-foreground [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] dark:bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] hover:scale-105 active:scale-95 h-10 px-4 py-2 inline-flex"
    >
      <div className="flex items-center">
        {children}
      </div>
    </button>
  );
};

export function Hero() {
  return (
    <section id="home">
      <Card className="w-full h-[470px] bg-transparent relative overflow-hidden">
        <div className="flex h-full">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              UJJWAL BHARDWAJ
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
            Aspiring Full-Stack Software Engineer with expertise in website and software development. Explore my projects that showcase my ability to craft complete, scalable applications from front-end to back-end.!
            </p>
            <div className="mt-4 gap-6 flex items-center justify-start flex-wrap">
              <UiverseButton>
                <a
                  href="https://drive.google.com/file/d/1sBY-VmhROzsrPD40g4Q55z9XlTjOsthD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black"
                >
                  Resume
                </a>
              </UiverseButton>
            </div>
          </div>
          
          <div className="flex-1 relative">
            <SplineScene
              scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
      </Card>
    </section>
  );
}