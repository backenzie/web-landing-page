import imagemLogo from "../../Assets/vcLogo.png";
import mentoria from "../../Assets/mentoria.png";

import "./styles.css";

export const PageBaseBody = () => {
  return (
    <div className="container">
      <div className="divHead">
        <img
          src={imagemLogo}
          className="imgLogo"
          alt="logo com fundo branco da empresa"
        />
        <h1>Vc Prestadora de Serviços Terceirizada</h1>
      </div>
      <div className="intro">
        <h2>Sobre nós</h2>
        <br />
        <p>
          Somos uma empresa de serviços terceirizados com mais de 14 anos de
          mercado no ramo da terceirização, especializada nos serviços de
          portaria, zeladoria, serviços gerais e vigilância. Hoje atendemos mais
          de 40 edifícios, sendo em sua maioria de condomínios e escritórios,
          contamos com mais de 200 funcionários para pronto atendimento.
        </p>
        <br />
        <h2>Nossa Localização</h2>
        <br />
        <p>
          Estamos centralizados na nossa querida cidade morena, a capital
          Sul-Matgrossense, na rua Antônio sarubbi nº 80 - Vila Belo Horizonte.
          Entre em contato conosco, solicite um orçamento, venha fazer parte de
          uma empresa focada em excelência.
        </p>
      </div>

      <div className="mentoria">
        <img
          src={mentoria}
          alt="um profissional ensinando seus funcionarios dentro da empresa"
        />
        <p>
          Temos mentoria e treinamento personalizado para nossos profissionais
          melhor atende-los.
        </p>
      </div>
    </div>
  );
};
