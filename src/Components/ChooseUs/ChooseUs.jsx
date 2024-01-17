import "./ChooseUs.scss";
import Wrapper from "../Wrapper/Wrapper";
import chooseHero from "../../Assets/Images/chooseUs.svg";

const ChooseUs = () => {
  return (
    <section className="choose">
      <Wrapper>
        <h4>A parceria que eleva seu <b>sucesso</b> empresarial!</h4>
        <div className="choose__container">
          <div className="choose__left">
            <img src={chooseHero} alt="" className="img-1" />
          </div>

          <div className="choose__right">
            <h3 className="choose__right-title"><b>Porque escolher a Capibaribe Consultoria?</b></h3>
            <p className="choose__right--text">
              A Capibaribe Consultoria é sua parceira de sucesso. Nossa
              abordagem centrada no cliente e expertise excepcional estão
              prontas para impulsionar o seu empreendimento. Junte-se a nós para
              alcançar novos horizontes com confiança e inovação.
            </p>

            <div className="choose__points-container">
                <div className="choose__point">
                    <div className="choose__point-icon">
                        <div>1</div>
                    </div>
                    <div className="choose__point-text">Tradição e Experiência</div>
                </div>
                <div className="choose__point">
                    <div className="choose__point-icon">
                        <div>2</div>
                    </div>
                    <div className="choose__point-text">Profissionais Qualificados</div>
                </div>
                <div className="choose__point">
                    <div className="choose__point-icon">
                        <div>3</div>
                    </div>
                    <div className="choose__point-text">Resultados Concretos</div>
                </div>
                <div className="choose__point">
                    <div className="choose__point-icon">
                        <div>4</div>
                    </div>
                    <div className="choose__point-text">Inovação Constante</div>
                </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ChooseUs;
