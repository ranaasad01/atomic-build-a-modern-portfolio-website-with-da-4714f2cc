export const dynamic = "force-dynamic";
// API route for contact is at app/api/contact/route.ts
import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

// Inline Footer to avoid extra file
function Footer() {
  return (
    <footer className="bg-white dark:bg-[#1e293b]/50 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold mb-1">
              <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">AM</span>
              <span className="text-indigo-500">.</span>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">Full-Stack Developer &amp; UI Engineer</p>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={"#" + item.toLowerCase()}
                className="text-sm text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {[
              { label: "GitHub", href: "https://github.com/alexmorgan" },
              { label: "LinkedIn", href: "https://linkedin.com/in/alexmorgan" },
              { label: "Twitter", href: "https://twitter.com/alexmorgandev" },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 border border-slate-200 dark:border-slate-700 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400 dark:text-slate-500">
          <p>&copy; {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
