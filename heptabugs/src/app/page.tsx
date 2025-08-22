import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/" className="flex items-center space-x-3 transition-transform duration-300 hover:scale-105">
              <img
                src="/favicon.png"
                alt="HeptaBugs Logo"
                width={48}
                height={48}
                className="object-contain"
              />
              <span className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                HeptaBugs
              </span>
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
              <Link className="text-gray-300 hover:text-blue-400 transition-smooth font-medium relative group" href="#home">
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-smooth font-medium relative group" href="#services">
                What we do
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-smooth font-medium relative group" href="#portfolio">
                Our Work
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-smooth font-medium relative group" href="#about">
                About Us
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
              <Link className="text-gray-300 hover:text-blue-400 transition-smooth font-medium relative group" href="#contact">
                Get In Touch
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400 transition-all duration-300 group-hover:w-full" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center space-x-4">
              <Link href="#contact">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white px-6 py-2 rounded-full hover-lift focus-ring shadow-lg shadow-purple-500/25">
                  Let&apos;s Talk Business
                </button>
              </Link>
            </div>

            <button className="lg:hidden text-gray-300 hover:bg-gray-800/50 size-9 rounded-md">
              <span className="sr-only">Open menu</span>
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10" />
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          <div>
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 text-blue-200 rounded-full px-4 py-2 mb-8 text-sm font-medium">
              <span>Trusted by 5+ Companies</span>
            </div>
            <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              Build the Future with
              <span className="block text-xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                HeptaBugs
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              We build intelligent software solutions that transform businesses. From machine learning to automation, we make AI work for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link href="#contact">
                <button className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full hover-lift focus-ring group shadow-lg shadow-blue-500/25">
                  Start Your Project
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </Link>
              <Link href="#portfolio">
                <button className="inline-flex items-center justify-center gap-2 border-2 border-blue-400/50 text-blue-200 hover:bg-blue-500/20 backdrop-blur-sm px-8 py-4 text-lg font-semibold rounded-full transition-smooth bg-transparent">
                  View Our Work
                </button>
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-2xl mx-auto mb-16">
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">12+</div>
                <div className="text-gray-400 text-sm font-medium">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">97%</div>
                <div className="text-gray-400 text-sm font-medium">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">24/7</div>
                <div className="text-gray-400 text-sm font-medium">Support Available</div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-blue-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-blue-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Our Technology Stack</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We leverage modern technologies to build high-performance, secure, and future-ready solutions. Designed to scale effortlessly, they evolve with your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend",
                color: "text-blue-600",
                items: [
                  "React",
                  "Next.js",
                  "Vue.js",
                  "TypeScript",
                  "Tailwind CSS",
                  "Svelte",
                  "Remix",
                  "Astro",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
                ),
              },
              {
                title: "Backend",
                color: "text-green-600",
                items: [
                  "Node.js",
                  "Python",
                  "PostgreSQL",
                  "MongoDB",
                  "GraphQL",
                  "Django",
                  "FastAPI",
                  "tRPC",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                ),
              },
              {
                title: "Cloud & DevOps",
                color: "text-purple-600",
                items: [
                  "AWS",
                  "Vercel",
                  "Docker",
                  "Kubernetes",
                  "CI/CD",
                  "Azure",
                  "Google Cloud",
                  "Terraform",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>
                ),
              },
              {
                title: "Mobile",
                color: "text-orange-600",
                items: [
                  "React Native",
                  "Flutter",
                  "iOS",
                  "Android",
                  "PWA",
                  "SwiftUI",
                  "Kotlin Multiplatform",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
                ),
              },
              {
                title: "AI & ML",
                color: "text-red-600",
                items: [
                  "TensorFlow",
                  "PyTorch",
                  "OpenAI",
                  "Hugging Face",
                  "LangChain",
                  "Scikit-learn",
                  "RAG Pipelines",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"></path><path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"></path></svg>
                ),
              },
              {
                title: "Security",
                color: "text-indigo-600",
                items: [
                  "OAuth",
                  "JWT",
                  "SSL/TLS",
                  "Encryption",
                  "Penetration Testing",
                  "SAST/DAST",
                  "Zero Trust Security",
                ],
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-indigo-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
                ),
              },
            ].map((cat) => (
              <div key={cat.title} className="bg-white rounded-2xl p-6 shadow-lg hover-lift border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mr-4">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((i) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium hover:bg-gray-200 transition-smooth">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-8 leading-relaxed">
              Let&apos;s discuss how our AI-powered solutions can help you achieve your goals. Reach out now to get started!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full hover-lift focus-ring group">
                Start Your Project
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-white mb-2">24h</div>
                <div className="text-blue-100">Response Time</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">97%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-2">3+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-xl font-bold">HeptaBugs</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Professional software development and AI solutions that drive business growth and innovation.
              </p>
              <div className="flex space-x-4">
                <a target="_blank" href="https://www.facebook.com/share/1B2FATnBUC/?mibextid=wwXIfr" className="text-gray-400 hover:text-blue-400 transition-smooth">FB</a>
                <a target="_blank" href="https://www.linkedin.com/company/heptabugs/" className="text-gray-400 hover:text-blue-400 transition-smooth">IN</a>
                <a target="_blank" href="https://www.instagram.com/heptabugs?igsh=YjJnY3F6dzk4YWZq" className="text-gray-400 hover:text-pink-400 transition-smooth">IG</a>
                <a target="_blank" href="https://wa.me/923202127209" className="text-gray-400 hover:text-green-400 transition-smooth">WA</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Hire Engineers</h3>
              <div className="space-y-2">
                <a href="#contact" className="block text-gray-400 hover:text-white transition-smooth text-sm">Hire Rails Developers</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-smooth text-sm">Hire PHP Developers</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-smooth text-sm">Hire Python Developers</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-smooth text-sm">Hire JavaScript Developers</a>
                <a href="#contact" className="block text-gray-400 hover:text-white transition-smooth text-sm">Hire Automation Engineer</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Services</h3>
              <div className="space-y-2">
                <a href="#services" className="block text-gray-400 hover:text-white transition-smooth text-sm">Web Development</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-smooth text-sm">Mobile App Development</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-smooth text-sm">AI & Machine Learning</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-smooth text-sm">Automation Solutions</a>
                <a href="#services" className="block text-gray-400 hover:text-white transition-smooth text-sm">Custom Software Development</a>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-white font-semibold">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <span>contacts@heptabugs.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <span>+92 320 2127209</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <span>Lahore, Pakistan</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">© 2025 HeptaBugs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
