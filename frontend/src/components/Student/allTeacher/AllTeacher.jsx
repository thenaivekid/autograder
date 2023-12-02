import React from "react";
import { AllTeacherInfoDiv, AllTeacherInfoText, AllTeachersDiv } from "./style";
import SingleTeacher from "./SingleTeacher";

function AllTeacher({ teachers }) {
  return (
    <>
      <AllTeacherInfoDiv>
        <AllTeacherInfoText>Assignments From Teachers</AllTeacherInfoText>
      </AllTeacherInfoDiv>
      <AllTeachersDiv>
        {teachers.map((teacher, index) => {
          return (
            <SingleTeacher
              teacher={teacher}
              key={index}
            />
          );
        })}
      </AllTeachersDiv>
    </>
  );
}

export default AllTeacher;
