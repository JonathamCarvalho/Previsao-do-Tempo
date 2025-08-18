import styled from "styled-components";
import WeatherForecast from "../../assets/WeatherForecast.gif";

export const Background = styled.div`
  background-image: url(${WeatherForecast});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
  width: 100%;
  color: aliceblue;
`;

export const ContainerTop = styled.div`
  width: 100%;
  font-size: 40px;
  font-weight: 400;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 10px 20px;

  input {
    width: 250px;
    height: 36px;
    padding: 0 10px;
    margin: 0 15px;
    font-size: 19px;
    font-weight: 600;
    border-radius: 9px;
    border: none;
    outline-style: none;

    &:active {
      opacity: 0.8;
    }
  }
`;

export const ContainerBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  p {
    font-size: 30px;
    font-weight: 800;
  }
`;
