import { ReviewCard } from "../components/ReviewCard";
import { reviews } from "../constants";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <motion.h3
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="font-palanquin text-center text-4xl font-bold"
      >
        What Our
        <span className="text-coral-red"> Customer </span>
        Says?
      </motion.h3>
      <motion.p
        variants={fadeIn("down", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="info-text m-auto mt-4 max-w-lg text-center"
      >
        Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.
      </motion.p>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.6 }}
        className="mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14"
      >
        {reviews.map((review) => (
          <ReviewCard
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default CustomerReviews;
