import { shoe8 } from "../assets/images";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <motion.h2
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
        >
          We Provide You
          <span className="text-coral-red inline-block mt-3">&nbsp;Super</span>
          <span className="text-coral-red inline-block mt-3">
            Quality&nbsp;
          </span>
          Shoes
        </motion.h2>
        <motion.p
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-4 lg:max-w-lg info-text"
        >
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </motion.p>
        <motion.p
          variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-6 lg:max-w-lg info-text"
        >
          Our dedication to detail and excellence ensures your satisfaction
        </motion.p>
        <motion.div
          variants={fadeIn("right", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-11"
        >
          <Button label="View Details" />
        </motion.div>
      </div>

      <motion.div
        className="flex-1 flex justify-center items-center"
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
      >
        <img
          src={shoe8}
          alt="Shoe 8"
          width={570}
          height={522}
          className="object-contain"
        />
      </motion.div>
    </section>
  );
};
