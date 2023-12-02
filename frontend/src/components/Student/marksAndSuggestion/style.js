import styled from "styled-components";

export const MarkAndSuggestionDiv = styled.div`
margin-top:2rem;
margin-bottom:2rem;
background-color:${props => props.color};
padding:2rem;
`


export const MarkDiv = styled.p`
font-size:2rem;
span{
    font-weight:600;
}
`

export const SuggestionDiv = styled.p`
font-size:2rem;
text-align:justify;
span{
    font-weight:600;
}

`


