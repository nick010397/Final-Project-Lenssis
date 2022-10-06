import React, { useState } from 'react'
import styled from 'styled-components'
import deleteIcon from '../../static/img/VectordeleteIcon.png'

export default function LoginForm() {
    const [id, setId] = useState('')
    const [pw, setPw] = useState('')
    const [isIdOnFocus, setIsIdOnFoucs] = useState(false)
    const [isPwOnFocus, setIsPwOnFoucs] = useState(false)

    const idOnchange = (e) => {
        let value = e.currentTarget.value
        value = value.replace(/[^a-zA-Z0-9]/g, '')
        setId(value)
    }

    const pwOnchnage = (e) => {
        const value = e.currentTarget.value.trim()
        setPw(value)
    }

    return (
        <form method="post">
            <InputBox>
                <label>아이디</label>
                <div>
                    <InputField
                        maxLength="20"
                        type="text"
                        value={id}
                        onChange={idOnchange}
                        onFocus={() => {
                            setIsIdOnFoucs(true)
                        }}
                    />
                    <DeleteBtn
                        onClick={() => {
                            setId('')
                        }}
                        style={{
                            display: isIdOnFocus && id ? 'inline' : 'none',
                        }}
                    />
                </div>
            </InputBox>
            <InputBox>
                <label>비밀번호</label>
                <div>
                    <InputField
                        maxLength="25"
                        type="password"
                        value={pw}
                        onChange={pwOnchnage}
                        onFocus={() => {
                            setIsPwOnFoucs(true)
                        }}
                    />
                    <DeleteBtn
                        style={{
                            transform: 'translate(-50px, 15px)',
                            display: isPwOnFocus && pw ? 'inline' : 'none',
                        }}
                        onClick={() => {
                            setPw('')
                        }}
                    />
                </div>
            </InputBox>

            <ButtonSt
                type="submit"
                disabled={!(id.length >= 5 && pw.length >= 8)}
            >
                로그인
            </ButtonSt>
        </form>
    )
}

const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    height: 68px;
    width: 322px;
    margin-bottom: 30px;
    font-size: 14px;
    color: #606060;
`

const InputField = styled.input`
    border: none;
    border-bottom: 2px solid #f0f0f0;
    padding-bottom: 8px;
    font-size: 18px;
    margin-top: 10px;
    width: 90%;

    &:focus {
        outline: none;
        border-bottom: 2px solid green;
    }
`

const DeleteBtn = styled.img.attrs({ src: deleteIcon, alt: 'delete Icon' })`
    width: 16.67px;
    height: 16.67px;
    position: absolute;
    transform: translate(-27px, 15px);
    cursor: pointer;
`

const ButtonSt = styled.button`
    width: 322px;
    height: 48px;
    font-size: 16px;
    background: #00b992;
    border-radius: 6px;
    border: none;
    color: white;
    &:hover {
        cursor: pointer;
    }

    &:disabled {
        background-color: rgba(23, 23, 23, 0.25);
    }
`
