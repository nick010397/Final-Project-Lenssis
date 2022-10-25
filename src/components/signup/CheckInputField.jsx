import React, { useState } from 'react';
import styled from 'styled-components';
import { InforEach, Label, InputField } from './SingupForm';
import { useCheckValidity } from '../../api/signupApi';
import { validation } from '../../utils/validation';
import Popup from '../common/Popup';

export default function CheckInputField({ title, name, setUserInfor }) {
  const [value, setValue] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const { refetch } = useCheckValidity(name, value);

  const checkClientValidity = () => {
    const error = validation[name](value);
    if (error) {
      setPopupMessage(error);
      setShowPopup(true);
      return false;
    } else {
      return true;
    }
  };

  const setInfor = async () => {
    const data = await refetch();

    if (data.data.data.data.exists) {
      setPopupMessage(`이미 존재하는 ${title}입니다.`);
      setShowPopup(true);
      setUserInfor(`is${name}Unique`, false);
    } else {
      setPopupMessage(`사용 가능한 ${title}입니다`);
      setShowPopup(true);
      setUserInfor(`is${name}Unique`, true);
    }
    setUserInfor(name, value);
  };

  return (
    <InforEach>
      <Label>{title}</Label>
      <InputField
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <RepetitionCheckBtn
        onClick={async (e) => {
          e.preventDefault();
          const result = checkClientValidity();

          if (result) {
            await setInfor();
          }
        }}
      >
        중복 확인
      </RepetitionCheckBtn>
      {showPopup && <Popup message={popupMessage} show={setShowPopup} />}
    </InforEach>
  );
}
const RepetitionCheckBtn = styled.button`
  transform: translate(260px, -50px);
  width: 72px;
  height: 48px;
  background-color: white;
  border: 1px solid #dedede;
  cursor: pointer;
`;
