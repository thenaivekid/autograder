import styled from "styled-components";

export const AllStudentAssignmentDiv = styled.div`
margin-top:2rem;
width:80%;
margin-left:auto;
margin-right:auto;
`


export const SingleAssignmentDiv = styled.div`
 padding:1rem 2rem 2rem 2rem;
 background-color:${props => props.theme.component};
 margin:4rem auto;

`

export const AllContainerDiv = styled.div``

export const StudentQuestionDiv = styled.div``

export const Form = styled.form`

  background-color:${props => props.theme.component};
 position:fixed;
  margin:4rem auto;
  top:0;
  bottom:0;
  left:0;
  right:0;
  height:100%;
  padding:1rem 2rem 2rem 2rem;

`

export const Label = styled.label`
 display: block;
  margin-bottom: 8px;
  font-size:1.6rem;
`
export const InputTextArea = styled.textarea`
 width: 100%;
  padding:.8rem;
  font-size: 1.6rem;
  background-color:${props => props.theme.background};
  outline:none;
  color:${props => props.theme.text};
  border:1px solid ${props => props.theme.border};
 height:27rem;
`

export const SubmissionButton = styled.button`
padding: 10px 15px;
  font-size: 16px;
  color: ${props => props.theme.link};
  border: none;
  cursor: pointer;
  background-color:${props => props.theme.button};
  font-weight:600;
  width:100%;
  margin-top:1rem;
  color:white;
`
export const ErrorMessage = styled.p`

color:red;
margin-top:.5rem;
font-size:1.2rem;
`
export const AnswerButton = styled.div`

padding:.5rem 1rem;
  font-size: 1.2rem;
  color: ${props => props.theme.link};
  border: none;
  cursor: pointer;
  background-color:${props => props.theme.button};
  color:white;
  font-weight:600;
`

export const HeaderDiv = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
border-bottom:1px solid ${props => props.theme.button};
padding-bottom:1rem;


`
export const DateDiv = styled.div`
display: flex;
margin-top:2rem;
justify-content:space-between;
color:${props => props.theme.otherText};
`
export const AddedDate = styled.div`
font-size:1.6rem;
`


export const DeadLineDate = styled.div`
font-size:1.6rem;


`
export const TeachersQuestionTotalDiv = styled.div`
background-color:${props => props.theme.component};
margin-top:3rem;
padding:1rem 2rem;
width:80%;
margin-left:auto;
margin-right:auto;
`

export const TeacherName = styled.p`
font-size:2rem;
span{
  font-weight:600;
}
`

export const TotalQuestions = styled.p`
font-size:1.6rem;
span{
  font-weight:600;
}
`

export const InputAreaDiv = styled.div`
margin-top:1rem;
`

export const WaitingForResponseDiv = styled.div`
height:8rem;
width:100%;
display: flex;
align-items:center;
justify-content:center;
flex-direction:column;
`