import React from "react";
import { RoleBoxDiv, RoleBoxes } from "./style";
import { useDispatch } from "react-redux";
import { setRole } from "../../../store/store";
import { useNavigate } from "react-router-dom";

function RoleSelection() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const roles = ["Teacher", "Student"];
  return (
    <RoleBoxDiv>
      {roles.map((role) => {
        return (
          <RoleBoxes
            key={role}
            onClick={() => {
              dispatch(setRole(role));
              navigate("/signup");
            }}
          >
            {role}
          </RoleBoxes>
        );
      })}
    </RoleBoxDiv>
  );
}

export default RoleSelection;
