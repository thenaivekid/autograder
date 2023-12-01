import styled from "styled-components";

export const AddAssignmentDiv = styled.div`
 background-color:${props => props.theme.component};
font-size:3rem;
display: flex;
justify-content:space-between;
margin-top:2rem;
padding:1rem 2rem;
flex-direction:column;
`

export const AddAssignmentTitleDiv = styled.div`

display: flex;
align-items:center;
justify-content:space-between;
margin-top:2rem;
background-color:${props => props.theme.component};
`

export const AddAssignment = styled.h4`

`

export const AddIcon = styled.div`
cursor: pointer;
`

export const AllAssignmentDiv = styled.div`
margin-top:2rem;
background-color:${props => props.theme.component};
padding:1rem 2rem;
`