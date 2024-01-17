import './Footer.scss';
import Wrapper from '../Wrapper/Wrapper';
import Logo from '../../Assets/Images/WhiteLogo.svg';
import Wpp from '../../Assets/Icons/whatsapp.svg';
import Lnkd from '../../Assets/Icons/linkedin.svg';
import Inst from '../../Assets/Icons/instagram.svg';

const Footer = () => {
    return (
      <footer>
        <Wrapper className="footer">
          <div className="footer__contact">
            <img className='footer__contact--logo' src={Logo} alt="" />
            <p className="footer__contact--info">Transformando Desafios em Oportunidades.</p>
          </div>
          <div id="clickable">
            <div className="footer__courses">
                <h3 className="footer-title">Nosso Endereço</h3>
                <div className="footer__courses__links">
                    <a href="https://maps.app.goo.gl/XBAz22uR1K3P2tZ39" target='blank'>
                        <p title='Ir até o endereço' className="footer-li">Edf. Domar - R. Eng. Ubaldo Gomes de Matos, <br/>Nº53 Sala 31, Santo Antônio, Recife - PE, 50010-580</p>
                    </a>
                </div>
            </div>
            
            <div className="footer__courses">
                <h3 className="footer-title">Links úteis</h3>
                <div className="footer__couses__links">
                    <ul className="footer-ul">
                        <li className="footer-li">Nossos Serviços</li>
                        <li className="footer-li">Sobre nós</li>
                        <li className="footer-li">Fale conosco</li>
                    </ul>
                </div>
            </div>

            <div className="footer__social">
                <h3 className="footer-title">Acompanhe-nos</h3>
                <div className="footer__social--icons">
                    <ul className="footer-icons-ul">
                        <li className="footer-icons-li"><a href="https://api.whatsapp.com/send?phone=5581973400191&text=Ol%C3%A1,%20visitei%20o%20site%20e%20gostaria%20de%20solicitar%20uma%20consulta!" target='blank'><img src={Wpp} alt="" /></a></li>
                        <li className="footer-icons-li"><a href="https://www.linkedin.com/company/capibaribe-consultoria-e-planejamento/" target='blank'><img src={Lnkd} alt="" /></a></li>
                        <li className="footer-icons-li"><a href="https://www.instagram.com/capibaribeconsultoria/" target='blank'><img src={Inst} alt="" /></a></li>
                    </ul>
                </div>
            </div>
          </div>         
        </Wrapper>
        <hr />
        <p className="copy">&copy; 2023 CAPIBARIBE CONSULTORIA LTDA - CNPJ: 48.021.484/0001-81</p>
      </footer>
    );
  };
  
  export default Footer;