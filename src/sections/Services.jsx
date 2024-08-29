import { ServiceCard } from "../components/ServiceCard";
import { services } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Services = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.6 }}
      className="max-container flex justify-center flex-wrap gap-9"
    >
      {services.map((service) => (
        <ServiceCard key={service.label} {...service} />
      ))}
    </motion.section>
  );
};

export default Services;
