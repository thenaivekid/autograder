import { useSelector } from "react-redux";
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
import { useState } from "react";

function Header() {
  const [showModal, setShowModal] = useState(false);

  const user = useSelector((state) => state.role.status);
 
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
          <LogoText to='/'>CloseAI</LogoText>
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

            {user && <LogoutButton>Logout</LogoutButton>}
          </NavItems>
        </DesktopNav>
      </NavWrapper>
    </Nav>
  );
}

export default Header;
