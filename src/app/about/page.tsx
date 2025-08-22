import { Atom, Beaker, Github, Linkedin, MessageCircle } from 'lucide-react';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-4 sm:p-6 md:p-8">
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 sm:top-20 left-4 sm:left-10 w-3 h-3 sm:w-4 sm:h-4 bg-yellow-400 rounded-full animate-bounce"></div>
        <div className="absolute top-32 sm:top-40 right-8 sm:right-20 w-4 h-4 sm:w-6 sm:h-6 bg-green-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-16 sm:bottom-20 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 sm:right-1/3 w-3 h-3 sm:w-5 sm:h-5 bg-cyan-400 rounded-full animate-bounce delay-300"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-purple-700 mb-4 drop-shadow-lg px-2">
            About Me
          </h1>
        </div>

        <div className="bg-white rounded-2xl sm:rounded-3xl border-4 sm:border-6 md:border-8 border-yellow-400 shadow-[0_0_20px_rgba(0,255,0,0.3)] sm:shadow-[0_0_30px_rgba(0,255,0,0.5)] p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 relative overflow-hidden">
          <div className="absolute top-2 right-2 sm:top-4 sm:right-4 text-green-500 animate-spin">
            <Atom size={24} className="sm:w-8 sm:h-8 md:w-10 md:h-10" />
          </div>
          <div className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 text-purple-500 animate-bounce">
            <Beaker size={20} className="sm:w-6 sm:h-6 md:w-8 md:h-8" />
          </div>

          <div className="relative z-10">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-purple-900 mb-4 sm:mb-6 text-center px-2">
              🧪 Interdimensional Developer 🧪
            </h2>
            <div className="text-sm sm:text-base md:text-lg text-gray-700 space-y-3 sm:space-y-4 mb-6 sm:mb-8 px-2">
              <p>
                Greetings from dimension C-137! I’m Aziza—a frontend developer
                who once roamed the universe of medicine but realized the IT
                multiverse is way more chaotic (and way more fun). Now I build
                interfaces that work as smoothly as Rick’s portal gun… on a good
                day.
              </p>

              <p>
                I’ve traveled across many worlds (a.k.a. countries), practice
                yoga, and live a healthy, mindful lifestyle—Mr. Meeseeks would
                be proud. But don’t be fooled—when it comes to code, I become a
                relentless bug hunter and performance optimizer across infinite
                timelines.
              </p>

              <p className="hidden sm:block">
                My tech stack: React, Next.js, TypeScript, Redux, API
                integrations, and a sprinkle of server-side sorcery. Soft
                skills? Responsibility on Morty-level when holding a Death
                Crystal, and determination as strong as Rick when he’s out of
                Galactic Vodka. Ready to keep leveling up and build entire
                multiverses out of code!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
              <a
                href="https://linkedin.com/in/aziza-omirgaliyeva"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 bg-blue-600 text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg border-2 sm:border-4 border-yellow-400 shadow-lg hover:bg-blue-700 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,100,255,0.5)] transition-all duration-300"
              >
                <Linkedin
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:animate-bounce"
                />
                LinkedIn
              </a>

              <a
                href="https://t.me/azomis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 bg-cyan-500 text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg border-2 sm:border-4 border-yellow-400 shadow-lg hover:bg-cyan-600 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,200,255,0.5)] transition-all duration-300"
              >
                <MessageCircle
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:animate-bounce"
                />
                Telegram
              </a>

              <a
                href="https://github.com/azomis"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-2 sm:gap-3 bg-gray-800 text-white px-3 sm:px-4 md:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base md:text-lg border-2 sm:border-4 border-yellow-400 shadow-lg hover:bg-gray-900 hover:scale-105 hover:shadow-[0_0_20px_rgba(100,100,100,0.5)] transition-all duration-300 sm:col-span-2 md:col-span-1"
              >
                <Github
                  size={20}
                  className="sm:w-6 sm:h-6 md:w-7 md:h-7 group-hover:animate-bounce"
                />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="text-center px-2">
          <div className="bg-yellow-400 text-purple-900 p-4 sm:p-6 rounded-xl sm:rounded-2xl border-2 sm:border-4 border-green-500 shadow-lg inline-block max-w-full sm:max-w-2xl">
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-2">
              &quot;Listen Morty, programming is like science - you gotta be
              willing to make mistakes, break things, and occasionally travel to
              parallel dimensions to find the bug!&quot;
            </p>
            <p className="text-sm sm:text-base md:text-lg font-semibold">
              - Rick Sanchez (probably)
            </p>
          </div>
        </div>

        <div className="text-center mt-6 sm:mt-8 px-2">
          <p className="text-purple-700 text-sm sm:text-base md:text-lg font-semibold">
            🚀 Ready to build something awesome together? 🚀
          </p>
          <p className="text-green-500 text-xs sm:text-sm mt-2">
            * No Mortys were harmed in the making of this website
          </p>
        </div>
      </div>
    </div>
  );
}
