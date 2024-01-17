import { motion } from "framer-motion";
import "./Risk.scss";
import Wrapper from "../Wrapper/Wrapper";
import { Link } from "react-scroll";

const Risk = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 1 } },
  }

  return (
    <motion.section
      className="hero"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper className="hero__container">
        <motion.div className="hero__left" variants={itemVariants}>
          <h2>Risco e Compliance</h2>
          <p className="hero__left--subtitle">Manuais CVM</p>
          <motion.div className="hero__btn-container" variants={linkVariants}>
          <ul>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Manual de Compliance
            </a>
          </li>
          <li>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Código de Conduta Ética
            </a>
          </li>
        </ul>
          </motion.div>
        </motion.div>
      </Wrapper>
    </motion.section>
  );
};

export default Risk;
