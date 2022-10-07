import React from 'react'
import styled from 'styled-components'
import WrapDetail from './WrapDetail'
import DetailSitPvi from './WrapPvi'

function DetailWrap() {
    return (
        <Detail>
            <hr></hr>
            <DetailSitPvi></DetailSitPvi>
            <WrapDetail></WrapDetail>
        </Detail>
    )
}

export default DetailWrap

const Detail = styled.div`
    width: 100%;
    height: 1200px;
    background-color: green;
`
