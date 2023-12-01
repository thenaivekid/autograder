import styled from "styled-components";


export const AssignmentBannerDiv = styled.div`
height:30rem;
width:100%;
background-position:center;
background-repeat:no-repeat;
background-size:cover;

position:relative;

`

export const TeacherNameDiv = styled.div`
position:absolute;
bottom:2rem;
left:2rem;
color:${props => props.theme.background};
font-weight:500;
`
