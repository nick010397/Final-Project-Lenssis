import React from 'react'

export default function SingupForm() {
    return (
        <div>
            <h4>계정 정보를 입력해주세요</h4>
            <box>
                <form>
                    <div>
                        <lable>아이디</lable>
                        <input type="text" />
                        <button>중복확인</button>
                    </div>

                    <div>
                        <lable>비밀번호</lable>
                        <input type="password" />
                    </div>

                    <div>
                        <lable>비밀번호 확인</lable>
                        <input type="password" />
                    </div>

                    <div>
                        <lable>이메일</lable>
                        <input type="email" />
                    </div>
                    <div>
                        <lable>성별</lable>
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked
                        />
                        여성
                        <input type="radio" name="gender" value="male" />
                        남성
                    </div>
                    <buttons>
                        <button>뒤로</button>
                        <button type="submit">완료</button>
                    </buttons>
                </form>
            </box>
        </div>
    )
}
