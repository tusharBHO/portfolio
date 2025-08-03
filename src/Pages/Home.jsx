import React, { useState, useEffect } from 'react';
import About from './About';
import CertificationsSection from './Certifications';
import Skills from './Skills';
import Projects from './Projects';
import Resume from './Resume';
import Contact from './Contact';
import MouseGlowTrail from '../components/MouseGlowTrail';

const roles = ["UI/UX Designer", "Web Developer", "Prompt Engineer"];

const Home = () => {
  return (
    <>
      <MouseGlowTrail />

      <section className="relative min-h-screen flex flex-col justify-center items-center px-6 text-center bg-white dark:bg-dark-background transition-colors duration-300 overflow-hidden">
        {/* Subtle field-based background grid */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-[#f8fafc] via-[#e0f2fe] to-[#f0f9ff] dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] opacity-30" />

        {/* Glowing blur bubble */}
        <div className="absolute top-[20%] left-[10%] w-60 h-60 bg-blue-400/20 rounded-full blur-3xl animate-pulse hidden sm:block"></div>
        <div className="absolute bottom-[15%] right-[5%] w-40 h-40 bg-fuchsia-400/10 rounded-full blur-2xl animate-pulse hidden sm:block"></div>

        {/* Main Heading */}
        <h1 className="relative z-10 text-4xl sm:text-6xl font-heading font-extrabold text-gray-900 dark:text-white mb-8 tracking-tight">
          Hi, I’m <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Tushar</span>
        </h1>

        {/* Role Switcher */}
        <h2 className="relative z-10 text-xl sm:text-3xl font-mono font-semibold mb-4 text-gray-800 dark:text-gray-300 flex flex-col sm:flex-row items-center gap-2">
          <span className="inline-block">I am a</span>
          <span className="text-3xl sm:text-4xl font-heading font-extrabold text-indigo-600 dark:text-indigo-400 animate-pulse inline-flex items-center gap-2">
            <ScrambleText words={["🎨 UI/UX Designer", "💻 Web Developer", "🤖 Prompt Engineer"]} delay={2500} />
          </span>
        </h2>

        {/* Quote */}
        <p className="relative z-10 text-lg sm:text-lg font-body text-gray-700 dark:text-dark-muted max-w-2xl mb-2 leading-relaxed">
          “I think like a designer, build like a dev, and automate like an AI-native.”
        </p>
      </section>

      {/* <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700" /> */}
      <About />
      {/* <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700" /> */}
      <CertificationsSection />
      {/* <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700" /> */}
      <Skills />
      {/* <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700" /> */}
      <Projects />
      {/* <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700" /> */}
      <Resume />
      {/* <div className="w-full h-[1px] bg-gray-300 dark:bg-gray-700" /> */}
      <Contact />
    </>
  );
};


const ScrambleText = ({ words, delay }) => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [isScrambling, setIsScrambling] = useState(true);

  useEffect(() => {
    let timeout;

    const scramble = (target) => {
      setIsScrambling(true);
      let i = 0;

      const scrambleInterval = setInterval(() => {
        const scrambled = target
          .split("")
          .map((char, idx) =>
            idx < i ? char : String.fromCharCode(33 + Math.random() * 94)
          )
          .join("");

        setText(scrambled);
        i++;

        if (i > target.length) {
          clearInterval(scrambleInterval);
          setIsScrambling(false);
        }
      }, 90);
    };

    scramble(words[index]);
    timeout = setTimeout(() => setIndex(i => (i + 1) % words.length), delay);
    return () => clearTimeout(timeout);
  }, [index, words, delay]);

  return (
    <span className={`${isScrambling ? "font-mono" : "font-heading"} text-indigo-500 dark:text-indigo-400`}
    > {text} </span>
  );
};

export default Home;