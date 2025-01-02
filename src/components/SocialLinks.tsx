
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex gap-4 mt-6">
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Twitter className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Instagram className="w-6 h-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-white transition-colors">
        <Linkedin className="w-6 h-6" />
      </a>
    </div>
  );
};

export default SocialLinks;