// App.js — Error-free, optimized structure + restored Services & Portfolio designs
import React, { useCallback, useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import AdminLogin from "./pages/AdminLogin";

import {
  Menu,
  X,
  ChevronRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Send,
  MessageCircle,
  BarChart3,
  Target,
  Search,
  Smartphone,
  TrendingUp,
  Users,
} from "lucide-react";

/* ----------------------------------
   NAVIGATION + STATIC DATA
-----------------------------------*/
const NAV_ITEMS = ["home", "services", "about", "portfolio", "contact", "admin"];

const FEATURES = [
  { icon: <Target className="w-12 h-12 text-blue-600" />, title: "Result-Driven", desc: "We focus on measurable outcomes that drive your business growth." },
  { icon: <BarChart3 className="w-12 h-12 text-purple-600" />, title: "Data Analytics", desc: "Real-time analytics and insights to optimize your campaigns." },
  { icon: <Users className="w-12 h-12 text-green-600" />, title: "Expert Team", desc: "Experienced professionals dedicated to your success." },
];

const STATS = [
  { number: "500+", label: "Clients Served" },
  { number: "95%", label: "Success Rate" },
  { number: "1000+", label: "Projects Completed" },
  { number: "24/7", label: "Support Available" },
];

const SERVICES_CONST = [
  {
    icon: <Search className="w-12 h-12 text-blue-600" />,
    title: "SEO Optimization",
    description: "Increase your organic traffic with our advanced SEO strategies.",
    features: ["Keyword Research", "On-Page SEO", "Link Building", "Technical SEO"],
  },
  {
    icon: <Smartphone className="w-12 h-12 text-purple-600" />,
    title: "Social Media Marketing",
    description: "Build your brand presence across all major social platforms.",
    features: ["Content Strategy", "Community Management", "Paid Advertising", "Analytics"],
  },
  {
    icon: <Mail className="w-12 h-12 text-green-600" />,
    title: "Email Marketing",
    description: "Nurture leads and retain customers with personalized email campaigns.",
    features: ["Campaign Design", "List Segmentation", "Automation", "A/B Testing"],
  },
  {
    icon: <Target className="w-12 h-12 text-red-600" />,
    title: "PPC Advertising",
    description: "Maximize your ROI with data-driven PPC campaigns.",
    features: ["Campaign Setup", "Bid Management", "Ad Copywriting", "Performance Tracking"],
  },
  {
    icon: <BarChart3 className="w-12 h-12 text-yellow-600" />,
    title: "Content Marketing",
    description: "Create compelling content that resonates with your audience.",
    features: ["Content Strategy", "Blog Writing", "Video Production", "Infographics"],
  },
  {
    icon: <TrendingUp className="w-12 h-12 text-indigo-600" />,
    title: "Conversion Optimization",
    description: "Improve conversion rates with data-backed insights and testing.",
    features: ["A/B Testing", "User Experience", "Landing Pages", "Analytics Setup"],
  },
];

/* ----------------------------------
   HEADER & FOOTER
-----------------------------------*/
function Header({ currentPage, onNavigate }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (page) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white sticky top-0 z-50 shadow-lg">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-8 h-8" />
          <span className="text-2xl font-bold">DigiBoost</span>
        </div>

        <div className="hidden md:flex space-x-8">
          {NAV_ITEMS.map((page) => (
            <button
              key={page}
              onClick={() => handleNav(page)}
              className={`capitalize hover:text-yellow-300 transition ${currentPage === page ? "text-yellow-300 font-semibold" : ""}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMobileOpen((p) => !p)} aria-label="Toggle menu">
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden bg-blue-700 px-4 pb-4">
          {NAV_ITEMS.map((page) => (
            <button key={page} onClick={() => handleNav(page)} className="block w-full text-left py-2 capitalize hover:text-yellow-300 transition">
              {page}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

function Footer({ onNavigate }) {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <TrendingUp className="w-8 h-8" />
              <span className="text-2xl font-bold">DigiBoost</span>
            </div>
            <p className="text-gray-400">Transforming businesses through innovative digital marketing strategies.</p>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              {NAV_ITEMS.map((page) => (
                <li key={page}>
                  <button onClick={() => onNavigate(page)} className="hover:text-white transition">
                    {page.charAt(0).toUpperCase() + page.slice(1)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white transition">SEO Optimization</li>
              <li className="hover:text-white transition">Social Media Marketing</li>
              <li className="hover:text-white transition">PPC Advertising</li>
              <li className="hover:text-white transition">Content Marketing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>123 Marketing Street</li>
              <li>Kolkata, WB - 700123</li>
              <li>+91 12345-67890</li>
              <li>info@digiboost.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} DigiBoost. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
}

/* Chatbot component accepts props instead of using outer scope */
function Chatbot({ open, toggle, messages, inputValue, setInputValue, onSubmit }) {
  return (
    <>
      <button
        onClick={toggle}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition z-50"
        aria-label="Open chat"
      >
        <MessageCircle className="w-6 h-6" />
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-lg shadow-2xl z-50 flex flex-col" style={{ maxHeight: "500px" }}>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">DigiBoost Assistant</span>
            </div>
            <button onClick={toggle} aria-label="Close chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-4 space-y-3" style={{ maxHeight: "350px" }}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}>
                <div className={`max-w-xs px-4 py-2 rounded-lg ${msg.type === "user" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"}`}>{msg.text}</div>
              </div>
            ))}
          </div>

          <form onSubmit={onSubmit} className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                aria-label="Chat input"
              />
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition" aria-label="Send message">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

/* -------------------------
   Page components (restored designs)
   ------------------------- */

function HomePage({ onNavigate }) {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-purple-50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">Transform Your Digital Presence</h1>
            <p className="text-xl text-gray-600 mb-8">Boost your online visibility, engage your audience, and drive conversions with our data-driven digital marketing strategies.</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => onNavigate("services")} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center">
                Explore Services <ChevronRight className="ml-2" />
              </button>
              <button onClick={() => onNavigate("contact")} className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition border-2 border-blue-600">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Why Choose DigiBoost?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {FEATURES.map((f, idx) => (
              <div key={idx} className="text-center p-6 rounded-lg hover:shadow-xl transition">
                <div className="flex justify-center mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {STATS.map((s, idx) => (
              <div key={idx}>
                <div className="text-4xl font-bold mb-2">{s.number}</div>
                <div className="text-blue-100">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

/* ----------------------------------
   ServicesPage (restored design)
-----------------------------------*/
function ServicesPage({ onNavigate }) {
  const services = [
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "SEO Optimization",
      desc: <>
    Boost your organic visibility with proven SEO <br /> strategies.
  </>,
      gradient: "from-blue-500 to-blue-700",
    },
    {
      icon: <Smartphone className="w-12 h-12 text-pink-600" />,
      title: "Social Media Marketing",
      desc: "Engage and grow your audience on all major social platforms.",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      icon: <Mail className="w-12 h-12 text-green-600" />,
      title: "Email Campaigns",
      desc: "Reach customers directly with personalized email campaigns.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <Target className="w-12 h-12 text-red-600" />,
      title: "PPC Advertising",
      desc: "Maximize ROI with precision-targeted paid campaigns.",
      gradient: "from-red-500 to-orange-600",
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-purple-600" />,
      title: "Content Marketing",
      desc: "Build trust and authority with quality content.",
      gradient: "from-purple-500 to-indigo-600",
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-yellow-600" />,
      title: "Conversion Optimization",
      desc: "Increase conversions with data-driven improvements.",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Services</h1>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          We deliver tailored digital marketing strategies designed to boost your brand’s visibility, drive engagement, and increase ROI.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((srv, i) => (
            <div key={i} className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${srv.gradient} text-white transform hover:-translate-y-2 hover:shadow-2xl transition`}>
              <div className="mb-4 flex justify-center">{srv.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{srv.title}</h3>
              <p className="text-white/90 mb-6">{srv.desc}</p>
              <button onClick={() => onNavigate("contact")} className="bg-white text-gray-800 font-semibold px-5 py-2 rounded-lg hover:bg-gray-100 transition">
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------
   PortfolioPage (restored design)
-----------------------------------*/
function PortfolioPage({ onNavigate }) {
  const projects = [
    {
      title: "E-Commerce SEO Campaign",
      client: "ShopSphere",
      gradient: "from-blue-600 to-purple-600",
      result: "+220% Organic Traffic",
    },
    {
      title: "SaaS Product Launch",
      client: "TechFlow",
      gradient: "from-indigo-500 to-blue-600",
      result: "+150% Conversions",
    },
    {
      title: "Social Media Revamp",
      client: "UrbanFit",
      gradient: "from-pink-500 to-rose-600",
      result: "+310% Engagement",
    },
    {
      title: "PPC Optimization",
      client: "AutoMart",
      gradient: "from-green-500 to-teal-600",
      result: "-45% Cost per Lead",
    },
    {
      title: "Email Rebranding",
      client: "BrightMail",
      gradient: "from-orange-500 to-red-600",
      result: "+70% CTR",
    },
    {
      title: "Content Marketing Strategy",
      client: "Insightify",
      gradient: "from-yellow-500 to-orange-500",
      result: "+120% Traffic",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Portfolio</h1>
        <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
          Explore our success stories and discover how we’ve helped businesses grow digitally through strategic marketing solutions.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <div key={i} className={`rounded-2xl overflow-hidden bg-gradient-to-br ${proj.gradient} text-white shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition`}>
              <div className="p-8 text-left space-y-3">
                <h3 className="text-2xl font-bold">{proj.title}</h3>
                <p className="text-white/80">{proj.client}</p>
                <div className="mt-4 border-t border-white/30 pt-4 flex justify-between items-center">
                  <span className="font-semibold">{proj.result}</span>
                  <BarChart3 className="w-6 h-6 text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button onClick={() => onNavigate("contact")} className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center mx-auto">
            Start Your Project <ChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}

/* ----------------------------------
   Contact Page (uses props passed from App)
-----------------------------------*/
function ContactPage({ formData, onChange, onSubmit }) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ready to grow your business? Contact us today for a free consultation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Name *</label>
                <input type="text" name="name" value={formData.name} onChange={onChange} required className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={onChange} required className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Phone</label>
                <input type="tel" name="phone" value={formData.phone} onChange={onChange} className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Company</label>
                <input type="text" name="company" value={formData.company} onChange={onChange} className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Service Interested In</label>
                <select name="service" value={formData.service} onChange={onChange} className="w-full px-4 py-3 border border-gray-900 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                  <option value="">Select a Service</option>
                  <option value="seo">SEO Optimization</option>
                  <option value="social">Social Media Marketing</option>
                  <option value="email">Email Marketing</option>
                  <option value="ppc">PPC Advertising</option>
                  <option value="content">Content Marketing</option>
                  <option value="conversion">Conversion Optimization</option>
                  <option value="all">Complete Digital Strategy</option>
                </select>
              </div>
              <div>
                <label className="block text-gray-700 mb-2 font-semibold">Message *</label>
                <textarea name="message" value={formData.message} onChange={onChange} required rows="5" className="w-full px-4 py-3 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"><Send className="mr-2 w-5 h-5" />Send Message</button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div><h3 className="font-semibold mb-1">Address</h3><p className="text-gray-600">123 Marketing Street, <br />Kolkata, WB - 700123</p></div>
                </div>
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div><h3 className="font-semibold mb-1">Phone</h3><p className="text-gray-600">+91 12345-67890</p></div>
                </div>
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-blue-600 mr-4 mt-1" />
                  <div><h3 className="font-semibold mb-1">Email</h3><p className="text-gray-600">info@digiboost.com</p></div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Business Hours</h3>
                <div className="space-y-1 text-gray-600"><p>Monday - Friday: 9:00 AM - 6:00 PM</p><p>Saturday: 10:00 AM - 4:00 PM</p><p>Sunday: Closed</p></div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold mb-3">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition"><Facebook className="w-6 h-6" /></a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition"><Twitter className="w-6 h-6" /></a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition"><Linkedin className="w-6 h-6" /></a>
                  <a href="#" className="text-blue-600 hover:text-blue-700 transition"><Instagram className="w-6 h-6" /></a>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Find Us</h2>
              <div className="w-full h-64 bg-gray-600 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2176568213847!2d-73.98823492346442!3d40.75796133522043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1699564800000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* -------------------------
   Root App
   ------------------------- */
export default function App() {
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem("isAdmin") === "true");
  const [currentPage, setCurrentPage] = useState("home");
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ type: "bot", text: "Hello! How can I help you today?" }]);
  const [chatInput, setChatInput] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", service: "", message: "" });
  const [submissionStatus, setSubmissionStatus] = useState(null);
const handleAdminLogin = () => {
  setIsAdmin(true);
  setCurrentPage("admin");
};

const handleLogout = () => {
  localStorage.removeItem("isAdmin");
  setIsAdmin(false);
  setCurrentPage("home");
};

  const navigate = useCallback((page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

const handleSubmit = async (e) => {
  e.preventDefault();

  // ✅ Load the backend URL from .env
  const API_URL = import.meta?.env?.VITE_API_URL || process.env.REACT_APP_API_URL;

  try {
    const response = await fetch(`${API_URL}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: "",
      });
    } else {
      alert("⚠️ Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
    alert("❌ Network error. Please try again later.");
  }
};


  const handleChatSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!chatInput.trim()) return;

      const userMsg = { type: "user", text: chatInput };
      setChatMessages((prev) => [...prev, userMsg]);

      // quick bot reply - simple rules (replace with server or AI later)
      setTimeout(() => {
        const input = chatInput.toLowerCase();
        let botResponse = "Thank you for your message. For detailed inquiries, please use our contact form or call +1 (555) 123-4567.";
        if (input.includes("service") || input.includes("offer")) {
          botResponse = "We offer SEO, Social Media Marketing, Content Marketing, PPC Advertising, and Email Marketing services.";
        } else if (input.includes("price") || input.includes("cost")) {
          botResponse = "Our pricing varies—please fill out our contact form or call +1 (555) 123-4567 for a custom quote.";
        } else if (input.includes("contact") || input.includes("reach")) {
          botResponse = "You can reach us at info@digiboost.com or call +1 (555) 123-4567 (Mon-Fri 9-6 EST).";
        } else if (input.includes("hello") || input.includes("hi")) {
          botResponse = "Hello! Welcome to our digital marketing agency. How can I assist you today?";
        }

        setChatMessages((prev) => [...prev, { type: "bot", text: botResponse }]);
      }, 500);

      setChatInput("");
    },
    [chatInput]
  );

  const toggleChat = useCallback(() => setChatOpen((p) => !p), []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header currentPage={currentPage} onNavigate={navigate} />

      {currentPage === "home" && <HomePage onNavigate={navigate} />}
      {currentPage === "services" && <ServicesPage onNavigate={navigate} />}
      {currentPage === "about" && <AboutPlaceholder formData={formData} onChange={handleInputChange} onSubmit={handleSubmit} />}
      {currentPage === "portfolio" && <PortfolioPage onNavigate={navigate} />}
      {currentPage === "contact" && <ContactPage formData={formData} onChange={handleInputChange} onSubmit={handleSubmit} />}
      {currentPage === "admin" && (
  isAdmin ? (
    <div>
      <div className="flex justify-end px-6 mt-6">
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          Logout
        </button>
      </div>
      <AdminDashboard />
    </div>
  ) : (
    <AdminLogin onLogin={handleAdminLogin} />
  )
)}


      <Footer onNavigate={navigate} />

      <Chatbot open={chatOpen} toggle={toggleChat} messages={chatMessages} inputValue={chatInput} setInputValue={setChatInput} onSubmit={handleChatSubmit} />

      {/* simple non-blocking submission status */}
      {submissionStatus && (
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-4 py-2 rounded shadow z-50">
          {submissionStatus === "submitted" ? "Thank you — we will contact you soon." : "Sending..."}
        </div>
      )}
    </div>
  );
}

/* -------------------------
   Note: About placeholder
   ------------------------- */
/* The original AboutPage used form handlers and formData from App.
   To avoid name collisions and keep code clear, I renamed the About export
   used inside App to AboutPlaceholder here (you can rename as needed),
   and it accepts props (formData, onChange, onSubmit) — implemented below.
*/

function AboutPlaceholder({ formData, onChange, onSubmit }) {
  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">About DigiBoost</h1>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              Founded in 2018, DigiBoost has grown from a small startup to a leading digital marketing agency serving clients worldwide. Our passion for innovation and commitment to delivering measurable results has helped over 500 businesses transform their online presence.
            </p>
            <p className="text-gray-700 mb-4">
              We believe in the power of data-driven strategies combined with creative excellence. Our team of certified experts brings together years of experience in SEO, content marketing, social media, and paid advertising to deliver comprehensive solutions that drive real business growth.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="mb-4">
              To empower businesses of all sizes to achieve their full potential in the digital landscape through innovative, ethical, and results-driven marketing strategies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Our Values</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <span><strong>Transparency:</strong> We believe in open communication and honest reporting.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <span><strong>Innovation:</strong> We stay ahead of digital trends to give you a competitive edge.</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-blue-600 mr-2 mt-1" />
                  <span><strong>Results:</strong> Your success is our success. We focus on measurable outcomes.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-3">Our Expertise</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <span>Certified Google & Facebook Partners</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <span>Award-winning creative team</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-5 h-5 text-purple-600 mr-2 mt-1" />
                  <span>Industry-leading analytics expertise</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-center">Ready to Work Together?</h2>
            <p className="text-gray-700 text-center mb-6">Let's discuss how we can help grow your business. Fill out the form below and we'll get back to you within 24 hours.</p>
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="Your Name *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
                <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="Your Email *" required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              </div>
              <input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="Phone Number" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              <input type="text" name="company" value={formData.company} onChange={onChange} placeholder="Company Name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent" />
              <select name="service" value={formData.service} onChange={onChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                <option value="">Select a Service</option>
                <option value="seo">SEO Optimization</option>
                <option value="social">Social Media Marketing</option>
                <option value="email">Email Marketing</option>
                <option value="ppc">PPC Advertising</option>
                <option value="content">Content Marketing</option>
                <option value="conversion">Conversion Optimization</option>
              </select>
              <textarea name="message" value={formData.message} onChange={onChange} placeholder="Tell us about your project *" required rows="4" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"></textarea>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"><Send className="mr-2 w-5 h-5" />Send Inquiry</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
