import React, { useEffect } from "react";
import { AssignmentCreationDiv } from "../../styles/Container";
import AddAssignments from "../../components/Teacher/addAssignments/AddAssignments";
import { setManyAssignList, useGetAllAssignmentQuestionsQuery } from "../../store/store";
import { useDispatch } from "react-redux";

function AssignmentCreationPage() {
  const { data, isFetching, error } = useGetAllAssignmentQuestionsQuery();

  const dispatch = useDispatch();

  useEffect(() => {
    if(data){
      dispatch(setManyAssignList(data));
    }
  }, [data]);

  console.log(data);

  return (
    <AssignmentCreationDiv>
      <AddAssignments />
    </AssignmentCreationDiv>
  );
}

export default AssignmentCreationPage;
