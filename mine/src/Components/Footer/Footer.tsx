import React, { useState } from "react";
import { FaEnvelope, FaPaperPlane } from "react-icons/fa";
import UserData from "../../Data/UserData";
import { Link } from "react-router-dom";
import SocialLinks from "../../UI/LinkIcons/SocialLinks";

const Footer: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribed(true);
    setEmail("");
    setTimeout(() => setIsSubscribed(false), 3000);
  };

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Skills", href: "/skills" },
    { name: "Experience", href: "/experience" },
    { name: "Projects", href: "/projects" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="text-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-indigo-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-200 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Newsletter Section */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 mb-12">
            <div className="text-center">
              <FaEnvelope className="text-4xl mb-4 mx-auto text-white" />
              <h3 className="text-2xl font-bold mb-4 text-white">
                Stay Updated
              </h3>
              <p className="text-indigo-100 max-w-2xl mx-auto mb-6">
                Subscribe to my newsletter for the latest updates on web
                development trends and insights.
              </p>

              {!isSubscribed ? (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="max-w-md mx-auto"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      required
                      className="flex-1 px-4 py-3 rounded-lg text-gray-900 bg-white"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-white text-indigo-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold whitespace-nowrap flex items-center justify-center gap-2"
                    >
                      <FaPaperPlane />
                      Subscribe
                    </button>
                  </div>
                </form>
              ) : (
                <div className="max-w-md mx-auto">
                  <div className="bg-green-500 text-white px-6 py-4 rounded-lg">
                    ✅ Thank you for subscribing!
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-700 bg-clip-text text-transparent">
                {UserData.name}
              </h3>
              <p className="text-gray-600 mb-6 max-w-md">
                {UserData.bannerBio.slice(0, 120)}...
              </p>
              <div className="flex gap-4">
                {UserData?.socialLinks.map((social: any, index: number) => (
                  <SocialLinks social={social} key={index} />
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-gray-600 hover:text-indigo-600 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-600">
                {UserData.contact.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <item.icon />
                    <span>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-200 mt-12 pt-8 text-center">
            <p className="text-gray-600">
              © {new Date().getFullYear()} {UserData.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
