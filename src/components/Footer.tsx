import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              
              <span className="text-2xl font-bold text-[#1a1a1a]">Adora</span>
            </div>
            <p className="text-[#4d4d4d] leading-relaxed max-w-sm">
              AI-powered ad generation that transforms your ideas into scroll-stopping visuals in seconds.
            </p>
            <div className="flex items-center gap-2 text-[#4d4d4d]">
              <Mail size={16} />
              <a href="mailto:hello@adora.ai" className="hover:text-[#3420e5] transition-colors">
                hello@adora.ai
              </a>
            </div>
          </div>
          
          {/* Explore */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#1a1a1a]">Explore</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#4d4d4d] hover:text-[#3420e5] transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4d4d4d] hover:text-[#3420e5] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4d4d4d] hover:text-[#3420e5] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4d4d4d] hover:text-[#3420e5] transition-colors">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="text-[#4d4d4d] hover:text-[#3420e5] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          
          {/* Social & Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-[#1a1a1a]">Connect</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-[#4d4d4d] hover:text-[#3420e5] hover:border-[#3420e5] transition-all duration-300"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-[#4d4d4d] hover:text-[#3420e5] hover:border-[#3420e5] transition-all duration-300"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white border border-gray-300 rounded-xl flex items-center justify-center text-[#4d4d4d] hover:text-[#3420e5] hover:border-[#3420e5] transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
            </div>
            <div className="space-y-3">
              <div className="text-sm text-[#4d4d4d] space-x-4">
                <a href="#" className="hover:text-[#3420e5] transition-colors">Terms</a>
                <a href="#" className="hover:text-[#3420e5] transition-colors">Privacy</a>
                <a href="#" className="hover:text-[#3420e5] transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-[#4d4d4d] text-sm">
            © 2024 Adora. All rights reserved. Built with ❤️ for creators everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;