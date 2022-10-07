import React from 'react'
import styled from 'styled-components'

function DetailSitPvi() {
    return (
        <Detail>
            WrapPvi
            <Detail2>
                <img
                    src="https://lenssis.jp/data/item/8729694823/7JeQ7J2866aw6re466CI7J20_1month_7IOB7IS42.jpg"
                    alt=""
                />
                <ul>
                    <li>img1</li>
                    <li>img2</li>
                    <li>img3</li>
                </ul>
            </Detail2>
        </Detail>
    )
}

export default DetailSitPvi

const Detail = styled.div`
    width: 40%;
    height: 600px;
    background-color: white;
    float: left;
`

const Detail2 = styled.div`
    width: 600px;
    height: 700px;
    background-color: skyblue;
    float: left;
`
