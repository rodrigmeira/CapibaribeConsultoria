import "./Workers.scss";
import Wrapper from "../Wrapper/Wrapper";
import Leo from "../../Assets/Images/Leoimg.svg";
import Manu from "../../Assets/Images/Manuimg.svg";
import Roger from "../../Assets/Images/Rogimg.svg";

const Workers = () => {
  return (
    <section className="workers">
      <Wrapper>
        <div className="workers__text">
          <h3>Nossos especialistas</h3>
          <p>
            Expertise Pioneira, Soluções Sob Medida: Conheça Nossos
            Especialistas em Ação
          </p>
        </div>

        <div className="workers__container">
            <div className="workers__card white-card">
                <img src={Leo} alt="" />
                <h4 className="white-card-title">Leonardo Ferreira</h4>
                <p>Diretor Executivo</p>
                <button className="button-outline">Saiba mais</button>
            </div>
            <div className="workers__card white-card">
                <img src={Manu} alt="" />
                <h4 className="white-card-title">Manuela Roque</h4>
                <p>Diretora de Contabilidade</p>
                <button className="button-outline">Saiba mais</button>
            </div>
            <div className="workers__card white-card">
                <img src={Roger} alt="" />
                <h4 className="white-card-title">Rogério Vieira</h4>
                <p>Diretor de Estratégia</p>
                <button className="button-outline">Saiba mais</button>
            </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Workers;
