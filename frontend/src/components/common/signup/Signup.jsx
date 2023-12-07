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
  SchoolOption,
  SchoolSelection,
  SignUpHeading,
} from "./style";

import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import {
  setLocallyToken,
  setStatus,
  setToken,
  setUser,
  useGetAllSchoolQuery,
  useRegisterUserMutation,
} from "../../../store/store";
import { useEffect } from "react";
import Loading from "../loading/Loading";
import Swal from "sweetalert2";

const SignupForm = () => {
  const [registerUser, status] = useRegisterUserMutation();
  const {
    data: schoolData,
    error: schoolError,
    isLoading: schoolLoading,
  } = useGetAllSchoolQuery();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const role = useSelector((state) => state?.user?.role) || false;
  const { data, isLoading, isError, error } = status;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    let passedData;
    if (role === "teacher") {
      passedData = {
        role,
        username: data.fullName,
        password: data.password,
        email: data.email,
        subjects: data.subjects || "",
        school: data.school || null,
      };
    } else {
      passedData = {
        role,
        username: data.fullName,
        password: data.password,
        email: data.email,

        school: data.school,
        section: data.section,
        grade: data.grade,
      };
    }

    registerUser(passedData);
  };

  useEffect(() => {
    if (error?.data) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "User already exist",
        showConfirmButton: false,
        timer: 1500,
      });
    }
    if (data) {
      dispatch(setUser(data));
      dispatch(setStatus(true));
      dispatch(setToken(data.token));
      dispatch(setLocallyToken());

      if (role === "teacher") {
        navigate("/assignments");
      } else {
        navigate("/teachers");
      }
    }
  }, [data, error]);

  console.log(error, data);

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
              {...register("subjects", {
                required: "Subject  is required",
                minLength: {
                  value: 3,
                  message: "Subject must be at least 3 characters long",
                },
              })}
            />
            {errors.subjects && (
              <ErrorMessage>{errors.subjects.message}</ErrorMessage>
            )}
          </FormGroup>
        )}
        {role === "student" && (
          <FormGroup>
            <Label>Grade</Label>
            <Input
              {...register("grade", {
                required: "Grade  is required",
              })}
            />
            {errors.grade && (
              <ErrorMessage>{errors.grade.message}</ErrorMessage>
            )}
          </FormGroup>
        )}
        {role === "student" && (
          <FormGroup>
            <Label>Section</Label>
            <Input
              {...register("section", {
                required: "Section  is required",
              })}
            />
            {errors.section && (
              <ErrorMessage>{errors.section.message}</ErrorMessage>
            )}
          </FormGroup>
        )}

        <FormGroup>
          <Label>School</Label>
          <SchoolSelection
            {...register("school", {
              required: "School is required",
            })}
          >
            {schoolData?.schools?.map((school) => {
              return (
                <SchoolOption
                  key={school.id}
                  value={school.id}
                >
                  {school.name}
                </SchoolOption>
              );
            })}
          </SchoolSelection>

          {errors.school && (
            <ErrorMessage>{errors.school.message}</ErrorMessage>
          )}
        </FormGroup>

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
