import React from 'react'
import styled from 'styled-components'

export default function SingupForm() {
    return (
        <SingupBox>
            <Title>
                <span style={{ fontWeight: 'bold' }}>계정 정보</span>를
                입력해주세요
            </Title>
            <InforBox>
                <InforEach>
                    <Label>아이디</Label>
                    <InputField id="id" type="text" />
                    <RepeatCheckBtn>중복확인</RepeatCheckBtn>
                </InforEach>

                <InforEach>
                    <Label>비밀번호</Label>
                    <InputField type="password" />
                </InforEach>

                <InforEach>
                    <Label>비밀번호 확인</Label>
                    <InputField type="password" />
                </InforEach>

                <InforEach>
                    <Label>이메일</Label>
                    <InputField type="email" />
                </InforEach>
                <InforEach>
                    <Label>성별 ( 선택 )</Label>
                    <RadioEach>
                        <span>여성</span>
                        <input type="radio" name="gender" value="female" />
                    </RadioEach>
                    <RadioEach>
                        <span>남성</span>
                        <input type="radio" name="gender" value="male" />
                    </RadioEach>
                </InforEach>
                <buttons>
                    <Button btnType="backward">뒤로</Button>
                    <Button btnType="submit" type="submit">
                        완료
                    </Button>
                </buttons>
            </InforBox>
        </SingupBox>
    )
}

const SingupBox = styled.div`
    width: 534px;
    height: 708px;
    border: solid gray 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Noto Sans KR';
`

const Title = styled.p`
    font-size: 18px;
    margin-bottom: 44px;
`

const InforBox = styled.form`
    display: flex;
    flex-direction: column;
`

const InforEach = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`
const Label = styled.label`
    font-size: 14px;
    color: #606060;
    padding-bottom: 15px;
`

const InputField = styled.input.attrs({ requried: true })`
    border: none;
    border-bottom: 2px solid #f0f0f0;
    width: ${(props) => (props.id ? '238px' : '322px')};
    height: 16px;

    &:focus {
        outline: none;
    }

    &::-ms-reveal,
    ::-ms-clear {
        display: none;
    }
`

const RepeatCheckBtn = styled.button`
    position: absolute;
    transform: translate(260px, 10px);
    width: 72px;
    height: 48px;
    background-color: white;
    border: 1px solid #dedede;
    cursor: pointer;
`

const RadioEach = styled.div`
    font-size: 14px;
    display: flex;
    flex-direction: row;
    width: 60px;
    padding-bottom: 5px;
    justify-content: space-between;
`

const Button = styled.button`
    width: 156px;
    height: 48px;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    margin: 0 8px;
    background: ${(props) =>
        props.btnType === 'backward' ? 'white' : '#00B992'};
    border: ${(props) =>
        props.btnType === 'backward' ? '1px solid #dedede' : 'none'};
    color: ${(props) => (props.btnType === 'backward' ? 'black' : 'white')};
    cursor: pointer;
`
