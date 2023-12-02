import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Main, InnerDiv, OuterDiv, TextDiv } from "./model";

function QuestionModel({ setShowModal, showModal, children }) {
  const onShowModalButtonClicked = () => {
    setShowModal(!showModal);
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);
  return ReactDOM.createPortal(
    <Main>
      <OuterDiv onClick={onShowModalButtonClicked}></OuterDiv>
      <InnerDiv>{children}</InnerDiv>
    </Main>,
    document.querySelector(".modal_container")
  );
}

export default QuestionModel;
