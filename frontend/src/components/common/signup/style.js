import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const FormContainer = styled.div`
  width: 40rem;
  background-color:${props => props.theme.component};
  padding:1rem 2rem 2rem 2rem;
  border:1px solid ${props => props.theme.border};
`;

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

export const Button = styled.button`
 padding:1rem 1.5rem;
  font-size: 16px;
  color: ${props => props.theme.background};
  border: none;
  cursor: pointer;
  background-color:${props => props.theme.button};
  font-weight:600;
  width:100%;
`;
export const ErrorMessage = styled.p`

color:red;
margin-top:.5rem;
font-size:1.2rem;
`

export const SignUpHeading = styled.h1`
margin-bottom:2rem;
text-align:center;
font-size:3rem;
color:${props => props.theme.otherText};
`

export const LoginDiv = styled.div`
margin-top:2rem;
display: flex;
font-size:2rem;
gap:2rem;
`

export const LoginHeading = styled(Link)`

color:${props => props.theme.specialText};
`

export const SchoolSelection = styled.select`
outline:none;
border:none;
font-size:1.6rem;
padding:1rem;
color:${props => props.theme.text};
  cursor: pointer;
  background-color:${props => props.theme.background};
width:100%;
`

export const SchoolOption = styled.option`

`