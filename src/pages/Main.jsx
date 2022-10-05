import React from 'react'
import NavBar from '../components/common/NavBar'
import LensItem from '../components/LensItem'
import Slide from '../components/main/Slide'

function Main() {
  return (
    <div>
      <NavBar />
      // 이미지 출력해보기
      <img src={require('../asset/Banner_main.jpg')} alt="광고이미지" />
      <Slide />
      <LensItem />
    </div>
  )
}

export default Main
