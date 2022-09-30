import React from "react";
import styled from "styled-components";
import LoginForm from "../components/login/LoginForm";
import LoginOther from "../components/login/LoginOther";

export default function Login() {
  return (
    <LoginFormBox>
      <LoginForm />
      <LoginOther />
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
