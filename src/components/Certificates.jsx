import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { certificates } from "../constants"
import { fadeIn } from "../utils/motion"

const CertificateCard = ({ index, name, issuer, date, description, tags, image, credential_link }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", (index % 3) * 0.25, 0.75)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="w-full sm:w-[350px] flex"
    >
      <Tilt
        options={{
          max: 20,
          scale: 1.02,
          speed: 450,
        }}
        className="bg-ternary p-5 rounded-2xl gradient-border-hover w-full flex flex-col justify-between shadow-card hover:shadow-cyan-900/30 transition-all duration-300"
      >
        <div className="flex flex-col flex-1">
          {/* Uniform Certificate Preview Container */}
          <div className="relative w-full h-[220px] rounded-2xl overflow-hidden bg-[#090d24] border border-gray-800 flex items-center justify-center p-2.5">
            <img
              src={image}
              alt={name}
              loading="lazy"
              className="w-full h-full object-contain rounded-xl transition-transform duration-500 hover:scale-[1.03]"
            />
            <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
              <div
                onClick={() => window.open(credential_link, "_blank")}
                className="black-gradient w-10 h-10 rounded-full justify-center flex items-center cursor-pointer hover:border hover:border-cyan-400 transition-colors shadow-lg"
                title="View Credential"
              >
                <span className="text-white text-[15px] font-bold">🔗</span>
              </div>
            </div>
          </div>

          {/* Details with Uniform Heights & Alignment */}
          <div className="mt-5 flex-1 flex flex-col">
            <h3 className="text-white font-bold text-[20px] leading-snug min-h-[56px] flex items-center">
              {name}
            </h3>
            <p className="mt-1 text-[#f43f85] text-[13.5px] font-semibold">
              {issuer} &bull; <span className="text-gray-400 font-normal">{date}</span>
            </p>
            <p className="mt-2 text-secondary text-[13.5px] leading-relaxed line-clamp-3">
              {description}
            </p>
          </div>
        </div>

        {/* Footer: Tags and Action Link */}
        <div className="mt-5 pt-3 border-t border-gray-800/80 flex flex-col gap-3">
          <div className="flex flex-wrap gap-2 min-h-[26px]">
            {tags.map((tag) => (
              <p key={tag.name} className={`text-[12.5px] font-medium ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>

          <div className="pt-1">
            <a
              href={credential_link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-cyan-400 text-[13.5px] font-semibold hover:text-white transition-colors"
            >
              <span>View Certificate</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ type: "spring", duration: 1.25 }}
      >
        <p className={styles.sectionSubText}>My Achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Verified professional credentials, industry training, and national achievements demonstrating continuous learning across cloud architectures, backend systems, deep learning, algorithms, and full-stack software development.
        </motion.p>
      </div>

      <div className="mt-16 flex flex-wrap justify-center gap-7">
        {certificates.map((cert, index) => (
          <CertificateCard
            key={`certificate-${index}`}
            index={index}
            {...cert}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
