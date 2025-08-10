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
      <TeamSection />
      <FAQSection />
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
                <p className="text-red-300">Critical issues plaguing modern authentication systems</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Current Situation</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Authentication flows demand IDs, photos, biometrics, and account numbers when verifiers often only need a yes or no.
                  This leaves users exposed and makes compliance a headache for businesses.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Excessive data collection for simple verification
                </div>
              </div>

              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Security Threats</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  National Identity Cards like Social Security and Aadhaar misuse stories and large data leaks show how
                  centralized data centers are often targeted and thus are not the way moving forward.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Centralized systems are prime targets for attacks
                </div>
              </div>

              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">The Hassle</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Password resets, OTP loops, and KYC re-runs are slow and expensive. The industry is moving to passwordless
                  but most passkey flows still reveal more than is strictly necessary.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Poor UX with excessive friction and data exposure
                </div>
              </div>

              <div className="bg-red-500/10 rounded-2xl p-6 border border-red-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Future Threats</h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  Ongoing research in Quantum Cryptanalysis poses threats to data banks and can cause massive data breaches.
                  Current encryption methods will become vulnerable to quantum computing attacks.
                </p>
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                  Quantum computing threatens current security
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

            <div className="space-y-4">
              <div className="bg-green-500/10 rounded-xl p-4 border border-green-500/20">
                <h4 className="text-sm font-semibold text-white mb-2">Zero Knowledge Proof</h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Ensures enterprises receive only yes/no answers without underlying data. For age verification,
                  response is simply "Yes" or "No" without revealing exact DOB.
                </p>
              </div>

              <div className="bg-blue-500/10 rounded-xl p-4 border border-blue-500/20">
                <h4 className="text-sm font-semibold text-white mb-2">Post Quantum Cryptography</h4>
                <p className="text-gray-300 text-xs leading-relaxed">
                  Protected centralized database using PQC for key management and secure communications,
                  alongside strong encryption at rest.
                </p>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <BsCheck2Circle />
                <span>Minimal data exposure</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <BsCheck2Circle />
                <span>Quantum-resistant security</span>
              </div>
              <div className="flex items-center gap-2 text-green-400 text-xs">
                <BsCheck2Circle />
                <span>Reduced form-filling across websites</span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="md:col-span-2 lg:col-span-1 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-3xl p-6">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GoZap className="text-yellow-400 text-2xl" />
              Key Advantages
            </h3>
            <div className="grid grid-cols-1 gap-4">
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <BiShield className="text-blue-400 text-xl" />
                  <span className="font-semibold text-white text-sm">Zero-Knowledge Proofs</span>
                </div>
                <p className="text-gray-400 text-xs">Yes/No responses without revealing underlying data</p>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <FaUserShield className="text-green-400 text-xl" />
                  <span className="font-semibold text-white text-sm">Post-Quantum Security</span>
                </div>
                <p className="text-gray-400 text-xs">Protection against future quantum computing attacks</p>
              </div>
              <div className="bg-purple-500/10 rounded-xl p-4 border border-purple-500/20">
                <div className="flex items-center gap-3 mb-2">
                  <HiLightningBolt className="text-yellow-400 text-xl" />
                  <span className="font-semibold text-white text-sm">Centralized Convenience</span>
                </div>
                <p className="text-gray-400 text-xs">Reduced form-filling across multiple websites</p>
              </div>
            </div>

            <div className="mt-4 p-3 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-xl border border-purple-500/30">
              <h4 className="text-sm font-semibold text-white mb-2">Competitive Edge</h4>
              <p className="text-gray-300 text-xs leading-relaxed">
                Unlike Sedicii and Keyless, we combine ZKP privacy with post-quantum cryptography and
                centralized convenience - stronger security and better UX than single-focus approaches.
              </p>
            </div>
          </div>

          {/* How It Works */}
          <div className="lg:col-span-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6 text-center">How AirLOQC Works</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  1
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Credential Issuance</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Receive credentials from trusted issuers into a secure wallet on your device. Install a browser extension
                  linked to this wallet for seamless authentication across websites.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  2
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Zero-Knowledge Authentication</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  When authentication is requested, you receive yes/no prompts in your wallet. After 2FA verification
                  (passkey/biometric), websites get only the yes/no they need - no personal data exposed.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  3
                </div>
                <h4 className="text-lg font-semibold text-white mb-3">Quantum-Safe Security</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Your credentials stay in your wallet. Our servers store only minimal metadata with post-quantum
                  cryptography protection, ensuring security against future quantum computing threats.
                </p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-cyan-500/10 rounded-2xl p-6 border border-cyan-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Customer Experience</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Browser extension for automatic authentication</li>
                  <li>• Simple yes/no prompts instead of form filling</li>
                  <li>• 2FA protection with passkey/biometric</li>
                  <li>• Complete privacy with zero data sharing</li>
                </ul>
              </div>

              <div className="bg-blue-500/10 rounded-2xl p-6 border border-blue-500/20">
                <h4 className="text-lg font-semibold text-white mb-3">Security Framework</h4>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li>• Post-quantum cryptography by default</li>
                  <li>• Quantum Key Distribution for high-assurance links</li>
                  <li>• API-driven backend with audit logging</li>
                  <li>• OAuth/OIDC and WebAuthn integration</li>
                </ul>
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

function TeamSection() {
  const teamMembers = [
    {
      name: "Amrit Nanda",
      role: "CEO",
      bio: "Aspiring leader, SIH-qualified, with a knack for decisive, creative, and composed leadership, consistently among the top performers.",
      image: "",
      linkedin: "https://www.linkedin.com/in/amrit-nanda-118564332/",
      twitter: "Take a look at Amrit (@AmritSnanda): https://x.com/AmritSnanda?t=dQa8e7dsajgIsyBfZ6hgXg&s=08"
    },
    {
      name: "Faizaan Nasir",
      role: "CIO",
      bio: "Winner of the Interhouse Cryptography Hackathon with a strong academic record and experience in secure applications, data visualization, and cloud-based solutions.",
      image: "/team/sarah.jpg",
      linkedin: "https://www.linkedin.com/in/faizaan-nasir-b88870220/",
      twitter: ""
    },
    {
      name: "Aman Giri",
      role: "CTO",
      bio: "PhD in Applied Cryptography, leading research in keyless authentication and ZK-SNARK implementations.",
      image: "/team/marcus.jpg",
      linkedin: "https://www.linkedin.com/in/amanxgiri/",
      twitter: ""
    },
    {
      name: "Chinmaye Sharma",
      role: "COO",
      bio: "Specializing in building scalable operations, optimizing workflows, and driving growth for zero-knowledge proof ventures.",
      image: "/team/emily.jpg",
      linkedin: "https://www.linkedin.com/in/chinmaye-sharma-2b9879379/",
      twitter: ""
    },
    {
      name: "Sparsh Samaddar",
      role: "CMO",
      bio: "Background in digital marketing, community building, and developer ecosystem growth.",
      image: "/team/emily.jpg",
      linkedin: "https://www.linkedin.com/in/sparsh-samaddar-48a793309/",
      twitter: ""
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet Our{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Team
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            We're a passionate group of cryptographers, blockchain engineers, and privacy researchers dedicated to
            building the future of secure, keyless Web3 authentication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-3xl p-6 text-center group hover:bg-gray-500/20 transition-all duration-300">
              {/* Profile Image */}
              <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-r from-purple-400 to-pink-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-600 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-purple-400 font-semibold mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{member.bio}</p>
              {/* Social Links */}
              <div className="flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {member.linkedin ? <>
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <BsLinkedin className="text-white text-sm" />
                  </a>
                </> : null}
                {member.twitter ? <>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  >
                    <BsTwitter className="text-white text-sm" />
                  </a>
                </> : null}
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals who share our passion for Web3 privacy and blockchain innovation.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
              View Open Positions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const faqs = [
    {
      question: "What is keyless zero-knowledge proof authentication?",
      answer: "Our keyless ZK-proof system allows users to authenticate and interact with blockchain applications without managing private keys, while maintaining complete privacy through cryptographic proofs that verify identity without revealing sensitive information."
    },
    {
      question: "How does AirLOQC eliminate the need for private keys?",
      answer: "AirLOQC uses advanced cryptographic techniques including biometric authentication, secure multi-party computation, and zero-knowledge proofs to create a seamless authentication experience without traditional private key management."
    },
    {
      question: "Which blockchains does AirLOQC support?",
      answer: "AirLOQC is compatible with Ethereum, Polygon, Arbitrum, zkSync, and other EVM-compatible chains. We're continuously expanding support for additional blockchain networks."
    },
    {
      question: "Is my data truly private with zero-knowledge proofs?",
      answer: "Yes! Zero-knowledge proofs mathematically guarantee that your personal information remains private. We can verify your credentials or transactions without ever seeing or storing your actual data."
    },
    {
      question: "How secure is keyless authentication compared to traditional wallets?",
      answer: "Keyless authentication eliminates single points of failure associated with private key management. Our distributed approach using biometrics and cryptographic proofs provides superior security while being more user-friendly."
    },
    {
      question: "Can developers integrate AirLOQC into existing dApps?",
      answer: "Absolutely! We provide comprehensive SDKs, APIs, and documentation for seamless integration. Our authentication system can be implemented in any Web3 application with minimal code changes."
    },
    {
      question: "What happens if I lose access to my biometric data?",
      answer: "Our system includes multiple recovery mechanisms including social recovery, backup authentication methods, and secure key recovery protocols to ensure you never lose access to your digital assets."
    },
    {
      question: "Is there a cost to use AirLOQC's authentication system?",
      answer: "We offer a free tier for individual users and developers getting started. Enterprise solutions and high-volume usage have custom pricing. Gas fees for blockchain transactions apply as normal."
    }
  ];

  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              Questions
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Got questions about AirLOQC's keyless zero-knowledge proof technology? Here are the most common questions
            from developers and users about our Web3 privacy solution.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-gradient-to-br from-gray-500/10 to-slate-500/10 border border-gray-500/20 rounded-3xl p-6 hover:bg-gray-500/20 transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {faq.question}
                  </h3>
                  <div className="ml-4 flex-shrink-0">
                    <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center group-open:rotate-45 transition-transform duration-200">
                      <span className="text-white text-sm font-bold">+</span>
                    </div>
                  </div>
                </summary>
                <div className="mt-4 pt-4 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
            <p className="text-gray-300 mb-6 max-w-xl mx-auto">
              Can't find the answer you're looking for? Our technical team is here to help you understand and implement our Web3 privacy solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
                Contact Technical Support
              </button>
              <button className="text-purple-400 px-8 py-3 rounded-xl font-semibold border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-200">
                Schedule Tech Demo
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
