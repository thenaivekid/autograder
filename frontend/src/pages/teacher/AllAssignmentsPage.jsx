import React from "react";
import AllAssignments from "../../components/Teacher/assignments/AllAssignments";
import { AllAssignmentDiv } from "../../styles/Container";

function AllAssignmentsPage() {
  return (
    <AllAssignmentDiv>
      <AllAssignments />
    </AllAssignmentDiv>
  );
}

export default AllAssignmentsPage;
