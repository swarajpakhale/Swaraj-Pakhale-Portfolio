import React from 'react';
import { SectionWrapper } from '../hoc';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-8 bg-none">
      <div className="container mx-auto flex justify-center items-center gap-6">
        <a
          href="https://github.com/swarajpakhale"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-400 hover:text-white transition-colors"
        >
          <FaGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/swaraj-pakhale-877059386/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-400 hover:text-[#0A66C2] transition-colors"
        >
          <FaLinkedin size={22} />
        </a>
        <a
          href="https://leetcode.com/u/TrackerBhai/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="text-gray-400 hover:text-[#FFA116] transition-colors font-bold text-sm"
        >
          LeetCode
        </a>
        <a
          href="https://www.geeksforgeeks.org/profile/swarajpame9b/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GeeksforGeeks"
          className="text-gray-400 hover:text-[#2F8D46] transition-colors font-bold text-sm"
        >
          GFG
        </a>
        <a
          href="mailto:swarajpakhale2@gmail.com"
          aria-label="Email"
          className="text-gray-400 hover:text-[#915eff] transition-colors font-bold text-sm"
        >
          Email
        </a>
      </div>
      <div className="mt-4 text-center text-secondary text-sm">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Swaraj Pakhale. All rights reserved.
        </p>
        <p className="mb-2 text-xs text-gray-400">
          Nagpur, Maharashtra, India &bull; B.Tech Computer Technology (YCCE)
        </p>
      </div>
    </footer>
  );
};

export default SectionWrapper(Footer, "footer");
