import React, { useEffect } from "react";
import {
  AddAssignmentHeading,
  AssignmentFormDiv,
  Button,
  ErrorMessage,
  FormGroup,
  Input,
  InputTextArea,
  Label,
} from "./style";

import { useForm } from "react-hook-form";
import {
  addSingleAssignments,
  setAssignList,
  useSetAssignementMutation,
} from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Loading from "../../common/loading/Loading";

function AssignmentForm() {
  const [setAssignment, status] = useSetAssignementMutation();
  const teacherId = useSelector((state) => state?.role?.userData?.id);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      clues_to_autograder: `must be at least this long words:must include these terms: [ "    ", "   ", "   "],must not include inappropriate words: ["   "],extra:
      
      `,
    },
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.teacher = teacherId;
    setAssignment(data);
  };
  const { isLoading, data, error } = status;

  useEffect(() => {
    if (data) {
      dispatch(setAssignList(data));
      dispatch(addSingleAssignments(data));
      navigate("/assignments");
    }
  }, [data]);

  return (
    <AssignmentFormDiv onSubmit={handleSubmit(onSubmit)}>
      <AddAssignmentHeading>Add</AddAssignmentHeading>
      <FormGroup>
        <Label>Question</Label>
        <InputTextArea
          placeholder='Add a question'
          {...register("question", {
            required: "Question is required",
          })}
        />

        {errors.question && (
          <ErrorMessage>{errors.question.message}</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label>Answer</Label>
        <InputTextArea
          placeholder='Add a answer'
          {...register("answer", {
            required: "Answer is required",
          })}
        />
        {errors.answer && <ErrorMessage>{errors.answer.message}</ErrorMessage>}
      </FormGroup>
      <FormGroup>
        <Label>Rubric</Label>
        <InputTextArea
          placeholder='Add a rubric'
          {...register("clues_to_autograder", {
            required: false,
          })}
        />
        {errors.clues_to_autograder && (
          <ErrorMessage>{errors.clues_to_autograder.message}</ErrorMessage>
        )}
      </FormGroup>
      <FormGroup>
        <Label>Deadline</Label>
        <Input
          placeholder='Add a deadline'
          {...register("deadline", {
            required: "deadline  are required",
          })}
          type='date'
        />
        {errors.deadline && (
          <ErrorMessage>{errors.deadline.message}</ErrorMessage>
        )}
      </FormGroup>

      <Button>{isLoading ? <Loading /> : "Add it"}</Button>
    </AssignmentFormDiv>
  );
}

export default AssignmentForm;
