import React from "react";
import {
  ButtonWrapper,
  CardButton,
  CardTitle,
  Container,
  OptionsCard,
} from "./style";
import { useNavigate } from "react-router-dom";

function Options() {
  const navigate = useNavigate();
  const cardOptions = [
    {
      id: 1,
      title: "Create A Assignment",
      buttonText: "Create",
      to: "/assignments/addition",
    },
    {
      id: 2,
      title: "View All Assignments",
      buttonText: "View All",
      to: "/assignments/all",
    },
  ];
  return (
    <Container>
      {cardOptions.map((item) => {
        return (
          <OptionsCard key={item.id}>
            <CardTitle>{item.title}</CardTitle>
            <ButtonWrapper>
              <CardButton
                onClick={() => {
                  navigate(item.to);
                }}
              >
                {item.buttonText}
              </CardButton>
            </ButtonWrapper>
          </OptionsCard>
        );
      })}
    </Container>
  );
}

export default Options;
