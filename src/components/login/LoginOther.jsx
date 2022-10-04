import React from "react";
import styled from "styled-components";

const OtherBox = styled.div`
  font-size: 12px;
  color: #a0a0a0;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 36.22px;
  transform: translateX(112px);
`;

const Line = styled.div`
  padding-bottom: 10px;
`;

const Link = styled.a`
  color: black;
  text-decoration: underline;
  padding-left: 10px;
  cursor: pointer;
`;

export default function LoginOther() {
  return (
    <OtherBox>
      <Line>
        • 잠깐! 혹시 처음 방문하셨나요?
        <Link>
          <span>회원가입 하러가기</span>
        </Link>
      </Line>
      <Line>
        • 로그인 정보를 잊어버리셨나요?
        <Link>
          <span>아이디/비밀번호 찾기</span>
        </Link>
      </Line>
    </OtherBox>
  );
}
