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
import Swal from "sweetalert2";

const SignupForm = () => {
  const [registerUser, status] = useRegisterUserMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const role = useSelector((state) => state?.role?.role) || false;
  const { data, isLoading, isError, error } = status;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const passedData = {
      role,
      username: data.fullName,
      password: data.password,
      email: data.email,
      subject: data.subject || "",
    };

    registerUser(passedData);
  };
  console.log(error?.data?.email[0]);

  useEffect(() => {
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.data?.email[0],
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (data) {
      dispatch(setUser(data));
      dispatch(setStatus(true));
      if (role === "teacher") {
        navigate("/assignments");
      } else {
        navigate("/all/assignments");
      }
    }
  }, [data, error]);

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
        {role === "teacher" && (
          <FormGroup>
            <Label>Subject</Label>
            <Input
              {...register("subject", {
                required: "Subject  is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters long",
                },
              })}
            />
            {errors.subject && (
              <ErrorMessage>{errors.subject.message}</ErrorMessage>
            )}
          </FormGroup>
        )}
        <FormGroup>
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Email  is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: "Enter a valid email address",
              },
            })}
            type='email'
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
