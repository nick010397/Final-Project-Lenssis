import React from 'react'
import styled from 'styled-components'
import NavBar from '../components/common/NavBar'
import LensItem from '../components/LensItem'
import SlideMove from '../components/main/SlideMove'

function Main() {
  return (
    <MainForm>
      <NavBar />
      {/* 이미지 출력해보기 */}
      {/* <img src={require('../asset/Banner_main.jpg')} alt="광고이미지" /> */}
      <SlideMove />
      <LensItem />
    </MainForm>
  )
}

const MainForm = styled.div`
  justify-content: center;
  margin: 0 auto;
  align-items: center;
`

export default Main
