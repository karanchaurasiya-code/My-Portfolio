import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";

const Projects = () => {
  return (
    <section
      id="Project"
      className="min-h-sreen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto- px-4">
          <h2 className="text-3xl font-bold mb-8 text-white text-center transition-all duration-300 hover:text-white-400 hover:drop-shadow-[0_0_20px_white]">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-white-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
              <h3 className="text-xl font-bold mb-2">
                E-Commerce Website - 91Mobiles Clone
              </h3>
              <p className="text-gray-400 mb-4">
                This is a Django-based e-commerce website project designed to
                simulate a mobile shopping platform like 91Mobiles. It allows
                users to register, browse phones by category, add products to
                the cart, and manage profiles.
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "Django",
                  "Python",
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "jQuery",
                  "SQLite",
                  "Django built-in auth system",
                  "Django static file management",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="bg-blue-500/10 text-white-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/karanchaurasiya-code/91Mobiles.com"
                  target="_blank"
                  className="text-white-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
            {/* 2th project */}
            <div
              className="
              glass p-6 rounded-xl border border-white/10 
              hover:-translate-y-1 hover:border-white-500/30
              hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)]
              transition-all
            "
            >
              <h3 className="text-xl font-bold mb-2">
                WorldAtlas - Country Explorer Web App
              </h3>
              <p className="text-gray-400 mb-4">
                WorldAtlas is a modern, responsive React.js web application that
                allows users to explore countries around the world. It fetches
                data from a public API and displays key details such as flags,
                population, capital, region, and more.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {[
                  "React.js",
                  "JavaScript",
                  "HTML5",
                  "CSS3",
                  "tailwind css",
                  "React Router",
                  "REST Countries API",
                  "RemixIcon",
                ].map((tech, key) => (
                  <span
                    key={key}
                    className="
                      bg-blue-500/10 text-white-500 py-1 px-3 
                      rounded-full text-sm
                      transition
                      hover:bg-blue-500/20 hover:-translate-y-0.5
                      hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex justify-between items-center">
                <a
                  href="https://github.com/karanchaurasiya-code/WorldAtlas"
                  target="_blank"
                  className="text-white-400 hover:text-blue-300 transition-colors my-4"
                >
                  View Project →
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
