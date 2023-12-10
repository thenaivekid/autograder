
import styled from "styled-components"
export const Container = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap:1rem;
`

export const OptionsCard = styled.div`
border:1px solid black;
padding:2rem;
`

export const CardTitle = styled.h3`
font-size:5rem;
text-align:center;
margin-bottom:2rem;
`
export const ButtonWrapper=styled.div`
text-align:center;
`
export const CardButton = styled.button`
outline:none;
border:none;
background-color:#185abc;
color:white;
padding:1rem 2rem;
font-size:2rem;
cursor: pointer;

`