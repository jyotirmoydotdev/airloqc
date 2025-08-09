import Image from "next/image";
import { BiUpload, BiShield } from "react-icons/bi";
import { BsStars, BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsYoutube, BsArrowRight, BsCheck2Circle } from "react-icons/bs";
import { FaEthereum, FaFacebookF, FaLock, FaUserShield } from "react-icons/fa";
import { GoUpload, GoShield, GoZap } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { SiSolidity } from "react-icons/si";
import { HiSparkles, HiLightningBolt } from "react-icons/hi";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <NavBar />
      <HeroSection />
      <BentoGrid />
      <SocialLinksSection />
    </div>
  );
}

function NavBar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-white">
            Air<span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">LOQC</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#solution" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Solution
            </a>
            <a href="#how-it-works" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              How it Works
            </a>
            <a href="#team" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Team
            </a>
            <a href="#docs" className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Docs
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="hidden sm:block text-gray-300 hover:text-white transition-colors">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <div className="relative pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-8">
            <HiSparkles className="text-purple-400" />
            <span className="text-sm text-gray-300">Keyless Zero-Knowledge Authentication</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            <span className="text-white">Secure</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text">
              Web3
            </span>
            <br />
            <span className="text-white">Without</span>{" "}
            <span className="text-transparent bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text">
              Keys
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            Revolutionary keyless zero-knowledge proof technology that eliminates private keys 
            while providing unmatched security and privacy for Web3 applications.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-xl flex items-center gap-2">
              Start Building
              <BsArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="text-gray-300 px-8 py-4 rounded-full font-semibold border border-gray-700 hover:border-gray-500 hover:text-white transition-all duration-200">
              View Documentation
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400">Security Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-400">Faster Auth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-2">0</div>
              <div className="text-gray-400">Private Keys</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="px-6 pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Main Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {/* Problem Statement - Large Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4 text-red-400 text-4xl">⚠️</div>
            <h3 className="text-2xl font-bold text-white mb-4">The Problem</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Current authentication systems expose users to unnecessary risks, demanding excessive personal data 
              when only simple verification is needed.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Data Overexposure</h4>
                  <p className="text-gray-400 text-sm">Authentication flows demand IDs, photos, biometrics when verifiers only need yes/no answers</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Security Breaches</h4>
                  <p className="text-gray-400 text-sm">Centralized data centers are prime targets for hackers and quantum threats</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="text-white font-semibold mb-1">User Friction</h4>
                  <p className="text-gray-400 text-sm">Password resets, OTP loops, and KYC re-runs create poor user experience</p>
                </div>
              </div>
            </div>
          </div>

          {/* Zero Knowledge Feature */}
          <div className="bg-gradient-to-br from-purple-500/10 to-blue-500/10 border border-purple-500/20 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-purple-500/20 rounded-full"></div>
            <BiShield className="text-purple-400 text-3xl mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Zero-Knowledge Proofs</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Verify credentials without revealing any personal information
            </p>
          </div>

          {/* Keyless Authentication */}
          <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 border border-green-500/20 rounded-3xl p-6 relative overflow-hidden">
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500/20 rounded-full"></div>
            <FaLock className="text-green-400 text-3xl mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Keyless Security</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              No private keys to lose or manage - biometric-based authentication
            </p>
          </div>

          {/* Solution Overview - Large Card */}
          <div className="lg:col-span-2 bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <BsCheck2Circle className="text-green-400 text-3xl" />
              <h3 className="text-2xl font-bold text-white">Our Solution</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              AirLOQC's revolutionary keyless zero-knowledge proof technology addresses every major authentication problem.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-black/20 rounded-2xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">95%</div>
                <div className="text-gray-400 text-sm">Fewer wallet hacks</div>
              </div>
              <div className="bg-black/20 rounded-2xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">10x</div>
                <div className="text-gray-400 text-sm">Faster authentication</div>
              </div>
              <div className="bg-black/20 rounded-2xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">100%</div>
                <div className="text-gray-400 text-sm">Data privacy</div>
              </div>
              <div className="bg-black/20 rounded-2xl p-4">
                <div className="text-green-400 font-bold text-lg mb-1">∞</div>
                <div className="text-gray-400 text-sm">Quantum resistant</div>
              </div>
            </div>
          </div>

          {/* How It Works - Wide Card */}
          <div className="lg:col-span-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">How AirLOQC Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Biometric Enrollment</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Securely register using advanced cryptographic techniques that never store actual biometrics
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">ZK Verification</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Authenticate using zero-knowledge proofs without revealing personal information
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Instant Access</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get immediate access to Web3 applications with one biometric verification
                </p>
              </div>
            </div>
          </div>

          {/* Quantum Resistance */}
          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-6">
            <HiLightningBolt className="text-cyan-400 text-3xl mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Quantum Resistant</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Future-proof security against quantum computing threats
            </p>
          </div>

          {/* Seamless UX */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-3xl p-6">
            <GoZap className="text-yellow-400 text-3xl mb-4" />
            <h3 className="text-lg font-bold text-white mb-2">Seamless UX</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              One-click authentication across all Web3 applications
            </p>
          </div>

          {/* Team Section */}
          <div className="lg:col-span-2 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Our Team</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  AJ
                </div>
                <h4 className="text-white font-semibold text-sm">Alex Johnson</h4>
                <p className="text-gray-400 text-xs">CEO & Founder</p>
                <p className="text-gray-500 text-xs mt-1">Ex-Ethereum Foundation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  SC
                </div>
                <h4 className="text-white font-semibold text-sm">Sarah Chen</h4>
                <p className="text-gray-400 text-xs">CTO</p>
                <p className="text-gray-500 text-xs mt-1">Ex-Consensys</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  MW
                </div>
                <h4 className="text-white font-semibold text-sm">Marcus Williams</h4>
                <p className="text-gray-400 text-xs">Head of Cryptography</p>
                <p className="text-gray-500 text-xs mt-1">PhD Cryptography</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-3">
                  ER
                </div>
                <h4 className="text-white font-semibold text-sm">Emily Rodriguez</h4>
                <p className="text-gray-400 text-xs">Research Lead</p>
                <p className="text-gray-500 text-xs mt-1">PhD MIT</p>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="lg:col-span-2 bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">FAQ</h3>
            <div className="space-y-4">
              <div className="border-b border-gray-700/50 pb-3">
                <h4 className="text-white font-semibold text-sm mb-2">What is keyless authentication?</h4>
                <p className="text-gray-400 text-xs">Biometric-based system using ZK-proofs for secure, keyless access</p>
              </div>
              <div className="border-b border-gray-700/50 pb-3">
                <h4 className="text-white font-semibold text-sm mb-2">How private is zero-knowledge proof?</h4>
                <p className="text-gray-400 text-xs">Mathematically guaranteed privacy - we verify without seeing data</p>
              </div>
              <div>
                <h4 className="text-white font-semibold text-sm mb-2">Which blockchains are supported?</h4>
                <p className="text-gray-400 text-xs">Ethereum, Polygon, Arbitrum, zkSync, and all EVM-compatible chains</p>
              </div>
            </div>
            <button className="mt-4 text-purple-400 text-sm hover:text-purple-300 transition-colors">
              View all FAQs →
            </button>
          </div>

        </div>

        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Build the Future of Web3 Authentication?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of developers building secure, keyless applications with AirLOQC's 
            zero-knowledge proof technology.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-xl">
              Start Building Today
            </button>
            <button className="text-purple-400 px-8 py-4 rounded-full font-semibold border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-200">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLinksSection() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <BsTwitter />,
      url: "https://twitter.com/airloqc",
      color: "hover:bg-blue-400",
      description: "Follow us for updates"
    },
    {
      name: "LinkedIn",
      icon: <BsLinkedin />,
      url: "https://linkedin.com/company/airloqc",
      color: "hover:bg-blue-600",
      description: "Connect professionally"
    },
    {
      name: "Instagram",
      icon: <BsInstagram />,
      url: "https://instagram.com/airloqc",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      description: "See our latest designs"
    },
    {
      name: "GitHub",
      icon: <BsGithub />,
      url: "https://github.com/airloqc",
      color: "hover:bg-gray-700",
      description: "Explore our code"
    },
    {
      name: "YouTube",
      icon: <BsYoutube />,
      url: "https://youtube.com/@airloqc",
      color: "hover:bg-red-600",
      description: "Watch tutorials"
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com/airloqc",
      color: "hover:bg-blue-700",
      description: "Join our community"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Connected
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow us on social media for the latest updates on Web3 privacy technology, 
            zero-knowledge proof innovations, and blockchain security developments.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-2xl p-6 text-center group-hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center text-2xl text-white transition-all duration-300 ${social.color}`}>
                  {social.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Get the latest news on Web3 privacy, zero-knowledge proof updates, and exclusive technical insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-white">
              Air<span className="text-purple-400">LOQC</span>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 AirLOQC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  const problems = [
    {
      title: "Current Situation",
      description: "Current authentication flows demand IDs, photos, biometrics, and account numbers when the verifier often only needs a yes or a no. It leaves you exposed and makes compliance a headache.",
      icon: "🔍"
    },
    {
      title: "Security Threats", 
      description: "National Identity Cards like Social Security Card and Adhaar misuse stories and large data leaks show how centralized data centers are often targeted and thus are not the way moving forward.",
      icon: "🛡️"
    },
    {
      title: "The Hassle",
      description: "Password resets, OTP loops, and KYC re-runs are slow and expensive. The industry is moving to passwordless but most passkey flows still reveal more than is strictly necessary.",
      icon: "⚠️"
    },
    {
      title: "Future Threats",
      description: "There are ongoing researches and developing technologies like Quantum Cryptanalysis which pose a threat to data banks and can cause massive data breaches.",
      icon: "🔮"
    }
  ];

  return (
    <div className="py-20 border-t border-gray-800/50">
      <div className=" mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          The{" "}
          <span className="text-transparent bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text">
            Problem
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl">
          Traditional authentication systems are fundamentally broken, exposing users to unnecessary risks 
          while creating friction in digital experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {problems.map((problem, index) => (
          <div key={index} className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">{problem.icon}</div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-4">
                  {problem.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-4">
            It's Time for a Revolutionary Solution
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            AirLOQC's keyless zero-knowledge proof technology addresses these fundamental problems, 
            providing secure, private, and user-friendly authentication for the Web3 era.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
            Discover Our Solution
          </button>
        </div>
      </div>
    </div>
  );
}

function SocialLinksSection() {
  const socialLinks = [
    {
      name: "Twitter",
      icon: <BsTwitter />,
      url: "https://twitter.com/airloqc",
      color: "hover:bg-blue-400",
      description: "Follow us for updates"
    },
    {
      name: "LinkedIn",
      icon: <BsLinkedin />,
      url: "https://linkedin.com/company/airloqc",
      color: "hover:bg-blue-600",
      description: "Connect professionally"
    },
    {
      name: "Instagram",
      icon: <BsInstagram />,
      url: "https://instagram.com/airloqc",
      color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500",
      description: "See our latest designs"
    },
    {
      name: "GitHub",
      icon: <BsGithub />,
      url: "https://github.com/airloqc",
      color: "hover:bg-gray-700",
      description: "Explore our code"
    },
    {
      name: "YouTube",
      icon: <BsYoutube />,
      url: "https://youtube.com/@airloqc",
      color: "hover:bg-red-600",
      description: "Watch tutorials"
    },
    {
      name: "Facebook",
      icon: <FaFacebookF />,
      url: "https://facebook.com/airloqc",
      color: "hover:bg-blue-700",
      description: "Join our community"
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Stay{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Connected
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Follow us on social media for the latest updates on Web3 privacy technology, 
            zero-knowledge proof innovations, and blockchain security developments.
          </p>
        </div>

        {/* Social Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-2xl p-6 text-center group-hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gray-700 flex items-center justify-center text-2xl text-white transition-all duration-300 ${social.color}`}>
                  {social.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
                <p className="text-gray-400 text-sm">{social.description}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 text-center mb-16">
          <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Get the latest news on Web3 privacy, zero-knowledge proof updates, and exclusive technical insights delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
            />
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-white">
              Air<span className="text-purple-400">LOQC</span>
            </div>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Documentation</a>
              <a href="#" className="hover:text-white transition-colors">Support</a>
            </div>
            <div className="text-gray-400 text-sm">
              © 2025 AirLOQC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

