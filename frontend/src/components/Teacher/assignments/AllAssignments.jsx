import React from "react";
import { useSelector } from "react-redux";
import { AllAssignmentDiv } from "./style";
import SingleAssignment from "./SingleAssignment";

function AllAssignments() {
  const allAssignment = useSelector((state) => {
    return state.teacher.assignList;
  });

  console.log(allAssignment);

  return (
    <AllAssignmentDiv>
      {allAssignment.map((item) => {
        return <SingleAssignment key={item.id} assignment={item} />;
      })}
    </AllAssignmentDiv>
  );
}

export default AllAssignments;
