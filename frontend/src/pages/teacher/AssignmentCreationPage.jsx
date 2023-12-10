import React, { useEffect } from "react";
import { AssignmentCreationDiv } from "../../styles/Container";
import AddAssignments from "../../components/Teacher/addAssignments/AddAssignments";

function AssignmentCreationPage() {
  return (
    <AssignmentCreationDiv>
      <AddAssignments />
    </AssignmentCreationDiv>
  );
}

export default AssignmentCreationPage;
