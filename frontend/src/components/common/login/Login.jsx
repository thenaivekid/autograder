import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  FormContainer,
  FormGroup,
  Input,
  Label,
  LoginHeading,
} from "./style";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setId,
  setLocallyToken,
  setRole,
  setStatus,
  setToken,
  setUser,
  useUserLoginMutation,
} from "../../../store/store";
import { useEffect } from "react";
import Swal from "sweetalert2";
import Loading from "../loading/Loading";
const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userLogin, status] = useUserLoginMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    userLogin(JSON.stringify(data));
  };
  const { data, error, isLoading } = status;

  useEffect(() => {
    if (data) {
      const userData = {
        id: data.user.id,
        username: data.user.username,
        email: data.user.email,
        role: data.role,
      };
      dispatch(setUser(userData));
      dispatch(setStatus(true));
      dispatch(setToken(data.token));
      dispatch(setLocallyToken());

      if (data.role === "teacher") {
        dispatch(setId(data.id));
        navigate("/assignments");
      } else {
        navigate("/teachers");
      }
    }
    if (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [data, error]);

  return (
    <FormContainer>
      <LoginHeading>Login </LoginHeading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormGroup>
          <Label>Username</Label>
          <Input
            {...register("username", {
              required: "Username  is required",
            })}
            type='text'
          />
          {errors.username && (
            <ErrorMessage>{errors.username.message}</ErrorMessage>
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

        <Button type='submit'>{isLoading ? <Loading /> : "Login"}</Button>
      </form>
    </FormContainer>
  );
};

export default LoginForm;
