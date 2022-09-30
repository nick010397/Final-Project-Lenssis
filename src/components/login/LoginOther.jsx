import React from "react";

export default function LoginOther() {
  return (
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
  );
}
