import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../login/Button';
import { useNavigate } from 'react-router';

export default function Popup({ message, show }) {
  const navigate = useNavigate();
  return (
    <PopupBackDrop
      onClick={() => {
        show(false);
      }}
    >
      <PopupBox>
        <CloseIcon
          onClick={() => {
            show(false);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </CloseIcon>
        <p> {message}</p>
        <Button
          text="확인"
          onClick={() => {
            show(false);
            if (message === '회원가입에 성공했습니다.') {
              navigate('/');
            }
          }}
        />
      </PopupBox>
    </PopupBackDrop>
  );
}

const PopupBackDrop = styled.div`
  background: #252424cc;
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
`;

const PopupBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 408px;
  height: 237px;
  z-index: 99;
  background-color: white;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const CloseIcon = styled.button`
  background-color: white;
  border: none;
  font-size: 15px;
  padding-right: 20px;
  align-self: end;
  cursor: pointer;
`;
