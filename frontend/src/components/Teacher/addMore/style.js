import styled from "styled-components"

export const AddAssignment = styled.div`
font-size:3rem;
`

export const AddIcon = styled.div`
cursor: pointer;
font-size:3rem;
`

export const AddAssignmentTitleDiv = styled.div`

display: flex;
align-items:center;
justify-content:space-between;
margin-top:2rem;
background-color:${props => props.theme.component};
padding :1rem;
position:sticky;
top:62px;
box-shadow:0 0 10px 0 rgba(0,0,0,0.3);
`
