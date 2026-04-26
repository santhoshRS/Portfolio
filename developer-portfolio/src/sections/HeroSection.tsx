import { motion } from 'framer-motion';
import { FaDownload, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profileImage from '../../public/Profile-New.jpeg';
import { personalInfo } from '../data/portfolioData';

const HeroSection: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-[#03050B] text-white">
      <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#07171F] via-transparent to-transparent" />
      <div className="absolute right-0 top-20 h-96 w-96 rounded-full bg-emerald-500/20 blur-3xl" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-3 mb-4">
              <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">Hello, I am</p>
              <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg text-emerald-300 font-semibold">{personalInfo.title}</p>
            </div>

            <p className="max-w-xl text-gray-300 leading-relaxed text-lg">
              {personalInfo.summary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 mb-3">
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-7 py-3 text-sm font-semibold text-black transition hover:bg-emerald-400"
              >
                Contact
              </button>
              <a
                href={personalInfo.resumePath}
                download
                className="inline-flex items-center justify-center rounded-full border border-emerald-500 px-7 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                <FaDownload className="mr-2" /> Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:border-emerald-500 hover:text-white"
              >
                <FaLinkedin /> LinkedIn
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:border-emerald-500 hover:text-white"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm text-gray-200 transition hover:border-emerald-500 hover:text-white"
              >
                <FaEnvelope /> Email
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative rounded-[2rem] border border-white/10 bg-[#0C1320] shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)]">
              <div className="absolute inset-x-0 -top-8 mx-auto h-32 w-32 rounded-full bg-emerald-500/25 blur-2xl" />
              <div className="relative overflow-hidden rounded-[1.5rem] bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="relative h-[340px] overflow-hidden rounded-[1.5rem] bg-[#111827]">
                  <img
                    src={profileImage}
                    alt="Santhosh Raai profile"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
              </div>
            </div>

            <div className="relative mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-3xl border border-emerald-500/20 bg-[#061018] p-5 text-center shadow-xl shadow-emerald-500/5">
                <p className="text-3xl font-bold text-white">12+</p>
                <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Years</p>
                <p className="text-xs text-gray-500">Experience</p>
              </div>
              <div className="rounded-3xl border border-emerald-500/20 bg-[#061018] p-5 text-center shadow-xl shadow-emerald-500/5">
                <p className="text-3xl font-bold text-white">20+</p>
                <p className="text-sm uppercase tracking-[0.24em] text-gray-400">Projects</p>
                <p className="text-xs text-gray-500">Delivered</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;