import React from 'react'
import styled from 'styled-components'

function Slide() {
  return (
    <SlideFormBox>
      <div>slide</div>
    </SlideFormBox>
  )
}

const SlideFormBox = styled.div`
  height: 400px;
  border: 1.5px solid gray;
  background-color: yellow;
`

export default Slide
