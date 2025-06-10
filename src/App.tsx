import React, { useState, useEffect } from 'react';
import { 
  Code2, 
  Database, 
  Shield, 
  Server, 
  GitBranch, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink,
  ChevronDown,
  Terminal,
  Cloud,
  Cpu,
  Lock,
  Zap,
  Target,
  Briefcase,
  User,
  Star,
  ArrowRight,
  Github,
  Linkedin,
  Globe,
  Workflow,
  Image
} from 'lucide-react';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const technologies = [
    { name: 'Python', icon: Terminal, category: 'Language' },
    { name: 'FastAPI', icon: Zap, category: 'Framework' },
    { name: 'MongoDB', icon: Database, category: 'Database' },
    { name: 'Keycloak', icon: Shield, category: 'Auth' },
    { name: 'OAuth2', icon: Lock, category: 'Security' },
    { name: 'Docker', icon: Server, category: 'DevOps' },
    { name: 'n8n', icon: Workflow, category: 'Automation' },
    { name: 'ComfyUI', icon: Image, category: 'AI Tools' },
    { name: 'GitHub', icon: GitBranch, category: 'Version Control' }
  ];

  const projectFeatures = [
    'User & Admin Registration Systems',
    'Team & Player Management APIs',
    'Role-Based Access Control (Player, Captain, Owner)',
    'Keycloak Token-Based Authentication (OAuth2)',
    'Password & Email Verification',
    'Season and Tournament Management',
    'Profile Image Upload Support',
    'Real-time WebSocket Integration',
    'n8n Workflow Automation Integration'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-white font-bold text-xl">Rakesh Algot</div>
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('about')} className="text-white/80 hover:text-white transition-colors">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-white/80 hover:text-white transition-colors">Experience</button>
              <button onClick={() => scrollToSection('skills')} className="text-white/80 hover:text-white transition-colors">Skills</button>
              <button onClick={() => scrollToSection('contact')} className="text-white/80 hover:text-white transition-colors">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className={`max-w-4xl mx-auto text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
              <img 
                src={`${import.meta.env.BASE_URL}my-image.png`} 
                alt="Rakesh Algot - Backend Developer"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              Rakesh Algot
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-blue-200 mb-6">
              Backend Developer & System Architect
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Building secure, scalable backend systems at <span className="text-blue-300 font-semibold">Yensi Solutions</span>. 
              Passionate about clean architecture, performance optimization, and emerging technologies.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={() => scrollToSection('experience')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 hover:shadow-lg hover:shadow-blue-500/25"
            >
              View My Work <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="border border-white/30 hover:border-white/50 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Get In Touch
            </button>
          </div>

          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-white/60 hover:text-white transition-colors"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <User className="w-12 h-12 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Professional Journey</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                Since August 2024, I've been architecting robust backend systems at Yensi Solutions, 
                specializing in FastAPI, MongoDB, and Keycloak. My focus is on building secure, 
                scalable applications that power seamless user experiences.
              </p>
              <p className="text-white/80 leading-relaxed">
                I believe that great backend systems are the silent heroes of exceptional user experiences. 
                Clean architecture, well-documented APIs, and optimized performance are at the core of everything I build.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <Target className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Future Vision</h3>
              <p className="text-white/80 leading-relaxed mb-6">
                I'm expanding my expertise into AI and Data Science, combining my backend strength 
                with machine learning, vector databases, and data engineering. The intersection of 
                scalable systems and intelligent data processing excites me.
              </p>
              <p className="text-white/80 leading-relaxed">
                Currently building my DevOps capabilities with Kubernetes, CI/CD pipelines, 
                and cloud-native architectures to create truly modern, resilient systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Briefcase className="w-8 h-8 text-blue-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">Backend Developer</h3>
                <p className="text-blue-200">Yensi Solutions • August 2024 - Present</p>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-xl font-semibold text-white mb-4">Key Project: HPGL - Hyper Performance Golf League</h4>
              <p className="text-white/80 leading-relaxed mb-6">
                Led backend development for a comprehensive golf tournament management platform, 
                architecting secure, scalable APIs that handle complex user hierarchies, 
                team management, and real-time tournament coordination.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  Core Responsibilities
                </h5>
                <ul className="space-y-3">
                  {projectFeatures.map((feature, index) => (
                    <li key={index} className="text-white/80 flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h5 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-400" />
                  Technical Implementation
                </h5>
                <div className="space-y-4">
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/80 leading-relaxed">
                      <strong className="text-white">Security:</strong> Implemented Keycloak token-based authentication 
                      with OAuth2, ensuring enterprise-grade security across all endpoints.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/80 leading-relaxed">
                      <strong className="text-white">Performance:</strong> Optimized MongoDB queries and 
                      implemented efficient data structures for real-time user interactions.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/80 leading-relaxed">
                      <strong className="text-white">Architecture:</strong> Built modular, maintainable APIs 
                      with FastAPI and Pydantic for robust data validation.
                    </p>
                  </div>
                  <div className="bg-white/5 rounded-lg p-4">
                    <p className="text-white/80 leading-relaxed">
                      <strong className="text-white">Automation:</strong> Integrated n8n for backend workflow 
                      automation and orchestration, streamlining complex business processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technologies & Skills</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building modern, secure, and scalable backend systems
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {technologies.map((tech, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group"
              >
                <tech.icon className="w-10 h-10 text-blue-400 mb-4 group-hover:text-blue-300 transition-colors" />
                <h4 className="text-white font-semibold text-lg mb-2">{tech.name}</h4>
                <p className="text-white/60 text-sm">{tech.category}</p>
              </div>
            ))}
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Cpu className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Backend Expertise</h3>
              <ul className="text-white/80 space-y-2">
                <li>• RESTful API Design</li>
                <li>• Database Optimization</li>
                <li>• Keycloak Authentication</li>
                <li>• Performance Tuning</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Cloud className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">DevOps & Automation</h3>
              <ul className="text-white/80 space-y-2">
                <li>• Containerization (Docker)</li>
                <li>• Workflow Automation (n8n)</li>
                <li>• CI/CD Pipelines</li>
                <li>• Cloud Deployment</li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20">
              <Zap className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">AI & Emerging Tech</h3>
              <ul className="text-white/80 space-y-2">
                <li>• AI Image/Video Generation (ComfyUI)</li>
                <li>• Machine Learning</li>
                <li>• Vector Databases</li>
                <li>• Data Engineering</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-black/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-white/80 text-lg">
              Looking for a backend engineer who builds systems that scale, secure themselves, and just work? 
              Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                    <Mail className="w-6 h-6 text-blue-400" />
                    <span>rakesh.algot@example.com</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                    <Phone className="w-6 h-6 text-green-400" />
                    <span>+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-4 text-white/80 hover:text-white transition-colors">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <span>India</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 hover:scale-110">
                    <Github className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 hover:scale-110">
                    <Linkedin className="w-6 h-6 text-white" />
                  </a>
                  <a href="#" className="bg-white/10 hover:bg-white/20 p-4 rounded-lg transition-all duration-300 hover:scale-110">
                    <Globe className="w-6 h-6 text-white" />
                  </a>
                </div>
                
                <div className="mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/60 text-sm leading-relaxed">
                    Open to discussing exciting opportunities in backend development, 
                    system architecture, and emerging technologies. Let's build something amazing together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-white/20">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/60">
            © 2024 Rakesh Algot. Crafted with passion for clean code and beautiful design.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;