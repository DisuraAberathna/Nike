import { PopulerProductCard } from "../components/PopulerProductCard";
import { products } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const PopulerProducts = () => {
  return (
    <section id="products" className="max-container  max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <motion.h2
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="text-4xl font-palanquin font-bold"
        >
          Our <span className="text-coral-red">Popular</span> Products
        </motion.h2>
        <motion.p
          variants={fadeIn("down", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="lg:max-w-lg mt-2 text-slate-gray"
        >
          Experience top-notch quality abd style with our sought-after
          selections. Discover a world of comfort, design, and value.
        </motion.p>
      </div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14"
      >
        {products.map((product) => (
          <PopulerProductCard key={product.name} {...product} />
        ))}
      </motion.div>
    </section>
  );
};

export default PopulerProducts;
