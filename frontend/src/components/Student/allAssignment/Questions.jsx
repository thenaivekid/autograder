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
import { useGetAllAssignmentQuestionsQuery } from "../../../store/store";
import FullPageLoading from "../../common/loading/FullPageLoading";

function AllStudentsAssignmet() {
  const { id } = useParams();
  const token = useSelector((state) => state.user.token);
  const {
    data: QuestionData,
    isLoading: QuestionLoading,
    error: QuestionError,
  } = useGetAllAssignmentQuestionsQuery({ token, id });

  if (QuestionLoading) {
    return (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FullPageLoading />
      </div>
    );
  }

  return (
    <>
      <TeachersQuestionTotalDiv>
        <TeacherName>
          Teacher Name: <span> {name.replace("_", " ")}</span>
        </TeacherName>
        <TotalQuestions>
          Total: <span>{QuestionData.length}</span>
        </TotalQuestions>
      </TeachersQuestionTotalDiv>
      <AllStudentAssignmentDiv>
        {QuestionData?.map((question) => {
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
