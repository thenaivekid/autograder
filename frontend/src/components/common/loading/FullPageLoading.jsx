import React from "react";
import { FullPageLoadingDiv } from "./style";

function FullPageLoading() {
  return (
    <FullPageLoadingDiv>
      <div className='lds-spinner'>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </FullPageLoadingDiv>
  );
}

export default FullPageLoading;
