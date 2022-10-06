import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const OtherBox = styled.div`
    font-size: 12px;
    color: #a0a0a0;
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-top: 36.22px;
    transform: translateX(112px);
`

const Line = styled.div`
    padding-bottom: 10px;
`

const Redirect = styled.span`
    color: black;
    text-decoration: underline;
    padding-left: 10px;
    cursor: pointer;
`

export default function LoginOther() {
    return (
        <OtherBox>
            <Line>
                • 잠깐! 혹시 처음 방문하셨나요?
                <Link to="/signup">
                    <Redirect>회원가입 하러가기</Redirect>
                </Link>
            </Line>
            <Line>
                • 로그인 정보를 잊어버리셨나요?
                <Redirect>아이디/비밀번호 찾기</Redirect>
            </Line>
        </OtherBox>
    )
}
