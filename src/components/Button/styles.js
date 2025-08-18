import styled from "styled-components";

export const Button = styled.button`
  cursor: pointer;
  width: 150px;
  height: 36px;
  font-size: 17px;
  color: #ff2f2fff;
  font-weight: 600;
  border-radius: 11px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }
`;
