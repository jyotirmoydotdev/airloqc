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
            <button className="group border border-gray-600 text-gray-300 px-8 py-4 rounded-full font-semibold hover:border-purple-500 hover:text-white transition-all duration-200 flex items-center gap-2">
              <HiLightningBolt className="text-yellow-400" />
              Live Demo
            </button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">99.9%</div>
              <div className="text-gray-400 text-sm">Security Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">10x</div>
              <div className="text-gray-400 text-sm">Faster Auth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">Zero</div>
              <div className="text-gray-400 text-sm">Data Leaks</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">Privacy</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BentoGrid() {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Problem Statement - Large Card */}
          <div className="lg:col-span-2 lg:row-span-2 bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                <FaLock className="text-white text-xl" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">The Problem</h3>
                <p className="text-red-300">Critical issues plaguing Web3 authentication today</p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Private Key Vulnerabilities</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  95% of crypto wallet hacks are due to private key theft, loss, or mismanagement. Users struggle with seed phrases, 
                  hardware wallets, and complex key management - creating massive security gaps.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  $3.8B lost to private key compromises in 2023
                </div>
              </div>

              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Privacy Invasion</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Current authentication exposes user identity, transaction history, and behavioral patterns. 
                  KYC processes demand excessive personal data that gets breached and sold.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  86% of users concerned about Web3 privacy
                </div>
              </div>

              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Poor User Experience</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Complex wallet setups, gas fees for every action, multiple confirmation steps, and inconsistent 
                  authentication across platforms create massive friction for mainstream adoption.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  76% abandon apps due to complex authentication
                </div>
              </div>
            </div>
          </div>

          {/* Solution Overview */}
          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 border border-green-500/20 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center">
                <BsCheck2Circle className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Our Solution</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              AirLOQC's keyless zero-knowledge proof system eliminates private keys while providing 
              superior security through biometric authentication and cryptographic proofs.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <BsCheck2Circle />
                <span>100% keyless authentication</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <BsCheck2Circle />
                <span>Zero data exposure</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-sm">
                <BsCheck2Circle />
                <span>One-click access</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GoZap className="text-yellow-400 text-2xl" />
              Key Features
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <BiShield className="text-blue-400 text-xl" />
                  <span className="font-semibold text-white text-sm">Zero-Knowledge Proofs</span>
                </div>
                <p className="text-gray-400 text-xs">Verify identity without revealing data</p>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaUserShield className="text-green-400 text-xl" />
                  <span className="font-semibold text-white text-sm">Biometric Security</span>
                </div>
                <p className="text-gray-400 text-xs">Your unique identity as your key</p>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <HiLightningBolt className="text-yellow-400 text-xl" />
                  <span className="font-semibold text-white text-sm">Instant Access</span>
                </div>
                <p className="text-gray-400 text-xs">Sub-second authentication</p>
              </div>
            </div>
          </div>

          {/* Team Preview */}
          <div className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Expert Team</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">AJ</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Alex Johnson</div>
                  <div className="text-gray-400 text-xs">CEO & Cryptography Expert</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">SC</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Sarah Chen</div>
                  <div className="text-gray-400 text-xs">CTO & ZK-Proof Specialist</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">MW</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Marcus Williams</div>
                  <div className="text-gray-400 text-xs">Head of Security</div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Preview */}
          <div className="bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Quick FAQ</h3>
            <div className="space-y-4">
              <details className="group">
                <summary className="text-sm font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  How secure is keyless auth?
                  <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  More secure than traditional keys as it eliminates single points of failure.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  Which blockchains supported?
                  <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Ethereum, Polygon, Arbitrum, zkSync, and all EVM-compatible chains.
                </p>
              </details>
              <details className="group">
                <summary className="text-sm font-semibold text-white cursor-pointer list-none flex items-center justify-between">
                  Easy to integrate?
                  <span className="text-indigo-400 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="text-gray-400 text-xs mt-2 leading-relaxed">
                  Simple SDK integration with just a few lines of code.
                </p>
              </details>
            </div>
          </div>

          {/* How It Works */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How AirLOQC Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Biometric Enrollment</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Securely register your biometric data using advanced cryptographic techniques that never store your actual biometrics.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Zero-Knowledge Verification</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Authenticate using ZK-proofs that verify your identity without revealing any personal information to anyone.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Instant Access</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Get immediate access to any Web3 application with one simple biometric verification - no keys, no passwords.
                </p>
              </div>
            </div>
          </div>

        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Ready to Revolutionize Web3 Authentication?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of developers and users who have already embraced keyless, 
              privacy-first authentication with AirLOQC's cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
                Start Building Today
              </button>
              <button className="text-purple-400 px-8 py-4 rounded-xl font-semibold border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-200">
                Try Live Demo
              </button>
            </div>
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
