import { CheckCircle, BookOpen, Users, MapPin, Phone, Mail, ArrowRight, Star, Award } from 'lucide-react';
import Image from 'next/image';
import { getNetlifyContext } from 'utils';

export const metadata = {
  title: 'Bucks County SAT Prep'
};

const sampleImage = '/images/bucks.jpg';

const ctx = getNetlifyContext();
const forceWebP = ctx === 'dev';
const sampleImageSrcSet = [640, 1280, 2048]
  .map((size) => {
      return `/.netlify/images?url=${sampleImage}&w=${size}${forceWebP ? '&fm=webp' : ''} ${size}w`;
  })
  .join(', ');
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-blue-100">
      {/* --- NAVIGATION --- */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tight text-blue-900 flex items-center gap-2">
            <Image src="/images/bucks-sat-logo-removebg-preview.png" alt="Bucks County SAT Prep logo" className="h-12 w-12" width={32} height={32} />
            Bucks County SAT Prep
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
            <a href="#about" className="hover:text-blue-600 transition-colors">About</a>
            <a href="#tutors" className="hover:text-blue-600 transition-colors">Our Tutors</a>
            <a href="#services" className="hover:text-blue-600 transition-colors">Services</a>
            <a href="mailto:benjamin.wang32808@gmail.com" className="px-5 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
              Book a Session
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden min-h-[600px]">
        {/* Background Image */}
        <div className="inset-0 -z-10">
          <div className="absolute inset-0 w-full h-full">
            <div className="relative w-full h-full">
              <Image
                src="/images/BUCKS2.jpg"
                priority
                fill
                className="object-cover"
                sizes="100vw"
                alt="Bucks County landscape"
                quality={90}
              />
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10"></div>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm text-blue-700 text-sm font-semibold mb-8 border border-blue-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Accepting New Students for Fall 2025
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-tight drop-shadow-lg">
            We don't just teach the SAT. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-200">
              We just crushed it.
            </span>
          </h1>
          
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
            Forget outdated strategies from 20 years ago, and get tutored by high schoolers who know exactly what the modern digital SAT looks like.  We just took it, and scored in the top 0.01%.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="mailto:benjamin.wang32808@gmail.com" className="w-full sm:w-auto px-8 py-4 bg-blue-900 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-900/50">
              Get Started
              <ArrowRight className="h-5 w-5" />
            </a>
            <a href="#tutors" className="w-full sm:w-auto px-8 py-4 bg-white/95 backdrop-blur-sm border border-white/20 text-slate-700 rounded-xl font-semibold hover:bg-white transition-all shadow-lg">
              Meet the Tutors
            </a>
          </div>

          {/* Trust Badges */}
          <div className="mt-16 pt-8 border-t border-white/20 grid grid-cols-2 md:grid-cols-4 gap-8 text-white/90 font-medium text-sm">
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>1500+ Avg Score</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Digital SAT Experts</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Bucks County Local</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Peer-to-Peer Logic</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- VALUE PROP --- */}
      <section id="about" className="py-24 bg-slate-50 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Why hire a high schooler?
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600">
                  <Award className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Recent Experience</h3>
                  <p className="text-slate-600">Most tutors took the SAT decades ago. We took the new Digital SAT within the last year. We know the current traps, the new format, and the pressure.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="h-12 w-12 shrink-0 rounded-lg bg-purple-100 flex items-center justify-center text-purple-600">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Relatable Teaching</h3>
                  <p className="text-slate-600">We speak your child's language. No intimidation or expectation, just honest advice from a peer who has successfully navigated the exact same path.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl blur-2xl opacity-20"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-yellow-400 rounded-full p-2">
                  <Star className="h-6 w-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-lg font-medium text-slate-900 italic">
                    "My son actually listened because the tutor was his age. It wasn't just another teacher lecturing him but like a smart friend helping him out."
                  </p>
                  <p className="mt-4 text-sm font-bold text-slate-500">— Nancy L., Newtown PA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TUTORS SECTION --- */}
      <section id="tutors" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Meet Your Tutors</h2>
            <p className="text-slate-600 text-lg">Top scorers. Honor students. Ready to help.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tutor 1 */}
            <div className="group relative bg-white rounded-3xl p-2 border border-slate-100 hover:border-blue-100 transition-all hover:shadow-2xl hover:shadow-blue-900/5">
              <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                1600 SAT
              </div>
              <div className="p-8">
                <div className="h-24 w-24 bg-slate-200 rounded-full mb-6 overflow-hidden">
                    {/* Placeholder for Headshot */}
                    <img src="images/benwang.jpeg" alt="Alex" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Benjamin W.</h3>
                <p className="text-blue-600 font-medium mb-4">Senior at Council Rock High School South</p>
                <ul className="space-y-2 mb-6 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-500" /> 800/800 Math and Reading Section</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-500" /> National Merit Semifinalist</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-500" /> Four Years of Tutoring Experience</li>
                </ul>
                <p className="text-slate-500 text-sm leading-relaxed">
                  "I focus on breaking down complex math problems into simple patterns. Once you see the pattern, the test becomes easy."
                </p>
              </div>
            </div>

            {/* Tutor 2 */}
            <div className="group relative bg-white rounded-3xl p-2 border border-slate-100 hover:border-blue-100 transition-all hover:shadow-2xl hover:shadow-blue-900/5">
              <div className="absolute top-6 right-6 bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                1570 SAT
              </div>
              <div className="p-8">
                <div className="h-24 w-24 bg-slate-200 rounded-full mb-6 overflow-hidden">
                    {/* Placeholder for Headshot */}
                    <img src="images/IMG_0631.jpg" alt="Jordan" className="h-full w-full object-cover" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-1">Ibrahim C.</h3>
                <p className="text-blue-600 font-medium mb-4">Senior at Council Rock High School South</p>
                <ul className="space-y-2 mb-6 text-slate-600 text-sm">
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-500" /> 790/800 Reading/Writing</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-500" /> AP Scholar with Distinction</li>
                  <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-blue-500" /> Published Medical Researcher</li>
                </ul>
                <p className="text-slate-500 text-sm leading-relaxed">
                  "The English section isn't about memorizing vocab anymore. It's about logic and grammar rules. I teach the formula."
                </p>
              </div>
            </div>
          </div>
        </div>
            </section>

      {/* --- SERVICES --- */}
      <section id="services" className="py-24 bg-slate-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="flex flex-col h-full p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="h-12 w-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">In-Person Tutoring</h3>
              <p className="text-slate-400 mb-6 flex-grow">
                We meet at local libraries or coffee shops in the Bucks County area (Newtown, Yardley, Doylestown). Perfect for students who need direct focus and accountability.
              </p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div> 1-on-1 Attention</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div> Printed Practice Materials</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-blue-400 rounded-full"></div> Flexible Meeting Spots</li>
              </ul>
            </div>

            <div className="flex flex-col h-full p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-cyan-500 transition-colors">
              <div className="h-12 w-12 bg-cyan-600 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Online Sessions</h3>
              <p className="text-slate-400 mb-6 flex-grow">
                Convenient Zoom/Google Meet sessions. We use digital whiteboards and screen sharing to walk through problems exactly how they appear on the Digital SAT.
              </p>
              <ul className="space-y-3 text-slate-300 mb-8">
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-cyan-400 rounded-full"></div> Flexible Scheduling</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-cyan-400 rounded-full"></div> Recorded Sessions for Review</li>
                <li className="flex items-center gap-2"><div className="h-1.5 w-1.5 bg-cyan-400 rounded-full"></div> Digital Whiteboard Notes</li>
              </ul>
            </div>
          </div>
        </div>
                </section>

      {/* --- FOOTER --- */}
      <footer className="bg-white py-12 px-6 border-t border-slate-100">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-blue-900 flex items-center gap-2 justify-center md:justify-start mb-2">
            <Image src="/images/bucks-sat-logo-removebg-preview.png" alt="Bucks County SAT Prep logo" className="h-12 w-12" width={32} height={32} />
              Bucks County SAT Prep
            </div>
            <p className="text-slate-500 text-sm">Helping students achieve their dream scores.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
            <a href="tel:2155550123" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Phone className="h-5 w-5" />
              <span>(267) 984-1328</span>
            </a>
            <a href="mailto:benjamin.wang32808@gmail.com" className="flex items-center gap-2 text-slate-600 hover:text-blue-600 transition-colors">
              <Mail className="h-5 w-5" />
              <span>benjamin.wang32808@gmail.com</span>
            </a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-slate-100 text-center text-slate-400 text-xs">
          © {new Date().getFullYear()} Bucks County SAT Prep. All rights reserved.
        </div>
      </footer>
        </div>
    );
}
