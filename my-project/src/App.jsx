import React, { useState } from 'react';
import { 
  Trophy, 
  Target, 
  Users, 
  Activity, 
  ArrowRight, 
  Medal, 
  HeartHandshake, 
  Mail, 
  MapPin,
  Menu,
  X
} from 'lucide-react';

const Navigation = ({ currentPage, setCurrentPage }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About the Founder' }
  ];

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <div className="bg-orange-600 p-2 rounded-lg">
              <Activity className="h-6 w-6 text-white" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase italic">
              Active<span className="text-orange-500">Youth</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  currentPage === item.id 
                    ? 'text-orange-500 border-b-2 border-orange-500 pb-1' 
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-6 py-2.5 rounded-md font-bold uppercase tracking-wider text-sm transition-all duration-300 shadow-[0_0_15px_rgba(234,88,12,0.4)] hover:shadow-[0_0_20px_rgba(234,88,12,0.6)]">
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setCurrentPage(item.id);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-3 text-sm font-bold uppercase tracking-wider rounded-md ${
                  currentPage === item.id ? 'bg-slate-900 text-orange-500' : 'text-slate-300 hover:bg-slate-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const HomePage = () => {
  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img 
            src="https://images.unsplash.com/photo-1518605368461-1ee7e550c604?auto=format&fit=crop&q=80&w=2000" 
            alt="Kids playing sports" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-orange-500/20 text-orange-400 font-bold tracking-wider uppercase text-sm mb-6 border border-orange-500/30">
            Non-Profit Organization
          </span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic leading-tight">
            Leveling the <br /> <span className="text-orange-500">Playing Field</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-10 font-medium leading-relaxed max-w-2xl mx-auto">
            Active Youth Athletics provides underprivileged communities with the gear, coaching, and safe facilities necessary to empower the next generation of athletes and leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-md font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center group">
              Our Programs <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase italic mb-4">Our Core Mission</h2>
            <div className="h-1.5 w-24 bg-orange-500 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
              We tackle inequality in sports through a three-pronged approach, ensuring that no child is ever turned away from the game due to financial barriers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Medal className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Equipment Grants</h3>
              <p className="text-slate-600 leading-relaxed">
                Cleats, pads, and balls are expensive. We distribute high-quality, professional-grade equipment directly to community centers and local youth leagues so kids can play safely.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Users className="h-7 w-7 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Elite Coaching</h3>
              <p className="text-slate-600 leading-relaxed">
                We partner with former collegiate athletes who volunteer to run weekend clinics. These mentors teach fundamentals, sportsmanship, and life skills on and off the field.
              </p>
            </div>

            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <HeartHandshake className="h-7 w-7 text-emerald-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 uppercase tracking-wide">Safe Facilities</h3>
              <p className="text-slate-600 leading-relaxed">
                A safe place to play is crucial. We fund the revitalization of neglected community parks and concrete lots, turning them into vibrant, well-lit spaces for athletic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">12k+</div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-sm">Athletes Supported</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">45</div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-sm">Fields Revitalized</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">35k</div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-sm">Items Donated</div>
            </div>
            <div>
              <div className="text-5xl font-black text-orange-500 mb-2">250</div>
              <div className="text-slate-400 font-bold uppercase tracking-wider text-sm">Volunteer Mentors</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutPage = () => {
  return (
    <div className="animate-in fade-in duration-500 bg-slate-50 min-h-screen pb-24">
      {/* Header Banner */}
      <div className="bg-slate-900 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-black text-white uppercase italic tracking-tight">
          Meet the <span className="text-orange-500">Playmaker</span>
        </h1>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
          
          {/* Profile Image */}
          <div className="md:w-2/5 h-96 md:h-auto relative">
            <img 
              src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?auto=format&fit=crop&q=80&w=800" 
              alt="John Rafael Garcia on the football pitch" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent md:hidden"></div>
          </div>

          {/* Biography Content */}
          <div className="md:w-3/5 p-8 md:p-12">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-700 px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider mb-6">
              <Trophy className="h-4 w-4" />
              <span>Founder & Head Coach</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 uppercase italic">John Rafael Garcia</h2>
            <h3 className="text-lg text-slate-500 font-bold mb-8 uppercase tracking-wide border-b border-slate-100 pb-4">Lifelong Football Player & Sports Advocate</h3>
            
            <div className="space-y-5 text-slate-600 leading-relaxed">
              <p>
                For John Rafael Garcia, the football pitch wasn't just a place to play—it was a classroom, a sanctuary, and the foundation of his character. Growing up in a working-class neighborhood, resources were scarce, but his passion for sports was limitless. With a worn-out football and unyielding determination, he learned early on that teamwork and discipline could overcome almost any obstacle.
              </p>
              <p>
                John's raw talent on the gridiron eventually earned him a collegiate scholarship, allowing him to play football at a highly competitive level. While football holds a special place in his heart, John is a devout lover of all athletics, recognizing the universal language that sports speak to young minds. 
              </p>
              <p>
                After concluding his playing career, John realized a harsh reality: the modern pay-to-play model of youth sports was leaving thousands of talented, eager kids on the sidelines. Driven by a desire to give back to the community that raised him, he founded <strong className="text-slate-900">Active Youth Athletics</strong>.
              </p>
              <p>
                Today, John dedicates his life to coaching, mentoring, and fiercely advocating for equitable access to sports equipment and facilities. He believes that every child deserves the chance to learn how to fall, how to get back up, and how to fight for the teammate standing next to them.
              </p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-16 bg-orange-600 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
          <Target className="absolute -top-10 -right-10 h-64 w-64 text-orange-500 opacity-50 transform rotate-12" />
          <div className="relative z-10">
            <p className="text-2xl md:text-3xl font-black italic uppercase leading-tight max-w-3xl mx-auto">
              "Athletics bridge the gap between where a kid is today and where they have the potential to be tomorrow. We aren't just building athletes; we are building leaders."
            </p>
            <p className="mt-8 font-bold text-orange-200 tracking-wider uppercase">— John Rafael Garcia</p>
          </div>
        </div>

      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <Activity className="h-5 w-5 text-orange-500" />
            <span className="font-black text-xl tracking-tighter uppercase italic text-white">
              Active<span className="text-orange-500">Youth</span>
            </span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Empowering the next generation through sports. Providing gear, coaching, and safe spaces for kids to play.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Contact</h4>
          <div className="space-y-3 text-sm">
            <p className="flex items-center"><Mail className="h-4 w-4 mr-2 text-orange-500" /> team@activeyouth.org</p>
            <p className="flex items-center"><MapPin className="h-4 w-4 mr-2 text-orange-500" /> 123 Athletic Way, Metro City</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold uppercase tracking-wider mb-4">Support</h4>
          <p className="text-sm mb-4">Your donation helps put gear in the hands of kids who need it most.</p>
          <button className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded font-bold text-sm transition-colors border border-slate-700">
            Partner With Us
          </button>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-slate-900 text-center text-sm">
        &copy; {new Date().getFullYear()} Active Youth Athletics. All rights reserved.
      </div>
    </footer>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow">
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'about' && <AboutPage />}
      </main>

      <Footer />
    </div>
  );
}