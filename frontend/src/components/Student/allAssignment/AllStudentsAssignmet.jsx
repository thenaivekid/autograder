import React from "react";
import { AllStudentAssignmentDiv } from "./style";
import { useSelector } from "react-redux";
import SingleStudentAssignment from "./SingleStudentAssignment";

function AllStudentsAssignmet() {
  const allQuestions = useSelector((state) => {
    return state.student.assignmentQuestions;
  });
  console.log(allQuestions);
  return (
    <AllStudentAssignmentDiv>
      {allQuestions?.map((question) => {
        return (
          <SingleStudentAssignment
            question={question}
            key={question.id}
          />
        );
      })}
    </AllStudentAssignmentDiv>
  );
}

export default AllStudentsAssignmet;
