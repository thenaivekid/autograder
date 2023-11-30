import React from "react";
import RoleSelection from "../../components/common/roles/RoleSelection";
import { RolePages } from "../../styles/Container";

function Role() {
  return (
    <RolePages>
      <h1>Select The Role</h1>
      <RoleSelection />
    </RolePages>
  );
}

export default Role;
