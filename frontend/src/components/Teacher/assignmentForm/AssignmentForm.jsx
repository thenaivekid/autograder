import React from "react";
import {
  AddAssignmentHeading,
  AssignmentFormDiv,
  Button,
  FormGroup,
  InputTextArea,
  Label,
} from "./style";
import { AddAssignmentDiv } from "../addAssignments/style";
import { useForm } from "react-hook-form";
import { useSetAssignementMutation } from "../../../store/store";
import { useSelector } from "react-redux";

function AssignmentForm() {
  const [setAssignment, status] = useSetAssignementMutation();
  const teacherId = useSelector((state) => state.role.userData.id);
  console.log(teacherId);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.teacher = teacherId;
    setAssignment(data);
  };

  console.log(status);
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
      </FormGroup>
      <FormGroup>
        <Label>Answer</Label>
        <InputTextArea
          placeholder='Add a answer'
          {...register("answer", {
            required: "Answer is required",
          })}
        />
      </FormGroup>
      <FormGroup>
        <Label>Optional</Label>
        <InputTextArea
          placeholder='Add a optional'
          {...register("clues_to_autograder", {
            required: "=Options  are required",
          })}
        />
      </FormGroup>

      <Button>Add</Button>
    </AssignmentFormDiv>
  );
}

export default AssignmentForm;
