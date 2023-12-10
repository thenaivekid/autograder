import styled from "styled-components";

export const SingleAssignmentDiv = styled.div`
display: flex;
font-size:2rem;
background-color:${props => props.theme.background};
padding:1rem;
cursor: pointer;
margin-bottom:1rem;
flex-direction:column;
gap:2rem;
border:1px solid rgba(0,0,0,0.3);
`

export const QuestionDiv = styled.div`
font-size:2rem;
`

export const AllAssignmentDiv = styled.div`
margin-top:1rem;
`


export const DateDiv = styled.div`
display: flex;
justify-content:space-between;
`
export const AddedDate = styled.div`
font-size:1.6rem;
`


export const DeadLineDate = styled.div`
font-size:1.6rem;


`

export const AllAssignmentHeading = styled.div`

font-size:3rem;
background-color:${props => props.theme.background};
padding:1rem;
color:${props => props.theme.otherText};
font-weight:600;
text-align:center;
`