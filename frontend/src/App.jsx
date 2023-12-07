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
import { useDispatch } from "react-redux";
import { setToken } from "./store/store";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      dispatch(setToken(JSON.parse(token)));
    }
  }, []);

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
          path='/teachers/:name/:id'
        />
        <Route
          element={<SamplePage />}
          path='/sample'
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={lightThemeColors}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
