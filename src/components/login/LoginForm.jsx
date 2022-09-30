import React, { useState } from "react";
import styled from "styled-components";

export default function LoginForm() {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const idOnchange = (e) => {
    let value = e.currentTarget.value;
    value = value.replace(/[^a-zA-Z0-9]/g, "");
    setId(value);
  };

  const pwOnchnage = (e) => {
    const value = e.currentTarget.value.trim();
    if (value) {
      setPw(value);
    }
  };

  return (
    <LoginFormBox>
      <form method="post">
        <InputBox>
          <label>아이디</label>
          <InputField
            maxLength="20"
            type="text"
            value={id}
            onChange={idOnchange}
          />
        </InputBox>
        <InputBox>
          <label>비밀번호</label>
          <InputField
            maxLength="25"
            type="password"
            value={pw}
            onChange={pwOnchnage}
          />
        </InputBox>
        <ButtonSt type="submit" disabled={!(id.length >= 5 && pw.length >= 8)}>
          로그인
        </ButtonSt>
      </form>

      <div className="login-form-other">
        <div>
          잠깐! 혹시 처음 방문하셨나요?
          <a>
            <span>회원가입 하러가기</span>
          </a>
        </div>
        <div>
          로그인 정보를 잊어버리셨나요?
          <a>
            <span>아이디/비밀번호 찾기</span>
          </a>
        </div>
      </div>
    </LoginFormBox>
  );
}

const LoginFormBox = styled.div`
  box-sizing: border-box;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 534px;
  height: 472px;
  left: 238px;
  top: 162px;
  border: 1.5px solid gray;
  border-radius: 4px;
`;

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 68px;
  width: 322px;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const InputField = styled.input`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  font-size: 18px;

  &:focus {
    outline: none;
    border-bottom: 2px solid green;
  }
`;

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
`;
