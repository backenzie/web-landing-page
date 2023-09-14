import { BiCopyright } from "react-icons/Bi";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { LiaMapMarkerAltSolid } from "react-icons/lia";
import "./styles.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="cttft">
        <a
          href="https://www.instagram.com/vcprestadora/"
          target="blank"
          className="lg"
        >
          <AiOutlineInstagram className="icon" /> Nosso Instagram
        </a>

        <a className="lg" href="mailto:vcprestadorams@gmail.com" target="blank">
          <TfiEmail className="icon" /> vcprestadorams@gmail.com
        </a>
        <a
          href="https://www.google.com/maps/place/R.+Ant%C3%B4nio+Sarubbi,+80+-+Vila+Belo+Horizonte,+Campo+Grande+-+MS,+79090-180/@-20.4761684,-54.6435383,17z/data=!3m1!4b1!4m6!3m5!1s0x9486e6660dc0b499:0x2aec6ef2e75a898d!8m2!3d-20.4761684!4d-54.6435383!16s%2Fg%2F11fy4h7vxf?entry=ttu"
          target="blank"
        >
          <LiaMapMarkerAltSolid className="icon" /> Rua Antônio Sarubbi, Vila
          Belo Horizonte Nº 80
        </a>
        <a
          target="blank"
          href="https://api.whatsapp.com/send?phone=+55+67996926186&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20site%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os"
          className="lg"
        >
          <BsWhatsapp className="icon" /> Faça um orçamento, entre em contato ou
          Trabalhe conosco
        </a>
        <p>
          <BiCopyright /> Você Prestadora de serviços - Todos os Direitos
          Reservados
        </p>
      </div>
    </footer>
  );
};
