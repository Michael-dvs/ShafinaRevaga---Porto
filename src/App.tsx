import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Phone, Briefcase, GraduationCap, Award, CheckCircle2, ChevronRight, Menu, X } from 'lucide-react';

export default function App() {
  const navItems = ['Home', 'About', 'Experience', 'Skills', 'Contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-cream selection:bg-apricot selection:text-ink">
      {/* Dynamic Background Texture (Dot Grid) - Adds professional precision feel */}
      <div 
        className="fixed inset-0 z-0 opacity-[0.03] pointer-events-none" 
        style={{ backgroundImage: 'radial-gradient(#2c2c2c 1px, transparent 1px)', backgroundSize: '32px 32px' }} 
      />

      {/* Scroll Progress Bar */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-apricot to-peach origin-left z-[60]" style={{ scaleX }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-md border-b border-apricot/30">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#home" className="font-display font-bold text-2xl tracking-tight text-ink">
            SR<span className="text-apricot">.</span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-medium text-ink-light hover:text-ink transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-ink hover:bg-apricot/10 rounded-full transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-cream border-b border-apricot/30 overflow-hidden"
            >
              <div className="flex flex-col p-6 gap-4">
                {navItems.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-lg font-medium text-ink py-2 border-b border-apricot/10 last:border-0"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="home" className="min-h-[90vh] flex items-center relative overflow-hidden">
          <motion.div 
            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-light-pink/40 blur-3xl -z-10" 
          />
          <motion.div 
            animate={{ scale: [1, 1.2, 1], x: [0, 20, 0] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] rounded-full bg-peach/40 blur-3xl -z-10" 
          />
          
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left pt-2 md:pt-0 order-2 md:order-1"
            >
              <div className="inline-block px-4 py-2 rounded-full bg-apricot/20 text-ink-light text-sm font-medium mb-6">
                Accounting & Finance Graduate
              </div>
              <h1 className="text-4xl md:text-7xl font-bold leading-tight mb-6">
                Hello, I'm <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-ink to-ink-light">
                  Shafina Revaga
                </span>
              </h1>
              <p className="text-lg text-ink-light mb-8 max-w-lg leading-relaxed mx-auto md:mx-0">
                A disciplined young professional with high attention to detail. Experienced in data analysis and managing financial administration accurately.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                <a href="#contact" className="px-8 py-4 bg-ink text-cream rounded-full font-medium hover:bg-ink-light hover:scale-105 transition-all flex items-center gap-2 shadow-lg shadow-ink/20">
                  Contact Me <ChevronRight size={18} />
                </a>
                <a href="#experience" className="px-8 py-4 bg-white/50 border border-apricot/30 text-ink rounded-full font-medium hover:bg-white hover:scale-105 transition-all text-center">
                  View Experience
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative mb-8 md:mb-0 order-1 md:order-2"
            >
                <div className="rounded-full md:rounded-[2rem] bg-white/50 overflow-hidden relative shadow-2xl shadow-apricot/20 max-w-sm mx-auto w-64 md:w-full aspect-square md:aspect-[3/4]">
                <img 
                  src="img\Profile.png"
                  alt="Shafina Revaga" 
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
                </div>
              {/* Floating Badge */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="hidden md:flex absolute -bottom-6 -left-6 bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-xl shadow-ink/5 items-center gap-4 border border-white/50"
              >
                <div className="w-12 h-12 rounded-full bg-apricot/20 flex items-center justify-center text-ink">
                  <Briefcase size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">1+ Years</p>
                  <p className="text-sm text-ink-light">Work Experience</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 md:py-24 bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-4xl font-bold mb-6">About Me</h2>
                <p className="text-ink-light leading-relaxed mb-6 text-lg">
                  I am an Accounting graduate dedicated to accuracy and efficiency. With over 1 year of internship experience, I am accustomed to working in professional environments that demand precision.
                </p>
                <p className="text-ink-light leading-relaxed text-lg">
                  My ability to analyze data and use various financial software enables me to deliver optimal and reliable results.
                </p>
              </motion.div>

              <div className="space-y-8">
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-cream p-6 md:p-8 rounded-3xl border border-apricot/20 hover:border-apricot/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-light-pink flex items-center justify-center">
                      <GraduationCap size={20} className="text-ink" />
                    </div>
                    <h3 className="text-xl font-bold">Education</h3>
                  </div>
                  <h4 className="font-semibold text-lg">SMK Negeri 10 Jakarta</h4>
                  <p className="text-ink-light mb-2">Institutional Accounting and Finance (2020 - 2023)</p>
                  <div className="inline-block px-3 py-1 bg-white rounded-full text-sm font-medium text-ink">
                    Average Grade: 85.9
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-cream p-6 md:p-8 rounded-3xl border border-apricot/20 hover:border-apricot/50 transition-colors"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-peach flex items-center justify-center">
                      <Award size={20} className="text-ink" />
                    </div>
                    <h3 className="text-xl font-bold">Certifications</h3>
                  </div>
                  <h4 className="font-semibold text-lg">Certificate of Competency</h4>
                  <p className="text-ink-light">KKNI Level II Institutional Accounting and Finance</p>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
              <p className="text-ink-light text-lg">My professional career journey so far.</p>
            </motion.div>

            <div className="space-y-12">
              {/* Experience 1 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-6 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-1 md:text-right mb-4 md:mb-0 pt-1">
                    <span className="text-sm font-bold text-ink-light uppercase tracking-wider">Jan 2024 - Present</span>
                  </div>
                  <div className="md:col-span-4 relative">
                    <div className="absolute -left-8 md:-left-6 top-1.5 w-4 h-4 rounded-full bg-apricot border-4 border-cream z-10" />
                    <div className="absolute -left-6 md:-left-4 top-4 bottom-[-3rem] w-px bg-apricot/30" />
                    
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-apricot/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-1">Tax Assistant</h3>
                      <h4 className="text-lg text-ink-light mb-4">Reanda Bernardi - PT Tridaya Partners</h4>
                      <ul className="space-y-3">
                        {['Identified tax objects meticulously.', 'Calculated & reported Income Tax Article 21 and Unification.', 'Managed client VAT accurately and on time.'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-ink-light">
                            <CheckCircle2 size={18} className="text-apricot shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Experience 2 */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative pl-6 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 gap-8 items-start">
                  <div className="md:col-span-1 md:text-right mb-4 md:mb-0 pt-1">
                    <span className="text-sm font-bold text-ink-light uppercase tracking-wider">Jan - Mar 2022</span>
                  </div>
                  <div className="md:col-span-4 relative">
                    <div className="absolute -left-8 md:-left-6 top-1.5 w-4 h-4 rounded-full bg-peach border-4 border-cream z-10" />
                    
                    <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-apricot/10 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                      <h3 className="text-2xl font-bold mb-1">Administration Staff (Internship)</h3>
                      <h4 className="text-lg text-ink-light mb-4">BNN - National Narcotics Board</h4>
                      <ul className="space-y-3">
                        {['Sorted incoming and outgoing mail.', 'Entered data into the website system with high accuracy.', 'Responsible for writing meeting minutes.'].map((item, i) => (
                          <li key={i} className="flex items-start gap-3 text-ink-light">
                            <CheckCircle2 size={18} className="text-peach shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 md:py-24 bg-white/50">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Skills</h2>
              <p className="text-ink-light text-lg">A combination of technical and interpersonal skills.</p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-cream p-6 md:p-10 rounded-[2rem] border border-apricot/20"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Ms. Office', 'DJP Online', 'E-Faktur', 'Data Analysis', 'Financial Administration'].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="px-6 py-3 bg-white rounded-full font-medium shadow-sm border border-apricot/10 hover:border-apricot hover:shadow-md transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-light-pink/30 p-6 md:p-10 rounded-[2rem] border border-light-pink"
              >
                <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {['Detail Oriented & Accurate', 'Teamwork', 'Problem Solving', 'Discipline', 'Good Communication'].map((skill, index) => (
                    <motion.div 
                      key={skill} 
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                      viewport={{ once: true }}
                      className="px-6 py-3 bg-white rounded-full font-medium shadow-sm border border-light-pink/50 hover:border-light-pink hover:shadow-md transition-all cursor-default"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
              <p className="text-ink-light text-lg mb-12 max-w-2xl mx-auto">
                Interested in discussing collaboration opportunities? Feel free to contact me via the details below.
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                <a href="mailto:sfrevaga.13@gmail.com" className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-apricot/10 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-full bg-light-pink flex items-center justify-center mb-4">
                    <Mail size={24} className="text-ink" />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-ink-light text-sm">sfrevaga.13@gmail.com</p>
                </a>

                <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-apricot/10 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-full bg-peach flex items-center justify-center mb-4">
                    <Phone size={24} className="text-ink" />
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-ink-light text-sm">0857-1076-9930</p>
                </div>

                <div className="flex flex-col items-center p-8 bg-white rounded-3xl shadow-sm border border-apricot/10 hover:shadow-md hover:-translate-y-1 transition-all">
                  <div className="w-14 h-14 rounded-full bg-apricot/40 flex items-center justify-center mb-4">
                    <MapPin size={24} className="text-ink" />
                  </div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-ink-light text-sm">Jl. Cipinang Tengah No. 22</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-apricot/20 text-center text-ink-light text-sm">
        <p>&copy; {new Date().getFullYear()} Shafina Revaga. All rights reserved.</p>
      </footer>
    </div>
  );
}
