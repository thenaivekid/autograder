import styled from "styled-components";

export const LoadingDiv = styled.div`
.loader {
  width: 24px;
  height: 24px;
  border: 2px dotted #FFF;
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation: rotation 2s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

`