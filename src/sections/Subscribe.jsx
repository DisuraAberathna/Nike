import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Subscribe = () => {
  return (
    <section
      id="contact-us"
      className="max-container flex justify-center items-center max-lg:flex-col gap-10"
    >
      <motion.h3
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="text-4xl leading-[68px] lg:max-w-md font-palanquin font-bold"
      >
        Sign Up from
        <span className="text-coral-red"> Updates</span> & Newsletter
      </motion.h3>
      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="lg:max-w-[40%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full"
      >
        <input
          type="email"
          placeholder="subscribe@nike.com"
          className="input"
        />
        <div className="flex max-sm:justify-end items-center max-sm:w-full">
          <Button label="Sign Up" fullWidth />
        </div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
