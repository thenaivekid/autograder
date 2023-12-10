import React, { useEffect } from "react";
import { AssignmentAdditionFormDiv } from "../../styles/Container";
import AssignmentForm from "../../components/Teacher/assignmentForm/AssignmentForm";

function AssignmentAdditionPage() {



  return (
    <AssignmentAdditionFormDiv>
      <AssignmentForm />
    </AssignmentAdditionFormDiv>
  );
}

export default AssignmentAdditionPage;
