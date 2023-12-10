import React from "react";

import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { AddAssignment, AddAssignmentTitleDiv, AddIcon } from "./style";
function AddMore() {
  const navigate = useNavigate();
  return (
    <AddAssignmentTitleDiv>
      <AddAssignment>Add Assignment</AddAssignment>
      <AddIcon
        onClick={() => {
          navigate("/assignments/addition");
        }}
      >
        <IoIosAddCircle />
      </AddIcon>
    </AddAssignmentTitleDiv>
  );
}

export default AddMore;
