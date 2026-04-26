import { motion } from 'framer-motion';
import { FaPalette, FaLaptopCode, FaWordpressSimple } from 'react-icons/fa';

const AboutSection: React.FC = () => {
  const services = [
    {
      icon: <FaPalette className="text-emerald-400" size={24} />,
      title: 'Design Skills',
      description: 'Creating clean, modern UX and polished interfaces that feel premium and easy to navigate.'
    },
    {
      icon: <FaLaptopCode className="text-emerald-400" size={24} />,
      title: 'Full-Stack Developer',
      description: 'Building reliable end-to-end applications with .NET, React, and cloud-ready architecture.'
    },
    {
      icon: <FaWordpressSimple className="text-emerald-400" size={24} />,
      title: 'Platform Strategy',
      description: 'Delivering optimized web solutions that balance performance, usability, and scalability.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-[#06080F] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-sm uppercase tracking-[0.4em] text-emerald-400">What I Do</p>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">My Services</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.12 }}
              viewport={{ once: true }}
              className="rounded-[2rem] border border-white/10 bg-[#0B1120] p-8 shadow-[0_20px_60px_-40px_rgba(0,0,0,0.8)]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/10 text-emerald-400">
                {service.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-300 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;