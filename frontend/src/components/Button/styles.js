import styled from 'styled-components';

export const Button = styled.button`
  width: 260px;
  height: 43px;
  border-radius: 6px;
  border: 0px;
  background: #409232;
  color: #fff;
  font-size: 18px;

  cursor: pointer;

  &&:hover{
    background-color: #38C021;
    transition: 1ms;
  }
`;