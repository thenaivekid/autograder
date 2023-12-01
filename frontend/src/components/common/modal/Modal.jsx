import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Main, Button, ButtonDiv, InnerDiv, OuterDiv, TextDiv } from "./style";
import { useDispatch } from "react-redux";
import { setRole } from "../../../store/store";

function Modal({ setShowModal, showModal, children }) {
  const onShowModalButtonClicked = () => {
    setShowModal(!showModal);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "initial";
    };
  }, []);
  const roles = ["teacher", "student"];
  return ReactDOM.createPortal(
    <Main>
      <OuterDiv></OuterDiv>
      <InnerDiv>
        <TextDiv>{children}</TextDiv>

        <ButtonDiv>
          {roles.map((role) => {
            return (
              <Button
                onClick={() => {
                  dispatch(setRole(role));
                  onShowModalButtonClicked();
                }}
              >
                {role}
              </Button>
            );
          })}
        </ButtonDiv>
      </InnerDiv>
    </Main>,
    document.querySelector(".modal_container")
  );
}

export default Modal;
