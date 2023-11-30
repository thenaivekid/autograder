import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  Label,
  SignUpHeading,
} from "./style";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const role = useSelector((state) => state.role.role);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log(data);
    const passedData = {
      role,
      fullName: data.fullName,
      password: data.password,
    };
    console.log(passedData);
  };

  const password = watch("password", "");
  return (
    <FormContainer>
      <SignUpHeading>Sign Up </SignUpHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Full Name</Label>
          <Input
            {...register("fullName", {
              required: "Fullname  is required",
              minLength: {
                value: 3,
                message: "FullName must be at least 3 characters long",
              },
            })}
          />
          {errors.username && (
            <ErrorMessage>{errors.fullName.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            type='password'
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </FormGroup>

        <FormGroup>
          <Label>Re-enter Password</Label>
          <Input
            type='password'
            {...register("password_confirmation", {
              required: "Please re-enter your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.password_confirmation && (
            <ErrorMessage>{errors.password_confirmation.message}</ErrorMessage>
          )}
        </FormGroup>

        <Button type='submit'>Register</Button>
      </form>
    </FormContainer>
  );
};

export default SignupForm;
