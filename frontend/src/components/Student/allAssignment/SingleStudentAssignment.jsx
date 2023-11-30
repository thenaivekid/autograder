import React from "react";
import {
  ErrorMessage,
  Form,
  InputTextArea,
  Label,
  SingleAssignmentDiv,
  SubmissionButton,
} from "./style";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function SingleStudentAssignment({ question }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const studentId = useSelector((state) => {
    return state.role.userData.id;
  });
  const onSubmit = (data) => {
    const dataToSubmit = {
      assignmentId: question.id,
      question: question.question,
      sample_answer: question.answer,
      studentId,
      student_answer: data.answer,
      clues_to_autograder: question.clues_to_autograder,
    };
  };
  return (
    <SingleAssignmentDiv>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>{question.question}</Label>
        <InputTextArea
          placeholder='Please enter the answer'
          {...register("answer", {
            required: "Answer is required",
          })}
        />

        {errors.answer && <ErrorMessage>{errors.answer.message}</ErrorMessage>}
        <SubmissionButton>Submit</SubmissionButton>
      </Form>
    </SingleAssignmentDiv>
  );
}

export default SingleStudentAssignment;
