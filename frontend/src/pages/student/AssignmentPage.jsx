import React, { useEffect } from "react";
import { AllAssignmetStudentDiv } from "../../styles/Container";
import {
  setAssignmentQuestions,
  useGetAllAssignmentQuestionsQuery,
} from "../../store/store";
import { useDispatch } from "react-redux";
import AllStudentsAssignmet from "../../components/Student/allAssignment/AllStudentsAssignmet";

function AssignmentPage() {
  const { data, isLoading, error } = useGetAllAssignmentQuestionsQuery();
  const dispatch = useDispatch();
  useEffect(() => {
    if (data) {
      dispatch(setAssignmentQuestions(data));
    }
  }, [data]);
  console.log(data);
  return (
    <AllAssignmetStudentDiv>
      <AllStudentsAssignmet />
    </AllAssignmetStudentDiv>
  );
}

export default AssignmentPage;
