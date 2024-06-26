import React from "react";
import { AssignmentBannerDiv, TeacherNameDiv } from "./style";
import banner from "../../../assets/teacherBanner.jpg";
import { useSelector } from "react-redux";
function AssignmentBanner() {
  const TeacherName = useSelector((state) => {
    return state?.user?.userData?.username;
  });
  return (
    <AssignmentBannerDiv
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <TeacherNameDiv>Welcome! {TeacherName?.toUpperCase()}</TeacherNameDiv>
    </AssignmentBannerDiv>
  );
}

export default AssignmentBanner;
