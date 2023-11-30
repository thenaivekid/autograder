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
