
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-12">
      <div className="max-w-[980px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Globe className="h-5 w-5 text-white/80" />
              <span className="font-medium">Varnanetra</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Revolutionizing language learning with advanced AI technology.
            </p>
          </div>
          
          <div className="col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-10">
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Products</h4>
              <ul className="space-y-3">
                <li><Link to="/features" className="text-sm hover:opacity-70 transition-opacity">Overview</Link></li>
                <li><Link to="/roleplay" className="text-sm hover:opacity-70 transition-opacity">AI Roleplay</Link></li>
                <li><Link to="/pronunciation" className="text-sm hover:opacity-70 transition-opacity">Pronunciation</Link></li>
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Pricing</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Help</a></li>
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Contact Us</a></li>
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Documentation</a></li>
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Community</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xs uppercase tracking-widest text-muted-foreground mb-5">Legal</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Terms of Service</a></li>
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:opacity-70 transition-opacity">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            Copyright © {currentYear} Varnanetra. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Sales Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
