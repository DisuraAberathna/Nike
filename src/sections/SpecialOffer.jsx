import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components/Button";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <motion.div
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="flex-1"
      >
        <img
          src={offer}
          alt="Offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </motion.div>
      <div className="flex flex-1 flex-col">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg"
        >
          <span className="text-coral-red inline-block mt-3">
            Special&nbsp;
          </span>
          Offer
        </motion.h2>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-4 lg:max-w-lg info-text"
        >
          Embark on a shopping journey that redefines your experience with
          unbeatable deals. From premier selections to incredible savings, we
          offer unparalleled value that sets us apart.
        </motion.p>
        <motion.p
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-6 lg:max-w-lg info-text"
        >
          Navigate a realm of possibilities designed to fulfill your unique
          desires, surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional.
        </motion.p>
        <motion.div
          variants={fadeIn("down", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="mt-11 flex flex-wrap gap-4"
        >
          <Button label="Shop Now" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default SpecialOffer;
