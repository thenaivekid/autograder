import React from "react";
import {
  AddedDate,
  DateDiv,
  DeadLineDate,
  QuestionDiv,
  SingleAssignmentDiv,
} from "./style";
import dayjs from "dayjs";
function SingleAssignment({ assignment }) {
  return (
    <SingleAssignmentDiv>
      <QuestionDiv>
        {" "}
        {assignment.id}.{assignment.question}
      </QuestionDiv>
      <DateDiv>
        <AddedDate>
          Added Date: {dayjs(assignment.timestamp).format("MMM D,YYYY")}
        </AddedDate>
        <DeadLineDate>
          Deadline: {dayjs(assignment.deadline).format("MMM D,YYYY")}
        </DeadLineDate>
      </DateDiv>
    </SingleAssignmentDiv>
  );
}

export default SingleAssignment;
