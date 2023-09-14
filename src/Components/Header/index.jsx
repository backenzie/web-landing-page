import "./styles.css";
import logo from "../../Assets/logo2.png";
import { BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header">
      <div className="container-logo">
        <img className="logo" src={logo} alt="Logo da empresa" />
      </div>
      <nav className="nav">
        <Link to="/" className="bar wtt">
          Sobre nós
        </Link>
        <Link to="/servicos" className="bar wtt">
          Nossos Serviços
        </Link>
        <Link to="/vantagens" className="wtt">
          Vantagens
        </Link>
      </nav>
      <div className="ctt">
        <a
          target="blank"
          className="wtt"
          href="https://api.whatsapp.com/send?phone=+55+67996926186&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20site%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
        >
          Whatsapp <BsWhatsapp className="test" />
        </a>
      </div>
    </header>
  );
};
