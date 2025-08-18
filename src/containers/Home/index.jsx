import { useState } from "react";

import SearchWeather from "../../components/Button";
import { Background, ContainerBottom, ContainerTop } from "./styles";

function Home() {
  const [cidade, setCidade] = useState("");
  const [dadosClima, setDadosClima] = useState(null);

  async function buscarClima() {
    if (!cidade) return;

    const valorCidade = cidade;

    const getApiKey = import.meta.env.VITE_API_KEY;
    if (!getApiKey) {
      console.error("A chave da API não foi encontrada!");
      return;
    }
    const URL = `http://api.weatherapi.com/v1/current.json?key=${getApiKey}&q=${valorCidade}&lang=pt`;
    try {
      const resposta = await fetch(URL);
      const dados = await resposta.json();
      setDadosClima(dados);
    } catch (error) {
      console.log("erro ao buscar clima", error);
    }
  }

  return (
    <Background>
      <ContainerTop>
        <label>
          🏙️ Cidade:
          <input
            value={cidade}
            onChange={(e) => setCidade(e.target.value)}
            placeholder="Digite sua cidade"
          ></input>
          <SearchWeather onClick={buscarClima} />
        </label>
      </ContainerTop>
      <ContainerBottom>
        {dadosClima ? (
          <p>
            {dadosClima?.location?.name}, {dadosClima.location.country}
            <br />
            🌡️ {dadosClima.current.temp_c}°C
            <br />
            {dadosClima.current.condition.text}
          </p>
        ) : (
          <p>Digite uma cidade e clique no botão para ver o clima.</p>
        )}
      </ContainerBottom>
    </Background>
  );
}

export default Home;
