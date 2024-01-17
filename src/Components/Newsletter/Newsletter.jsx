import Wrapper from "../Wrapper/Wrapper";
import "./Newsletter.scss";
import News from "../../Assets/Images/newsletter.svg";

const Newsletter = () => {
  return (
    <section id="contact" className="newsletter">
      <Wrapper className="newsletter__container">
        <div className="newsletter__left">
          <img src={News} alt="" />
        </div>

        <div className="newsletter__right">
          <h3>Quer transformar o seu negócio?</h3>
          <p>
            {" "}
            Fique por dentro de todas as <b>novidades</b> da Capibaribe
            Consultoria!
          </p>

          <form
            action="https://api.sheetmonkey.io/form/huHCfxo5kBy5exGUM77h1K"
            method="post"
          >
            <label>
              Nome: <input type="text" name="Name" required autoComplete="off" />
            </label>
            <label>
              Email: <input type="email" name="Email" required autoComplete="off" />
            </label>
            <input
              type="hidden"
              name="Created"
              value="x-sheetmonkey-current-date-time"
            />
            <button className="button-primary" type="submit" value="Sign Up">Enviar</button>
          </form>
        </div>
      </Wrapper>
    </section>
  );
};

export default Newsletter;
