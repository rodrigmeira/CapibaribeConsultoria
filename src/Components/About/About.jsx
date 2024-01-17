import Wrapper from "../Wrapper/Wrapper";
import AbImg1 from "../../Assets/Images/aboutImg.svg";
import "../About/About.scss";

const About = () => {
  return (
    <section className="about">
      <Wrapper className="about__container">
        <div className="about__left">
          <img src={AbImg1} alt="" className="img-1" />
        </div>

        <div className="about__right">
          <h1 className="about__right--title">
            Conheça a Capibaribe Consultoria
          </h1>
          <p className="about__right--subtitle">
            Nascida no Recife, junto ao emblemático rio Capibaribe, nossa
            consultoria é fruto de séculos de desenvolvimento econômico e
            inspiração na Era da Informação. Guiada por uma geração conectada à
            tecnologia, navegamos nos mercados local e global, enfrentando
            desafios com sustentabilidade, governança e responsabilidade social.
          </p>
          <p className="about__right--subtitle">
            Venha conosco nessa jornada única, onde <b>honramos</b> nossas raízes
            históricas e buscamos um <b>futuro inovador</b>.
          </p>

          <div className="about__btn-container">
            <a href="#" className="button-secondary">
              Saiba mais
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
