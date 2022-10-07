import React from 'react'
import styled from 'styled-components'

function WrapDetail() {
    return <Detail>WrapDetail</Detail>
}

export default WrapDetail

const Detail = styled.div`
    width: 50%;
    height: auto;
    min-height: 500px;
    background-color: white;
    float: right;
    position: relative;
`
