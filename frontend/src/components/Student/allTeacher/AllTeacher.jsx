import React from "react";
import { AllTeacherInfoDiv, AllTeacherInfoText, AllTeachersDiv } from "./style";
import SingleTeacher from "./SingleTeacher";

function AllTeacher({ teachers }) {
  console.log(teachers);
  return (
    <>
      <AllTeacherInfoDiv>
        <AllTeacherInfoText>Assignments From Teachers</AllTeacherInfoText>
      </AllTeacherInfoDiv>
      <AllTeachersDiv>
        {teachers?.teachers?.map((teacher, index) => {
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
