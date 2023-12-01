import styled from "styled-components";

export const AssignmentFormDiv = styled.form`
width: 80%;
  background-color:${props => props.theme.component};
  padding:1rem 2rem 2rem 2rem;
  margin:4rem auto;
`

export const FormGroup = styled.div`
  margin-bottom: 2rem;
`;

export const Label = styled.label`
 display: block;
  margin-bottom: 8px;
  font-size:1.6rem;
`;

export const Input = styled.input`
   width: 100%;
  padding:.8rem;
  font-size: 1.6rem;
  background-color:${props => props.theme.background};
  outline:none;
  color:${props => props.theme.text};
  border:1px solid ${props => props.theme.border};
`;
export const InputTextArea = styled.textarea`
   width: 100%;
  padding:.8rem;
  font-size: 1.6rem;
  background-color:${props => props.theme.background};
  outline:none;
  color:${props => props.theme.text};
  border:1px solid ${props => props.theme.border};
  min-height:15rem;
`

export const Button = styled.button`
  padding: 10px 15px;
  font-size: 16px;
  color: ${props => props.theme.link};
  border: none;
  cursor: pointer;
  background-color:${props => props.theme.button};
  font-weight:600;
  width:100%;
  color:${props => props.theme.background};
`;

export const ErrorMessage = styled.p`

color:red;
margin-top:.5rem;
font-size:1.2rem;
`

export const AddAssignmentHeading = styled.h1`
margin-bottom:2rem;
text-align:center;
font-size:3rem;
color:${props => props.theme.otherText};
`