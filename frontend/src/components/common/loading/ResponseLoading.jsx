import React from "react";
import { ResponseLoadingDiv } from "./style";

function ResponseLoading() {
  return (
    <ResponseLoadingDiv>
      <span className='loader'></span>
    </ResponseLoadingDiv>
  );
}

export default ResponseLoading;
