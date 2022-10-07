import React from 'react'
import styled from 'styled-components'
import DetailTab from './DetailSection'
import DetailWrap from './DetailWrap'

function DetailContainer() {
    return (
        <DetailContainer2>
            Container
            <DetailWrap></DetailWrap>
            <hr />
            <DetailTab></DetailTab>
        </DetailContainer2>
    )
}

export default DetailContainer

const DetailContainer2 = styled.div`
    width: 100%;
    height: auto;
    background-color: white;
`
