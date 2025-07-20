import React from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTwitter,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <RevealOnScroll>
        <div className="text-center z-10 px-4 ">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 leading-tight text-white">
            Welcome to Karan’s World of Code
          </h1>
          <p className="text-gray-400 text-lg md-8 max-w-lg mx-auto">
            I’m a Python Full Stack Developer, trained at Ducat, Gurugram,
            skilled in Python, Django, React, JavaScript, HTML, CSS, and SQL.
            After completing my B.A. from Delhi University, I shifted to tech to
            pursue my passion for problem-solving and web development.
          </p>
          <div className="flex justify-center space-x-4 mt-5">
            <a
              href="#Project"
              className="border border-white-500/50 bg-black-500 text-white py-3 px-6 rounded font-medium transition-transform duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-white-500/50 bg-black-500 text-white py-3 px-6 rounded font-medium transition-transform duration-300 relative overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Get In Touch
            </a>
          </div>
          <div className="icon mt-10 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/karan-kumar-a93090229"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 text-2xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/karanchaurasiya-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 text-2xl"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.instagram.com/karan.chaurasiya_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-2xl"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/918826847924"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-400 text-2xl"
            >
              <FaWhatsapp />
            </a>
            <a
              href="mailto:karanchaurasiya2003a@gmail.com"
              className="text-white hover:text-red-400 text-2xl"
            >
              <MdEmail />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Home;
