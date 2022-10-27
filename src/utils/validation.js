import { EMAIL_REG, PW_REG } from './reg';

export const validation = {
  loginId: (id, uniquness = true) => {
    if (id.length < 8) {
      return '아이디는 8글자 이상이여합니다.';
    }
    if (!uniquness) {
      return '아이디 중복 확인 해주세요.';
    }
  },
  email: (email, uniquness = true) => {
    if (!EMAIL_REG.test(email)) {
      return '유효한 형식의 이메일이 아닙니다.';
    }
    if (!uniquness) {
      return '이메일 중복 확인 해주세요.';
    }
  },
  password: (password, match) => {
    if (!PW_REG.test(password)) {
      return '유효한 형식의 비밀번호가 아닙니다.';
    }
    if (!match) {
      return '비밀번호가 일치하지 않습니다.';
    }
  },
  username: (username) => {
    if (!username) {
      return '닉네임을 입력하세요.';
    }
  },
  idforLogin: (id) => {
    if (!id) {
      return '아이디를 입력하세요.';
    }
  },
  pwforLogin: (password) => {
    if (!password) {
      return '비밀번호를 입력하세요.';
    }
  },
};
