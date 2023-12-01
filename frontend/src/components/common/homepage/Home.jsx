import {
  GetStartedButton,
  GetStartedDiv,
  HomePageDiv,
  HomePageLeftSideDiv,
  HomePageRightSideDiv,
  Image,
  ImageContainerDiv,
  LogoDiv,
  LogoImageContainer,
  LogoImgage,
  LogoText,
  MainGoalText,
  MainSubText,
} from "./style";
import Logo from "../../../assets/logo.svg";
import Banner from "./../../../assets/homeimage.jpg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Home() {
  const user = useSelector((state) => {
    return state.role.role;
  });

  console.log(user);
  const navigate = useNavigate();
  return (
    <HomePageDiv>
      <HomePageLeftSideDiv>
        <LogoDiv>
          <LogoImageContainer>
            <LogoImgage src={Logo} />
          </LogoImageContainer>
          <LogoText>
            Auto<span>Grader</span>
          </LogoText>
        </LogoDiv>
        <MainGoalText>Uber For Education</MainGoalText>
        <MainSubText>
          CloseAI Autograder helps teachers automate the tedious process of
          manually grading thousands of students using state of the art LLM.
        </MainSubText>

        <GetStartedDiv>
          <GetStartedButton
            onClick={() => {
              if (!user) {
                navigate("/signup");
              }
              if (user === "teacher") {
                navigate("/assignments");
              }
              if (user === "student") {
                navigate("/all/assignments");
              }
            }}
          >
            {user
              ? user === "teacher"
                ? "Add Assignment"
                : "View Assignment"
              : "Get Started"}
          </GetStartedButton>
        </GetStartedDiv>
      </HomePageLeftSideDiv>
      <HomePageRightSideDiv>
        <ImageContainerDiv>
          <Image src={Banner} />
        </ImageContainerDiv>
      </HomePageRightSideDiv>
    </HomePageDiv>
  );
}

export default Home;
