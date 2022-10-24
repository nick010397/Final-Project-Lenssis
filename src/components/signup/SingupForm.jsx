import React from 'react';
import styled from 'styled-components';
import Button from '../login/Button';
import CheckInputField from './CheckInputField';
import GenderInputField from './GenderInputField';
import PasswordInputField from './PasswordInputField';

export default function SingupForm({ onSubmit, setUserInfor }) {
  return (
    <>
      <InforBox noValidate onSubmit={onSubmit}>
        <CheckInputField
          title={'아이디'}
          name={'loginId'}
          setUserInfor={setUserInfor}
        />
        <CheckInputField
          title={'이메일'}
          name={'email'}
          setUserInfor={setUserInfor}
        />
        <InforEach>
          <Label>닉네임</Label>
          <InputField
            type="text"
            maxLength="20"
            onChange={(e) => {
              setUserInfor('username', e.target.value);
            }}
          />
        </InforEach>
        <PasswordInputField setPasswordInfor={setUserInfor} />
        <GenderInputField setGenderInfor={setUserInfor} />
        <Button text="완료" onClick={onSubmit()} />
      </InforBox>
      {/* ///{false && <Popup message={popupMessage} show={setShowPopup} />} */}
    </>
  );
}

const InforBox = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InforEach = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;
export const Label = styled.label`
  font-size: 14px;
  color: #606060;
  padding-bottom: 15px;
`;

export const InputField = styled.input.attrs({ requried: true })`
  border: none;
  border-bottom: 2px solid #f0f0f0;
  width: ${(props) => (props.short ? '238px' : '322px')};
  height: 16px;
  padding-bottom: 8px;

  &:focus {
    outline: none;
  }

  &::-ms-reveal,
  ::-ms-clear {
    display: none;
  }
`;
