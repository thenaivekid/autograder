import React from "react";
import { useSelector } from "react-redux";
import { AllAssignmentDiv } from "./style";
import SingleAssignment from "./SingleAssignment";
import EmptyDiv from "../emptyDiv/EmptyDiv";

function AllAssignments() {
  const allAssignment = useSelector((state) => {
    return state.data.assignmentList;
  });

  return (
    <AllAssignmentDiv>
      {allAssignment?.length === 0 ? (
        <EmptyDiv />
      ) : (
        allAssignment?.map((item, index) => {
          return (
            <SingleAssignment
              key={item.id}
              assignment={item}
              index={index}
            />
          );
        })
      )}
    </AllAssignmentDiv>
  );
}

export default AllAssignments;
