import styled from "styled-components";

export const ImageSampleDiv = styled.div`
border:1px solid ${props => props.theme.border};
width:40rem;
background-color:${props => props.theme.component};
padding:1rem;
`

export const ImageContainer = styled.div`
height:30rem;
width:80%;
margin:auto;
`
export const ImageSampleImg = styled.img`
height:100%;
width:100%;

`

export const ImageUploadDiv = styled.form`
margin-top:1rem;
`

export const ImageUloadInput = styled.input``


export const Response = styled.div`
margin-top:1rem;
border-top:1px solid ${props => props.theme.border};
background-color:#add699;
padding:1rem;
`


export const ResonpnseMarks = styled.p`
font-size:2rem;
`

export const ResponseComment = styled.p`
text-align:justify;
font-size:1.2rem;
span{
    font-weight:700;
}
`


