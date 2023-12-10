import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AllAssignmentDiv, AllAssignmentHeading } from "./style";
import SingleAssignment from "./SingleAssignment";
import EmptyDiv from "../emptyDiv/EmptyDiv";
import AddMore from "../addMore/AddMore";

function AllAssignments() {
  let allAssignment = useSelector((state) => {
    return state.teacher.allAssgnments;
  });
  return (
    <>
      <AddMore />
      <AllAssignmentHeading>All Assignments</AllAssignmentHeading>
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
    </>
  );
}

export default AllAssignments;
