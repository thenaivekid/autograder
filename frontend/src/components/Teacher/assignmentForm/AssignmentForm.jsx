import React, { useEffect } from "react";
import {
  AddAssignmentHeading,
  AssignmentFormDiv,
  Button,
  FormGroup,
  InputTextArea,
  Label,
} from "./style";

import { useForm } from "react-hook-form";
import { setAssignList, useSetAssignementMutation } from "../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AssignmentForm() {
  const [setAssignment, status] = useSetAssignementMutation();
  const teacherId = useSelector((state) => state?.role?.userData?.id);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    data.teacher = teacherId;
    setAssignment(data);
  };
  const { isLoading, data } = status;

  useEffect(() => {
    if (data) {
      dispatch(setAssignList(data));
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


// id: 11,
// teacher: 28,
// question: 'ooefj',
// answer: 'jffoejf',
// clues_to_autograder: 'jfoejfioef'