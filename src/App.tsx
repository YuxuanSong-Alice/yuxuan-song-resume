
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Charts from './components/Charts';
import Skills from './components/Skills';
import Footer from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-cyan-50">
        <Header />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="main-container rounded-2xl overflow-hidden">
            <Hero />
            <Education />
            <Experience />
            <Projects />
            <Charts />
            <Skills />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
