import React from "react";
import { MarkAndSuggestionDiv, MarkDiv, SuggestionDiv } from "./style";

function MarksAndSuggestion({ data }) {
  return (
    <MarkAndSuggestionDiv color={data.marks < 4 ? "#eaad99" : " 	#add699"}>
      <MarkDiv>
        <span>{data.marks}</span> out of <span>10</span>
      </MarkDiv>

      <SuggestionDiv>
        <span>Comment:</span> {data.comment}
      </SuggestionDiv>
    </MarkAndSuggestionDiv>
  );
}

export default MarksAndSuggestion;
