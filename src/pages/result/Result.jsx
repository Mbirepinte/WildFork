/* eslint-disable import/order */
import Carousel from "../../components/carousel/Carousel";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

function Result({ selectionArray, musicArea }) {

  const RMCarousel = Carousel.default? Carousel.default: Carousel;
  return (
    <motion.div
      className="result"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.75 }}
    >
      <RMCarousel selectionArray={selectionArray} musicArea={musicArea} />
    </motion.div>
  );
}

export default Result;

Result.propTypes = {
  selectionArray: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  musicArea: PropTypes.string.isRequired,
};
