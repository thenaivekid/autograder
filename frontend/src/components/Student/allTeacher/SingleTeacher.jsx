import React from "react";
import {
  Image,
  InfoDiv,
  NameDiv,
  PhotoDiv,
  SingleTeacherDiv,
  SubjectDiv,
} from "./style";
import user from "../../../assets/users.svg";
function SingleTeacher({ teacher }) {
  return (
    <SingleTeacherDiv
      to={`/teachers/${teacher.username.replace(" ", "_")}/${teacher.id}`}
    >
      <InfoDiv>
        <NameDiv>{teacher.username}</NameDiv>
        <SubjectDiv>{teacher.subject}</SubjectDiv>
      </InfoDiv>
      <PhotoDiv>
        <Image src={user} />
      </PhotoDiv>
    </SingleTeacherDiv>
  );
}

export default SingleTeacher;
