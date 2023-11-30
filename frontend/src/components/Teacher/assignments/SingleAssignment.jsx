import React from "react";
import { QuestionDiv, SingleAssignmentDiv } from "./style";

function SingleAssignment({ assignment }) {
  return (
    <SingleAssignmentDiv>
      {assignment.id}. <QuestionDiv>{assignment.question}</QuestionDiv>
    </SingleAssignmentDiv>
  );
}

export default SingleAssignment;
