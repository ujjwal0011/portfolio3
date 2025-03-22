"use client";

import { SplineScene } from "@/components/ui/splite";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { Card } from "./ui/card";

export function Hero() {
  return (
    <section id="home">
      <Card className="w-full h-[470px]  bg-black relative overflow-hidden">
        <div className="flex h-full">
          <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
              UJJWAL BHARDWAJ
            </h1>
            <p className="mt-4 text-neutral-300 max-w-lg">
              I am a Full-Stack Software Engineer with expertise in website,
              mobile, and software development. Explore my projects and skills!
            </p>
            <p className="mt-2 text-sm text-neutral-400 italic">
              Apologies if things feel a bit heavy—I&apos;m working on it!
              Kindly refresh if you experience any issues.
            </p>
            <div className="mt-4">
              <RainbowButton>
                <a
                  href="https://drive.google.com/file/d/1sBY-VmhROzsrPD40g4Q55z9XlTjOsthD/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </RainbowButton>
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
