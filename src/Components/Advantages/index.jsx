import "./styles.css";
import terceirizados from "../../Assets/terceirizados-1.svg";

export const AdvantagesComp = () => {
  return (
    <div className="contAdv">
      <h1>6 vantagens da terceirização às empresas</h1>
      <img
        className="terce-img"
        src={terceirizados}
        alt="bonequinhos terceirizados"
      />
      <div className="container-vant">
        <h2>Foco no core business da empresa</h2>
        <p>
          Quando a empresa terceiriza, ela delega atividades-meio a outros
          profissionais, o que acaba liberando sua equipe própria para focar no
          core business e atividades mais estratégicas. Para exemplificar, basta
          considerar uma loja de cosméticos e maquiagens. Seu objetivo é vender
          esses produtos. Se a equipe de vendas tem de cuidar, também, da
          limpeza da loja, ela perde um tempo precioso que poderia ser utilizado
          para fechar mais negócios. É aí que entra a terceirização! Com ela, a
          equipe própria da empresa pode manter o foco nas vendas, além de
          evitar a sobrecarga de profissionais com outras atividades que não
          estão dentro de seu escopo. Isso é importante porque possibilita que a
          empresa atinja melhores resultados mais rápido, realizando um trabalho
          de alta qualidade, de modo a contribuir positivamente com o
          crescimento do negócio.
        </p>
      </div>
      <div className="container-vant">
        <h2>Eliminação do vínculo trabalhista</h2>
        <p>
          Ao terceirizar, a empresa contratante elimina o vínculo trabalhista
          com os profissionais. Isso traz um benefício muito especial, como a
          redução de burocracias na área de Recursos Humanos. Além disso, a
          empresa não paga encargos trabalhistas, muito menos precisa realizar
          outros processos burocráticos de administração de pessoal. Na prática,
          isso significa que não será responsável por pagar 13º salário, férias,
          contribuições ao INSS, FGTS, indenizações trabalhistas, entre outros
          encargos. É uma redução de burocracias e atividades importante, mas
          não é só isso. Como não precisa lidar com encargos trabalhistas
          inesperados, a empresa garante uma maior previsibilidade de caixa.
          Portanto, é um investimento interessante para ter maior controle de
          orçamento.
        </p>
      </div>
      <div className="container-vant">
        <h2>Redução de custos operacionais</h2>
        <p>
          A terceirização de mão de obra possibilita a redução de custos com
          toda a estrutura operacional, ajudando a empresa a economizar. Essa
          economia acontece em vários pontos: a empresa não precisa realizar
          processo seletivo para contratação de profissionais, também não tem
          custo para treiná-los. A própria empresa terceirizada realiza a
          seleção, se necessária, e fornece mão de obra qualificada para
          executar as atividades. A empresa contratante não precisa pagar
          encargos trabalhistas dos funcionários terceirizados. Além disso,
          dependendo do serviço a empresa de terceirização fornece equipamentos
          e produtos para a execução do trabalho, bem como uniformes para a
          equipe. Portanto, é possível economizar de diferentes formas. Esse
          dinheiro extra no caixa pode ser utilizado para implementar melhorias
          internas, dando suporte na estratégia de crescimento da empresa.
        </p>
      </div>
      <div className="container-vant">
        <h2>Menos burocracia</h2>
        <p>
          Com a terceirização, a administração da empresa se torna menos
          burocrática. O impacto mais profundo é no setor de Recursos Humanos,
          que não precisa lidar com processos complexos de contratação,
          administração ou desligamento de profissionais. Também não tem mais
          obrigatoriedade de efetuar cálculos e pagamento de encargos
          trabalhistas, bem como de treinar profissionais, descomplicando
          processos internos. Essa redução da carga de trabalho possibilita que
          a equipe de Recursos Humanos possa se dedicar a outras atividades,
          tendo uma atuação mais estratégica e voltada a dar suporte no
          crescimento da empresa.
        </p>
      </div>
      <div className="container-vant">
        <h2>Garantia de equipe capacitada</h2>
        <p>
          Encontrar profissionais capacitados nem sempre é tarefa fácil,
          principalmente quando se trata de atividades muito específicas, que
          demandam conhecimento especializado. É justamente em situações assim
          que a terceirização é uma aliada. A empresa de terceirização fornece
          profissionais experientes e já treinados ao contratante, o que garante
          a realização de um trabalho de qualidade e com menor chance de
          retrabalho. Isso faz toda a diferença porque contribui para o bom
          andamento das atividades, bem como para a redução de erros e maior
          produtividade. Se você está em busca desses resultados, contratar uma
          empresa de terceirização de serviços é a melhor solução!
        </p>
      </div>
      <div className="container-vant">
        <h2>Reserva técnica</h2>
        <p>
          Toda empresa de terceirização boa possui uma reserva técnica de
          profissionais para substituir eventuais faltas, férias ou
          afastamentos, de modo a evitar desfalques e o comprometimento da
          operação do cliente. Por isso, com a terceirização é possível evitar
          esses tipos de imprevistos e garantir que o trabalho sempre será
          realizado por um profissional capacitado encaminhado pela prestadora
          de serviços.
        </p>
      </div>
    </div>
  );
};
