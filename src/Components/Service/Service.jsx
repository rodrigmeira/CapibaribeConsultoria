import "./Service.scss";
import Wrapper from "../Wrapper/Wrapper";
import Cont from "../../Assets/Images/Contabilidade.svg";
import Eco from "../../Assets/Images/Economia.svg";
import Licit from "../../Assets/Images/Licitacoes.svg";
import Terc from "../../Assets/Images/TerceiroSetor.svg";

const Service = () => {
  return (
    <section id="services" className="features">
      <Wrapper>
        <div className="features__text">
          <h3>Nossos Serviços</h3>
          <p>
            Soluções Personalizadas para Impulsionar Seu Negócio: Conheça a
            Diversidade de Expertise da Capibaribe Consultoria
          </p>
        </div>

        <div className="features__container">
          <div className="features__feature dark-feature">
            <img src={Cont} alt="Contabilidade" />
            <h4 className="dark-feature-title">Contabilidade e Auditoria</h4>
            <p>
              Desvendando os Números: Explorando as Complexidades da
              Contabilidade e Auditoria para Tomadas de Decisão Estratégicas
            </p>
            <button className="button-outline-2">Saiba mais</button>
          </div>

          <div className="features__feature white-feature">
            <img src={Eco} alt="Economia" />
            <h4 className="white-feature-title">Economia e Finanças</h4>
            <p>
              Desenvolvendo Estratégias Financeiras para Alavancar o Seu Sucesso
              Empresarial
            </p>
            <button className="button-outline">Saiba mais</button>
          </div>

          <div className="features__feature white-feature">
            <img src={Licit} alt="Licitação" />
            <h4 className="white-feature-title">Licitações e Contratos</h4>
            <p>
              Navegando pelos Trâmites de Licitações e Contratos com Eficiência
              e Transparência
            </p>
            <button className="button-outline">Saiba mais</button>
          </div>

          <div className="features__feature dark-feature">
            <img src={Terc} alt="Terceiro" />
            <h4 className="dark-feature-title">Terceiro Setor</h4>
            <p>
              Comprometidos com o Terceiro Setor: Desenvolvimento Sustentável e
              Impacto Social Positivo
            </p>
            <button className="button-outline-2">Saiba mais</button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Service;
