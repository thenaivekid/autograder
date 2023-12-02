import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingleTeacherDiv = styled(Link)`
background-color:${props => props.theme.component};
border:1px solid ${props => props.theme.border};
display: flex;
padding:1rem 2rem;
color:inherit;
flex-direction:column-reverse;
align-items:center;
justify-content:center;

`

export const PhotoDiv = styled.div`
width:10rem;
height:10rem;
border-radius:50%;
flex:1;

`

export const Image = styled.img`

width:100%;
height:100%;
`



export const InfoDiv = styled.div`
flex:1;

`

export const SubjectDiv = styled.div`
text-align:center;
font-size:1.6rem;
font-weight:500;
`

export const NameDiv = styled.div`
margin-top:2rem;
font-weight:600;
font-size:2rem;
`


export const AllTeachersDiv = styled.div`
display:grid;
grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
margin-top:3rem;
gap:3rem;
`




export const AllTeacherInfoDiv = styled.div`
margin-top:2rem;
background-color:${props => props.theme.component};
`


export const AllTeacherInfoText = styled.h2`

font-size:3rem;
text-align:center;
padding:1rem;
`