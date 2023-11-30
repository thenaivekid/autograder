import React from "react";
import { MarkAndSuggestionDiv, MarkDiv, SuggestionDiv } from "./style";

function MarksAndSuggestion({ data }) {
  return (
    <MarkAndSuggestionDiv>
      <MarkDiv>{data.marks}</MarkDiv>

      <SuggestionDiv>{data.comment}</SuggestionDiv>
    </MarkAndSuggestionDiv>
  );
}

export default MarksAndSuggestion;
