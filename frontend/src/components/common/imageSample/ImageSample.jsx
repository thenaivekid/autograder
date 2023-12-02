import React from "react";
import {
  ImageContainer,
  ImageSampleDiv,
  ImageSampleImg,
  ImageUloadInput,
  ImageUploadDiv,
  ResonpnseMarks,
  Response,
  ResponseComment,
} from "./style";
import sample from "../../../assets/sample.jpeg";
function ImageSample() {
  return (
    <ImageSampleDiv>
      <ImageContainer>
        <ImageSampleImg src={sample} />
      </ImageContainer>
      <ImageUploadDiv>
        <ImageUloadInput type='file' />
      </ImageUploadDiv>
      <Response>
        <ResonpnseMarks>8</ResonpnseMarks>
        <ResponseComment>
            <span>Comment:</span>
          Your explanation covers essential concepts of OOP such as abstraction,
          encapsulation, polymorphism, and inheritance, and relates them to the
          modeling of the real world within programming. The answer also touches
          on the practical application of OOP in making the code robust, secure,
          readable and provides examples of OOP languages which is good.
          However, to improve further, consider explaining how these concepts
          work in tandem within the OOP paradigm and perhaps provide a
          real-world example of OOP in action. Moreover, always ensure to check
          for spelling or grammatical errors to enhance the professionalism of
          your presentation.
        </ResponseComment>
      </Response>
    </ImageSampleDiv>
  );
}

export default ImageSample;
