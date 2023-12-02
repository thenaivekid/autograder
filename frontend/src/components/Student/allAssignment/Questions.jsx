import React from "react";
import {
  AllStudentAssignmentDiv,
  TeacherName,
  TeachersQuestionTotalDiv,
  TotalQuestions,
} from "./style";
import { useSelector } from "react-redux";
import SingleStudentAssignment from "./Question";
import { useParams } from "react-router-dom";

function AllStudentsAssignmet() {
  const allQuestions = useSelector((state) => {
    return state.student.assignmentQuestions;
  });
  const { id, name } = useParams();

  const questionToShow = allQuestions.filter((question) => {
    return question.teacher == id;
  });
  return (
    <>
      <TeachersQuestionTotalDiv>
        <TeacherName>
          Teacher Name: <span> {name.replace("_", " ")}</span>
        </TeacherName>
        <TotalQuestions>
          Total: <span>{questionToShow.length}</span>
        </TotalQuestions>
      </TeachersQuestionTotalDiv>
      <AllStudentAssignmentDiv>
        {questionToShow?.map((question) => {
          return (
            <SingleStudentAssignment
              question={question}
              key={question.id}
            />
          );
        })}
      </AllStudentAssignmentDiv>
    </>
  );
}

export default AllStudentsAssignmet;
