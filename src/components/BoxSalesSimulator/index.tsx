import { Container } from "./styled";
import formatNumber from "../../services/formatNumber";

type boxSimulatorProps = {
  imgBrands: string;
  valor?: number;
  prazo?: number;
  taxa?: number;
  valorTaxa?: number;
  valorTotal?: number;
  valorParcela?: number;
  onClick?: ((event: React.MouseEvent<HTMLButtonElement>) => void) | undefined;
};

function BoxSimulator(props: boxSimulatorProps) {
  return (
    <Container>
      <div className="form-inputs">
        <img src={props.imgBrands} alt="Icon Simulador" />
        <h1>RESUMO DA SIMULAÇÃO</h1>
        <div>
          <h2>Valor da simulação:</h2>
          <h1>{formatNumber(Number(props.valor))}</h1>
        </div>
        <div>
          <h2>Prazo:</h2>
          <h1>{props.prazo} x</h1>
        </div>
        <div>
          <h2>% da taxa:</h2>
          <h1>{props.taxa} %</h1>
        </div>
        <div>
          <h2>Valor da taxa:</h2>
          <h1>{formatNumber(Number(props.valorTaxa))}</h1>
        </div>
        <div>
          <h2>Valor + Taxas:</h2>
          <h1>{formatNumber(Number(props.valorTotal))}</h1>
        </div>
        <div>
          <h2>Valor da parcela mês:</h2>
          <h1>
            {props.prazo} x {formatNumber(Number(props.valorParcela))}
          </h1>
        </div>
        <button onClick={props.onClick}>
          <img src="/images/IconSimular.svg" alt="Icon Simulador" />
          Nova Simulação
        </button>
      </div>
    </Container>
  );
}

export default BoxSimulator;
