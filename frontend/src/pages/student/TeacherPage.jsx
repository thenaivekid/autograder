import React, { useEffect } from "react";
import { TeachersMainDiv } from "../../styles/Container";
import {
  setAssignmentQuestions,
  useGetAllAssignmentQuestionsQuery,
  useGetAllTeachersQuery,
} from "../../store/store";
import AllTeacher from "../../components/Student/allTeacher/AllTeacher";
import { useDispatch, useSelector } from "react-redux";
import FullPageLoading from "../../components/common/loading/FullPageLoading";

function TeacherPage() {
  const token = useSelector((state) => {
    return state.user.token;
  });
  console.log(token);
  const { data, isLoading, error } = useGetAllTeachersQuery(token);

  const {
    data: QuestionData,
    isLoading: QuestionLoading,
    error: QuestionError,
  } = useGetAllAssignmentQuestionsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (QuestionData) {
      dispatch(setAssignmentQuestions(QuestionData));
    }
  }, [QuestionData]);

  if (isLoading || QuestionLoading) {
    return (
      <TeachersMainDiv
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "70rem",
        }}
      >
        <FullPageLoading />
      </TeachersMainDiv>
    );
  }
  return (
    <TeachersMainDiv>
      <AllTeacher teachers={data} />
    </TeachersMainDiv>
  );
}

export default TeacherPage;
