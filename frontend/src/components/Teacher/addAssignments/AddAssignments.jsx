import React from "react";
import {
  AddAssignment,
  AddAssignmentDiv,
  AddAssignmentTitleDiv,
  AddIcon,
  AllAssignmentDiv,
} from "./style";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AllAssignments from "../assignments/AllAssignments";
import AssignmentBanner from "../assignmentBanner/AssignmentBanner";
import Options from "../options/Options";
function AddAssignments() {
  const navigate = useNavigate();
  return (
    <>
      <AddAssignmentDiv>
        <AssignmentBanner />
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
      </AddAssignmentDiv>
      <AllAssignmentDiv>
        <Options />
      </AllAssignmentDiv>
    </>
  );
}

export default AddAssignments;
