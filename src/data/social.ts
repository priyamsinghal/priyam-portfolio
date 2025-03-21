import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface SocialLink {
  url: string;
  icon: IconType;
}

export const socialLinks: SocialLink[] = [
  {
    url: "https://linkedin.com/in/priyamsinghal",
    icon: FaLinkedin
  },
  {
    url: "https://x.com/priyam_singhal",
    icon: FaTwitter
  }
]; 