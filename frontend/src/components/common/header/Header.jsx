import { useDispatch, useSelector } from "react-redux";
import {
  DesktopNav,
  Link,
  Logo,
  LogoText,
  LogoutButton,
  Nav,
  NavItem,
  NavItems,
  NavWrapper,
} from "./style";
import {
  removeFromStorage,
  removeStatus,
  removeToken,
  setRole,
  setUser,
} from "../../../store/store";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.status);
  const dispatch = useDispatch();
  const navData = [
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "Login",
      url: "/login",
      active: !user,
    },
    {
      title: "Sign Up",
      url: "/signup",
      active: !user,
    },
    {
      title: "Image",
      url: "/sample",
      active: true,
    },
  ];

  const linkStyle = ({ isActive }) => {
    return {
      borderBottom: isActive ? "1px solid white" : "",
      borderColor: isActive ? "#00d4bd" : "",
      color: isActive ? "#00d4bd" : "",
    };
  };

  return (
    <Nav>
      <NavWrapper>
        <Logo>
          <LogoText to='/'>
            Close<span>AI</span>
          </LogoText>
        </Logo>

        <DesktopNav>
          <NavItems>
            {navData.map((item) => {
              return (
                item.active && (
                  <NavItem key={item.title}>
                    <Link
                      to={item.url}
                      style={linkStyle}
                    >
                      {item.title}
                    </Link>
                  </NavItem>
                )
              );
            })}

            {user && (
              <LogoutButton
                onClick={() => {
                  dispatch(setUser(null));
                  dispatch(setRole(null));
                  dispatch(removeStatus(false));
                  dispatch(removeFromStorage());
                  dispatch(removeToken());
                  navigate("/");
                  location.reload();
                }}
              >
                Logout
              </LogoutButton>
            )}
          </NavItems>
        </DesktopNav>
      </NavWrapper>
    </Nav>
  );
}

export default Header;
