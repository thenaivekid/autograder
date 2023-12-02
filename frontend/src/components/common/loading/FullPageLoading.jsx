import React from 'react'
import { FullPageLoadingDiv } from './style'

function FullPageLoading() {
  return (
   <FullPageLoadingDiv>
    <div class="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
   </FullPageLoadingDiv>
  )
}

export default FullPageLoading