import React, { useState } from "react";
import {
  AddedDate,
  AllContainerDiv,
  AnswerButton,
  DateDiv,
  DeadLineDate,
  ErrorMessage,
  Form,
  HeaderDiv,
  InputAreaDiv,
  InputTextArea,
  Label,
  SingleAssignmentDiv,
  SubmissionButton,
  WaitingForResponseDiv,
} from "./style";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { usePostAssignmentAnswerMutation } from "../../../store/store";
import MarksAndSuggestion from "../marksAndSuggestion/MarksAndSuggestion";
import dayjs from "dayjs";
import QuestionModel from "./QuestionModel";

import ResponseLoading from "../../common/loading/ResponseLoading";
function SingleStudentAssignment({ question }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const token = useSelector((state) => state.user.token);

  const [postAnswer, status] = usePostAssignmentAnswerMutation();

  const studentId = useSelector((state) => {
    return state.user.userData.id;
  });
  const [showModal, setShowModal] = useState(false);
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
    setShowModal(!showModal);
    postAnswer({ data: submittedData, token });
  };

  const handleShow = () => {
    setShowModal(!showModal);
  };
  return (
    <SingleAssignmentDiv>
      <AllContainerDiv>
        <HeaderDiv>
          <Label>{question.question}</Label>
          <AnswerButton onClick={handleShow}>Give Ans</AnswerButton>
        </HeaderDiv>

        {showModal && (
          <QuestionModel
            showModal={showModal}
            setShowModal={setShowModal}
          >
            <Form onSubmit={handleSubmit(onSubmit)}>
              <InputAreaDiv>
                <Label
                  style={{
                    fontSize: "3rem",
                  }}
                >
                  {question.question}
                </Label>
                <InputTextArea
                  placeholder='Please enter the answer'
                  {...register("answer", {
                    required: "Answer is required",
                  })}
                  autoFocus
                />
                {errors.answer && (
                  <ErrorMessage>{errors.answer.message}</ErrorMessage>
                )}

                <SubmissionButton>Submit</SubmissionButton>
              </InputAreaDiv>
            </Form>
          </QuestionModel>
        )}

        {isLoading && (
          <WaitingForResponseDiv>
            <ResponseLoading />
          </WaitingForResponseDiv>
        )}

        {data && <MarksAndSuggestion data={data} />}
        <DateDiv>
          <AddedDate>
            Added Date: {dayjs(question.timestamp).format("MMM D,YYYY")}
          </AddedDate>
          <DeadLineDate>
            Deadline: {dayjs(question.deadline).format("MMM D,YYYY")}
          </DeadLineDate>
        </DateDiv>
      </AllContainerDiv>
    </SingleAssignmentDiv>
  );
}

export default SingleStudentAssignment;
