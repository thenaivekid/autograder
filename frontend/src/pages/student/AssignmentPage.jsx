import React, { useEffect } from "react";
import { AllAssignmetStudentDiv } from "../../styles/Container";

import AllStudentsAssignmet from "../../components/Student/allAssignment/Questions";

function AssignmentPage() {
  

  return (
    <AllAssignmetStudentDiv>
      <AllStudentsAssignmet />
    </AllAssignmetStudentDiv>
  );
}

export default AssignmentPage;
