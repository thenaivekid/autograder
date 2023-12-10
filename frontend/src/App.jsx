import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkThemeColors, lightThemeColors } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Layout from "./layout/Layout";
import SignupPage from "./pages/common/SignupPage";
import LoginPage from "./pages/common/LoginPage";
import AssignmentCreationPage from "./pages/teacher/AssignmentCreationPage";
import AssignmentAdditionPage from "./pages/teacher/AssignmentAdditionPage";
import AllAssignments from "./components/Teacher/assignments/AllAssignments";
import AssignmentPage from "./pages/student/AssignmentPage";
import HomePage from "./pages/common/HomePage";
import TeacherPage from "./pages/student/TeacherPage";
import SamplePage from "./pages/common/SamplePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAssignList,
  setManyAssignList,
  setRole,
  setStatus,
  setToken,
  setUser,
  useGetAllAssignmentQuestionsQuery,
  useValidateUserQuery,
} from "./store/store";
import AllAssignmentsPage from "./pages/teacher/AllAssignmentsPage";
import { AppContainer } from "./styles/Container";
import FullPageLoading from "./components/common/loading/FullPageLoading";

function App() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user.token);
  const id = useSelector((state) => state?.user?.userData?.id);
  const {
    data: questionsData,
    isLoading: questionsLoading,
    error: questionsError,
  } = useGetAllAssignmentQuestionsQuery({
    token,
    id,
  });
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(JSON.parse(token)));
    }
  }, []);
  const { data, isLoading, error } = useValidateUserQuery(token);
  useEffect(() => {
    if (questionsData) {
      dispatch(setManyAssignList(questionsData));
      dispatch(setAssignList());
    }
  }, [questionsData]);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      dispatch(setToken(token));
    }
  }, []);
  useEffect(() => {
    if (data) {
      dispatch(setRole(data.role));
      dispatch(setUser(data));
      dispatch(setStatus());
    }
  }, [data]);
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          element={<HomePage />}
          index
        />

        <Route
          element={<SignupPage />}
          path='/signup'
        />
        <Route
          element={<LoginPage />}
          path='/login'
        />
        <Route
          element={<AssignmentCreationPage />}
          path='assignments'
        >
          <Route
            element={<AllAssignments />}
            index
          />
        </Route>
        <Route
          element={<TeacherPage />}
          path='/teachers'
        />

        <Route
          element={<AssignmentAdditionPage />}
          path='/assignments/addition'
        />

        <Route
          element={<AssignmentPage />}
          path='/teachers/:id'
        />
        <Route
          element={<SamplePage />}
          path='/sample'
        />
        <Route
          element={<AllAssignmentsPage />}
          path='/assignments/all'
        />
      </Route>
    )
  );
  if (isLoading) {
  }

  return (
    <ThemeProvider theme={lightThemeColors}>
      {!(isLoading || questionsLoading) ? (
        <RouterProvider router={router} />
      ) : (
        <AppContainer>
          <FullPageLoading />
        </AppContainer>
      )}
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
