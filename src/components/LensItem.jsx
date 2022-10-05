import React from 'react'
import styled from 'styled-components'

function LensItem() {
  return <ItemFormBox>LensItem</ItemFormBox>
}

const ItemFormBox = styled.div`
  width: 200px;
  height: 200px;
  background-color: skyblue;
  border: 1.5px solid gray;
  border-radius: 4px;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export default LensItem
