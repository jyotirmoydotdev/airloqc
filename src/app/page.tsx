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
        Book Demo
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
          Your AI-Powered{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Design
          </span>{" "}
          Assistant
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
          Unlock your creative potential. Seamlessly generate, customize, and
          perfect your designs with cutting-edge AI technology.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-row gap-4 justify-start items-center">
          <button className="bg-gradient-to-r from-purple-500 via-purple-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
            Get Started
          </button>
          <button className="text-gray-300 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 hover:text-white transition-all duration-200">
            View Examples
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
      icon: <SiSolidity />,
      name: "Solidity",
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
      title: "Upload Brief",
      description:
        "Share your project details and set our AI agents your vision.",
    },
    {
      icon: <BsStars />,
      title: "Generate Designs",
      description:
        "Watch as our AI crafts custom design ideas tailored to you.",
    },
    {
      icon: <IoIosColorPalette />,
      title: "Refine Creation",
      description: "Perfect your chosen concepts with easy-to-use AI tools.",
    },
  ];

  return (
    <div className="py-12 sm:py-20">
      <div className=" mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Unleash Your{" "}
          <span className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
            Creativity
          </span>
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl">
          Our AI-powered design studio helps you turn ideas into stunning
          designs effortlessly. Follow these simple steps to turn your vision
          into reality.
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
      bio: "Former Google AI researcher with 10+ years of experience in machine learning and product design.",
      image: "/team/alex.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      bio: "Ex-Adobe engineer specializing in creative AI tools and scalable design systems.",
      image: "/team/sarah.jpg", 
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Marcus Williams",
      role: "Head of Design",
      bio: "Award-winning designer with expertise in UX/UI and AI-assisted creative workflows.",
      image: "/team/marcus.jpg",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "AI Research Lead",
      bio: "PhD in Computer Vision from MIT, leading our breakthrough AI design generation algorithms.",
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
          We're a passionate group of designers, engineers, and AI researchers dedicated to 
          revolutionizing the creative process through cutting-edge technology.
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
            We're always looking for talented individuals who share our passion for AI and design.
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
      question: "How does AirLogC's AI design process work?",
      answer: "Our AI analyzes your brief, understands your requirements, and generates multiple design concepts using advanced machine learning algorithms. You can then refine and customize these designs using our intuitive tools."
    },
    {
      question: "What types of designs can AirLogC create?",
      answer: "AirLogC can create a wide range of designs including logos, web layouts, marketing materials, social media graphics, presentations, and more. Our AI is trained on diverse design styles and industries."
    },
    {
      question: "Do I retain full ownership of the designs created?",
      answer: "Yes, absolutely! All designs created using AirLogC belong entirely to you. We don't claim any rights to your creations, and you're free to use them commercially without any restrictions."
    },
    {
      question: "Can I collaborate with my team on designs?",
      answer: "Yes! AirLogC offers robust collaboration features. You can invite team members, share designs, get feedback, and work together in real-time on your creative projects."
    },
    {
      question: "How accurate is the AI in understanding my design requirements?",
      answer: "Our AI has been trained on millions of design examples and achieves high accuracy in interpreting design briefs. The more detailed your brief, the better the results. You can always refine and adjust the output."
    },
    {
      question: "What file formats can I export my designs in?",
      answer: "You can export your designs in multiple formats including PNG, JPG, PDF, SVG, and AI files. We support both web-optimized and print-ready formats to suit your needs."
    },
    {
      question: "Is there a free trial available?",
      answer: "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can create up to 50 designs during your trial period."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing plans based on your usage needs. Plans start from $14.99/month for individuals, with team and enterprise options available. All plans include unlimited revisions."
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
          Got questions about AirLogC? We've got answers! Here are the most common questions 
          from our users about our AI-powered design platform.
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
            Can't find the answer you're looking for? Our support team is here to help you get started.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-lg">
              Contact Support
            </button>
            <button className="text-purple-400 px-8 py-3 rounded-lg font-semibold border border-purple-500 hover:bg-purple-500 hover:text-white transition-all duration-200">
              Schedule Demo
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
          Follow us on social media for the latest updates, design inspiration, 
          and behind-the-scenes content from the AirLogC team.
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
          Get the latest news, design tips, and exclusive insights delivered straight to your inbox.
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

