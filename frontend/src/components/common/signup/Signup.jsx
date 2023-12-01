import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LoginDiv,
  LoginHeading,
  SignUpHeading,
} from "./style";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  setStatus,
  setUser,
  useRegisterUserMutation,
} from "../../../store/store";
import { useEffect } from "react";
import Loading from "../loading/Loading";

const SignupForm = () => {
  const [registerUser, status] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const role = useSelector((state) => state.role.role);

  const { data, isLoading, isError } = status;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const passedData = {
      role,
      username: data.fullName,
      password: data.password,
    };
    const raw = JSON.stringify(passedData);
    registerUser(raw);
  };

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
      dispatch(setStatus(true));
      if (role === "teacher") {
        navigate("/assignments");
      } else {
        navigate("/all/assignments");
      }
    }
  }, [data]);

  const password = watch("password", "");
  return (
    <FormContainer>
      <SignUpHeading>Sign Up </SignUpHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Username</Label>
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

        <Button type='submit'>{isLoading ? <Loading /> : "Register"}</Button>
      </form>
      <LoginDiv>
        <p>Already have an account?</p>
        <LoginHeading to='/login'>Login</LoginHeading>
      </LoginDiv>
    </FormContainer>
  );
};

export default SignupForm;
