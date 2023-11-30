import React from "react";
import {
  AddAssignment,
  AddAssignmentDiv,
  AddIcon,
  AllAssignmentDiv,
} from "./style";
import { IoIosAddCircle } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import AllAssignments from "../assignments/AllAssignments";
function AddAssignments() {
  const navigate = useNavigate();
  return (
    <>
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
      <AllAssignmentDiv>
        <AllAssignments />
      </AllAssignmentDiv>
    </>
  );
}

export default AddAssignments;


// {

//     id: 7,

//     teacher: 24,

//     question: 'What is the best things to do',

//     answer: 'I love to play football',

//     clues_to_autograder: 'This answer could vary according to the user'

//   },