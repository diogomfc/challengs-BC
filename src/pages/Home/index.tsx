import React, { FormEvent, useEffect, useState } from "react";
import axios from "axios";

import Header from "../../components/Header";
import BoxSimulator from "../../components/BoxSalesSimulator";

import { BASE_URL } from "../../services/urls";

import { Container, Main, Aside, ModalResultSimulator } from "./styled";

type dataBrands = {
  name: string;
  code: string;
  image: string;
  //is_available?: boolean;
};

type brandSimulator = {
  brand: string;
  tax: number;
  tax_amount: number;
};

type dataSimulator = {
  amount: number;
  brands: string[];
  installment: number;
  brand_simulation: brandSimulator[];
};

function Home() {
  const [brandsData, setBrandsData] = useState<dataBrands[]>([]);
  const [simulateData, setSimulateData] = useState<dataSimulator>();

  const [brandsSelectInput, setBrandsSelectInput] = useState("");
  const [selectInputInstallment, setSelectInputInstallment] = useState("");
  const [inputAmount, setInputAmount] = useState("");

  const apiAllBrands = () => {
    axios
      .get(`${BASE_URL}/brands`, {
        headers: {
          "x-functions-key":
            "6Lap4DX36mVCdSMTRxpIMAvNzwMRIXrq1iW2CMO2gUzf8vzvvJEJaA==",
        },
      })
      .then((response) => {
        setBrandsData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const apiSalesSimulator = () => {
    const body = {
      amount: inputAmount,
      installment: selectInputInstallment,
      brands: [brandsSelectInput],
    };
    axios
      .post(`${BASE_URL}/simulate`, body, {
        headers: {
          "x-functions-key":
            "6Lap4DX36mVCdSMTRxpIMAvNzwMRIXrq1iW2CMO2gUzf8vzvvJEJaA==",
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        const resultSalesSimulator = response.data.data ?? {};
        // console.log(resultSalesSimulator);
        setSimulateData(resultSalesSimulator);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    apiAllBrands();
    apiSalesSimulator();
  }, [selectInputInstallment, brandsSelectInput, inputAmount]);

  function ModalSimulator() {
    document.querySelector(".box-simulator")?.classList.add("active");
    document.querySelector(".box-result-simulator")?.classList.remove("active");
  }

  function ModalResult(event: FormEvent) {
    event.preventDefault();
    document.querySelector(".box-simulator")?.classList.remove("active");
    document.querySelector(".box-result-simulator")?.classList.add("active");
  }

  const SomaValorTaxas =
    Number(simulateData?.brand_simulation[0].tax_amount) +
    Number(simulateData?.amount);

  const TotalParcelas = SomaValorTaxas / Number(simulateData?.installment);

  return (
    <>
      <Header />
      <Container>
        <Aside>
          <div>
            <div className="img-background-boll"></div>
            <div className="img-background-boll2"></div>
          </div>
        </Aside>
        <Main>
          <div className="titulo-box-modal">
            <h1>Simulador de vendas</h1>
          </div>
          <div className="box-simulator active">
            <section>
              <form className="form-inputs" onSubmit={ModalResult}>
                <h1>Valor:</h1>
                <div>
                  <input
                    type="number"
                    name="input-valor-simular"
                    placeholder="Qual o valor a ser simulado?"
                    value={inputAmount}
                    onChange={(e) => setInputAmount(e.target.value)}
                  />
                </div>
                <h1>Selecione a bandeira do cartão:</h1>
                <div>
                  <select
                    name="select-brands"
                    id="brands"
                    value={brandsSelectInput}
                    onChange={(e) => setBrandsSelectInput(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecione uma bandeira
                    </option>
                    <option value="amex">American Express</option>
                    <option value="elo">ELO</option>
                    <option value="master">Master Card</option>
                    <option value="visa">Visa</option>
                    <option value="hiper" disabled>
                      Hiper
                    </option>
                    <option value="others">Outras Bandeiras</option>
                  </select>
                </div>
                <h1>Selecione um prazo:</h1>
                <div>
                  <select
                    name="select-prazo"
                    id="prazo"
                    value={selectInputInstallment}
                    onChange={(e) => setSelectInputInstallment(e.target.value)}
                  >
                    <option value="" disabled>
                      Selecione um prazo
                    </option>
                    <option value="1">1x</option>
                    <option value="2">2x</option>
                    <option value="3">3x</option>
                    <option value="4">4x</option>
                    <option value="5">5x</option>
                    <option value="6">6x</option>
                    <option value="7">7x</option>
                    <option value="8">8x</option>
                    <option value="9">9x</option>
                    <option value="10">10x</option>
                    <option value="11">11x</option>
                    <option value="12">12x</option>
                  </select>
                </div>

                <button onClick={ModalResult}>
                  <img src="/images/IconSimular.svg" alt="Icon Simulador" />
                  Simular
                </button>
              </form>
            </section>
          </div>
        </Main>
      </Container>

      <ModalResultSimulator>
        <div className="box-result-simulator">
          <BoxSimulator
            imgBrands={
              simulateData?.brand_simulation[0].brand === "visa"
                ? "/images/visa@3x.png"
                : simulateData?.brand_simulation[0].brand === "amex"
                ? "/images/amex@3x.png"
                : simulateData?.brand_simulation[0].brand === "elo"
                ? "/images/elo@3x.png"
                : simulateData?.brand_simulation[0].brand === "master"
                ? "/images/mastercard@3x.png"
                : simulateData?.brand_simulation[0].brand === "hiper"
                ? "/images/hiper@3x.png"
                : "/images/defaultBank@3x.png"
            }
            valor={Number(simulateData?.amount)}
            prazo={Number(simulateData?.installment)}
            taxa={Number(simulateData?.brand_simulation[0].tax)}
            valorTaxa={Number(simulateData?.brand_simulation[0].tax_amount)}
            valorTotal={SomaValorTaxas}
            valorParcela={TotalParcelas}
            onClick={ModalSimulator}
          />
        </div>
      </ModalResultSimulator>
    </>
  );
}

export default Home;
