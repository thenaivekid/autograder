import React, { useState } from "react";
import { SignUpDiv } from "../../styles/Container";
import SignupForm from "../../components/common/signup/Signup";
import Modal from "../../components/common/modal/Modal";
import Loading from "../../components/common/loading/Loading";

function SignupPage() {
  const [showModal, setShowModal] = useState(true);

  const onShowModalButtonClicked = () => {
    let value = !showModal ? true : false;
    setShowModal(value);
  };
  return (
    <SignUpDiv>
      <SignupForm />
      {showModal ? (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
         
        >
          <>Choose Your Role ?</>
        </Modal>
      ) : null}
  
    </SignUpDiv>
  );
}

export default SignupPage;
