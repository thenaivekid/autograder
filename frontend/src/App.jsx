import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkThemeColors } from "./styles/Theme";
import GlobalStyle from "./styles/GlobalStyle";
import Role from "./pages/common/Role";
import Layout from "./layout/Layout";
import SignupPage from "./pages/common/SignupPage";
import LoginPage from "./pages/common/LoginPage";
import AssignmentCreationPage from "./pages/teacher/AssignmentCreationPage";
import AssignmentAdditionPage from "./pages/teacher/AssignmentAdditionPage";
import AllAssignments from "./components/Teacher/assignments/AllAssignments";
import AssignmentPage from "./pages/student/AssignmentPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          element={<Role />}
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
          element={<AssignmentAdditionPage />}
          path='/assignments/addition'
        />

        <Route
          element={<AssignmentPage />}
          path='/all/assignments'
        />
      </Route>
    )
  );

  return (
    <ThemeProvider theme={darkThemeColors}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
