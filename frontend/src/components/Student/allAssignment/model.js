

import styled from "styled-components";

export const Main = styled.div``;

export const OuterDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: black;
  opacity: 0.9;
  width: 100%;
  height: 100%;
`;

export const InnerDiv = styled.div`
  position: fixed;
top:50%;
left:50%;
right:2rem;
bottom:2rem;

  transform: translate(-50%, -50%);
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

export const ButtonDiv = styled.div`
  text-align: right;
  flex: 1;
`;
export const Button = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  font-size: 12px;
  background-color:${props => props.theme.button};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

`;
export const TextDiv = styled.div`
  flex: 9;
  color:black;

  font-size:2rem;
  
`;

