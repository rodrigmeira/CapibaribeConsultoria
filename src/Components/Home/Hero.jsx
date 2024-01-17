import { motion } from "framer-motion";
import "./Hero.scss";
import Wrapper from "../Wrapper/Wrapper";
import { Link } from "react-scroll";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, delay: 0.5 } },
  };

  const btnVariants = {
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
          <h1>Transformando Desafios em Prosperidade Empresarial</h1>
          <p className="hero__left--subtitle">
            Inovação estratégica: Moldando futuros empresariais, superando
            desafios com excelência
          </p>
          <motion.div className="hero__btn-container" variants={btnVariants}>
              <Link
                className="button-secondary"
                to="services"
                smooth={true}
                duration={500}
              >
                Conheça nossos serviços
              </Link>
              <a
                href="https://api.whatsapp.com/send?phone=5581973400191&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20solicitar%20uma%20consulta!"
                target="blank"
                className="button-outline-2"
              >
                Solicite uma consulta
              </a>
          </motion.div>
        </motion.div>
      </Wrapper>
    </motion.section>
  );
};

export default Hero;
