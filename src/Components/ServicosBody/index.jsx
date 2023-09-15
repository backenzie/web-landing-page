import "./styles.css";
import ambientClean from "../../Assets/ambienteClean.png";
import ambientClean2 from "../../Assets/ambientClean2.png";
import limp from "../../Assets/equipeLimp.png";
import equiplimp from "../../Assets/limp2.png";
import vigi from "../../Assets/vigilanc.png";
import vigi2 from "../../Assets/vigilanc2.png";
import port from "../../Assets/portaria.png";
import portCondo from "../../Assets/portariaCondo.png";

export const ServicosBody = () => {
  return (
    <div className="cont">
      <div className="head">
        <h1>Conheça os nossos serviços</h1>
        <br />
      </div>
      <div className="aboutServices">
        <div className="content one">
          <h2>Serviços gerais</h2>
          <p>
            Serviços de limpeza em geral para o seu condomínio, deixando
            ambientes como hall, estacionamento, lixeiras e áreas de lazer com a
            limpeza desejada.
          </p>
        </div>
        <div className="content">
          <h2>Zeladoria</h2>
          <p>
            Trabalhando juntamente com as outras equipes para fazer a supervisão
            e escala dos serviços fornecidos.
          </p>
        </div>
        <div className="content">
          <h2>Portaria</h2>
          <p>
            Cuidado e zelo na entrada e saída do condomínio ou escritório, Cuida
            do fluxo de pessoas, assim como faz o contato com a casa de cada um
            de seus moradores sobre visitas de todos os tipos.
          </p>
        </div>
        <div className="content last">
          <h2>Vigilância</h2>
          <p>
            A vigilância trabalha em conjunto com a portaria, O vigia se
            assegura do trabalho bem feito dos porteiros, fazendo o controle e
            alteraçôes nescessarias na portaria.
          </p>
        </div>
      </div>
      <div className="servicos">
        <div>
          <p>Serviços Gerais</p>
          <img
            className="im"
            src={ambientClean}
            alt="imagem de um ambiente limpo"
          />
          <img
            className="im"
            src={ambientClean2}
            alt="estacionamento limpo com prédios após o estacionamento"
          />
        </div>
        <div>
          <p>Zeladoria</p>
          <img className="im" src={limp} alt="equipe de limpeza" />
          <img
            className="im"
            src={equiplimp}
            alt="equipe se preparando para limpar"
          />
        </div>

        <div className="outline">
          <p>Portaria e Vigilância</p>
          <img className="im" src={port} alt="" />
          <img className="im" src={portCondo} alt="" />
          <img className="im" src={vigi} alt="homem cuidando das cameras" />
          <img
            className="im lastmg"
            src={vigi2}
            alt="homem em pé e ao lado telas de vigilancia"
          />
        </div>
      </div>
    </div>
  );
};
