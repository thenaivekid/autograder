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
import { usePostAssignmentAnswerMutation } from "../../../store/store";
import MarksAndSuggestion from "../marksAndSuggestion/MarksAndSuggestion";

function SingleStudentAssignment({ question }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [postAnswer, status] = usePostAssignmentAnswerMutation();

  const studentId = useSelector((state) => {
    return state.role.userData.id;
  });
  const { data, isLoading, error } = status;
  const onSubmit = (data) => {
    const dataToSubmit = {
      assignment: question.id,
      question: question.question,
      answer: question.answer,
      student: studentId,
      student_answer: data.answer,
      clues_to_autograder: question.clues_to_autograder,
    };
    const submittedData = JSON.stringify(dataToSubmit);
    postAnswer(submittedData);
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

        {data && <MarksAndSuggestion data={data} />}
      </Form>
    </SingleAssignmentDiv>
  );
}

export default SingleStudentAssignment;
