import React from "react";
import { AddAssignment, AddAssignmentDiv, AddIcon } from "./style";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
function AddAssignments() {
  const navigate = useNavigate();
  return (
    <AddAssignmentDiv>
      <AddAssignment>Add Assignment</AddAssignment>
      <AddIcon
        onClick={() => {
          navigate("/assignments/addition");
        }}
      >
        <IoIosAddCircle />
      </AddIcon>
    </AddAssignmentDiv>
  );
}

export default AddAssignments;
