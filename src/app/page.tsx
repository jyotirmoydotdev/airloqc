import Image from "next/image";
import { BiUpload } from "react-icons/bi";
import { BsStars, BsTwitter, BsInstagram, BsLinkedin, BsGithub, BsYoutube } from "react-icons/bs";
import { FaEthereum, FaFacebookF } from "react-icons/fa";
import { GoUpload } from "react-icons/go";
import { IoIosColorPalette } from "react-icons/io";
import { SiSolidity } from "react-icons/si";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      <div className="absolute right-0 top-0 w-96 h-96 opacity-20">
        <Image
          src="/background.jpg"
          alt="Design inspiration"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="max-w-6xl mx-auto px-4">
        <NavBar />
        <Hero />
        <TrustedBySection />
        <FeaturesSection />
        <FAQSection />
        <TeamSection />
        <SocialLinksSection />
      </div>
    </div>
  );
}

function NavBar() {
  return (
    <nav className="flex flex-row justify-between items-center py-6 px-2">
      <div className="text-2xl font-bold text-white">
        Air<span className="text-purple-400">LOQC</span>
      </div>
      <div className="hidden sm:flex flex-row items-center gap-8">
        <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
          Home
        </div>
        <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
          About
        </div>
        <div className="text-gray-300 hover:text-white cursor-pointer transition-colors">
          Team
        </div>
      </div>
      <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200">
        Book Tech Demo
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative flex flex-col items-start justify-center rounded-3xl py-12 sm:py-20 px-4 sm:px-8 overflow-hidden">

      {/* Main content */}
      <div className="relative z-10 max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
          Your Web3{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Privacy
          </span>{" "}
          Solution
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Unlock true digital privacy with AirLOQC's keyless zero-knowledge proof technology. 
          Secure, private, and decentralized authentication for the Web3 era.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-start items-center">
          <button className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
            Start Building
          </button>
          <button className="text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-all duration-200">
            Read Docs
          </button>
        </div>
      </div>
    </div>
  );
}

function TrustedBySection() {
  const logos = [
    {
      icon: <FaEthereum />,
      name: "Ethereum",
    },
    {
      icon: <SiSolidity />,
      name: "Solidity",
    },
    {
      icon: <FaEthereum />,
      name: "Polygon",
    },
    {
      icon: <SiSolidity />,
      name: "zkSync",
    },
    {
      icon: <FaEthereum />,
      name: "Arbitrum",
    },
  ];

  return (
    <div className="py-8 sm:py-16 overflow-x-scroll mx-5">
      <div className="flex justify-center items-center flex-nowrap gap-8 opacity-60">
        {logos.map((logo, index) => (
          <div key={index} className="flex flex-row gap-2">
            <div className="text-gray-400 font-semibold text-3xl">
              {logo.icon}
            </div>
            <div className="text-gray-400 hidden sm:block font-semibold text-3xl">
              {logo.name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FeaturesSection() {
  const features = [
    {
      icon: <GoUpload />,
      title: "Keyless Authentication",
      description:
        "Eliminate private key management with our innovative keyless zero-knowledge proof system.",
    },
    {
      icon: <BsStars />,
      title: "Zero-Knowledge Proofs",
      description:
        "Verify identity and transactions without revealing sensitive information or compromising privacy.",
    },
    {
      icon: <IoIosColorPalette />,
      title: "Decentralized Security",
      description: "Built on blockchain technology for maximum security, transparency, and trust.",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className=" mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Revolutionize{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Web3 Privacy
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          AirLOQC's cutting-edge keyless zero-knowledge proof technology provides 
          unparalleled security and privacy for decentralized applications and blockchain interactions.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-[rgb(40,41,43)] rounded-2xl p-8 ">
            <div className=" bg-[rgb(137,72,229)] w-fit text-2xl p-2 mb-6 rounded-full">
              {feature.icon}
            </div>
            <h3 className="text-xl font-bold mb-4 text-white">
              {feature.title}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

function TeamSection() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      bio: "Former Ethereum Foundation researcher with 10+ years of experience in cryptography and blockchain technology.",
      image: "/team/alex.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Ex-Consensys engineer specializing in zero-knowledge proofs and privacy-preserving protocols.",
      image: "/team/sarah.jpg", 
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Williams",
      role: "Head of Cryptography",
      bio: "PhD in Applied Cryptography, leading research in keyless authentication and ZK-SNARK implementations.",
      image: "/team/marcus.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Blockchain Research Lead",
      bio: "PhD in Computer Science from MIT, pioneering next-generation privacy solutions for Web3.",
      image: "/team/emily.jpg",
      linkedin: "#", 
      twitter: "#"
    }
  ];

  return (
    <div className="py-20">
      <div className=" mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Meet Our{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Team
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-3xl ">
          We're a passionate group of cryptographers, blockchain engineers, and privacy researchers dedicated to 
          building the future of secure, keyless Web3 authentication.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-[rgb(40,41,43)] rounded-2xl p-6 text-center group hover:bg-[rgb(50,51,53)] transition-all duration-300">
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
              <a 
                href={member.linkedin} 
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <span className="text-white text-sm font-bold">in</span>
              </a>
              <a 
                href={member.twitter}
                className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
              >
                <span className="text-white text-sm font-bold">tw</span>
              </a>
            </div>
          </div>
        ))}
      </div>
      
      {/* Join Team CTA */}
      <div className="text-center mt-16">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Want to Join Our Team?</h3>
          <p className="text-gray-300 mb-6">
            We're always looking for talented individuals who share our passion for Web3 privacy and blockchain innovation.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
            View Open Positions
          </button>
        </div>
      </div>
    </div>
  );
}

function FAQSection(){
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
    <div className="py-20">
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
              className="group bg-[rgb(40,41,43)] rounded-2xl p-6 hover:bg-[rgb(50,51,53)] transition-all duration-300"
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
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
          <h3 className="text-2xl font-bold text-white mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Can't find the answer you're looking for? Our technical team is here to help you understand and implement our Web3 privacy solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
              Contact Technical Support
            </button>
            <button className="text-purple-400 px-8 py-3 rounded-lg font-semibold border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-200">
              Schedule Tech Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}function SocialLinksSection() {
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
    <div className="py-20 ">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Stay{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Connected
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Follow us on social media for the latest updates on Web3 privacy technology, 
          zero-knowledge proof innovations, and blockchain security developments from the AirLOQC team.
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
            <div className="rounded-2xl p-6 text-center group-hover:scale-105 transition-all duration-300">
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl text-white transition-all duration-300 ${social.color}`}>
                {social.icon}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{social.name}</h3>
            </div>
          </a>
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Stay in the Loop</h3>
        <p className="text-gray-300 mb-6 max-w-xl mx-auto">
          Get the latest news on Web3 privacy, zero-knowledge proof updates, and exclusive technical insights delivered straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors"
          />
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg whitespace-nowrap">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-2xl font-bold text-white">
            Air<span className="text-purple-400">LOQC</span>
          </div>
          <div className="flex flex-wrap gap-6 text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Support</a>
          </div>
          <div className="text-gray-400 text-sm">
            © 2025 AirLogC. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}

