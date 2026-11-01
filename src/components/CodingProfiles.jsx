import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const profiles = [
  {
    name: "GitHub",
    username: "swarajpakhale",
    url: "https://github.com/swarajpakhale",
    color: "#f0f6fc",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    username: "swaraj-pakhale",
    url: "https://www.linkedin.com/in/swaraj-pakhale-877059386/",
    color: "#0A66C2",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    name: "LeetCode",
    username: "TrackerBhai",
    url: "https://leetcode.com/u/TrackerBhai/",
    color: "#FFA116",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
      </svg>
    ),
  },
  {
    name: "GeeksforGeeks",
    username: "swarajpame9b",
    url: "https://www.geeksforgeeks.org/profile/swarajpame9b",
    color: "#2F8D46",
    icon: (
      <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
        <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 3.6c4.639 0 8.4 3.761 8.4 8.4s-3.761 8.4-8.4 8.4S3.6 16.639 3.6 12 7.361 3.6 12 3.6zm-1.8 4.2v2.4h3.6V7.8h-3.6zm0 4.8v4.2h3.6v-4.2h-3.6z" />
      </svg>
    ),
  },
];

const ProfileCard = ({ index, name, username, url, color, icon }) => {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      variants={fadeIn("up", "spring", index * 0.2, 0.75)}
      className="relative w-full sm:w-[250px] rounded-2xl p-[2px] cursor-pointer group"
    >
      {/* Rotating gradient border */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <div
          className="absolute inset-[-50%] animate-spin-slow"
          style={{
            background: `conic-gradient(from 0deg, ${color}, #915eff, #00cea8, ${color})`,
          }}
        />
      </div>

      {/* Card content */}
      <div className="relative bg-tertiary rounded-2xl p-6 flex flex-col items-center gap-4 z-10 h-full">
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundColor: `${color}20`, color: color }}
        >
          {icon}
        </div>
        <h3 className="text-white text-[20px] font-bold text-center">{name}</h3>
        <p className="text-secondary text-[14px]">@{username}</p>
        <span className="text-cyan-400 text-[13px] group-hover:underline">
          View Profile &rarr;
        </span>
      </div>
    </motion.a>
  );
};

const CodingProfiles = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My competitive coding</p>
        <h2 className={styles.sectionHeadText}>Coding Profiles.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I enjoy solving algorithmic problems and participating in competitive
        programming contests. Here are my profiles across various platforms.
      </motion.p>

      <div className="mt-10 flex flex-wrap justify-center gap-7">
        {profiles.map((profile, index) => (
          <ProfileCard key={profile.name} index={index} {...profile} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(CodingProfiles, "profiles");
