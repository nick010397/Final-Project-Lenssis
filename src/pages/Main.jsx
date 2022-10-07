import React from 'react';
import Event from '../components/main/Event';
import SlideMove from '../components/main/SlideMove';
import notice from '../asset/notice.png';
import stroke from '../asset/Vector.png';

function Main() {
  return (
    <>
      <div id="slide">
        <SlideMove />
      </div>
      <div id="category1">
        <h1>ALL LENS</h1>
        <h2>カラコン</h2>
      </div>
      <button className="all">ALL</button>
      <button className="all">1DAY</button>
      <button className="all">1MONTH</button>

      <div id="a_cate">
        <>
          <ul>
            <li>
              <a href="http://localhost:3000">人気順</a>
            </li>
            <li>
              <a href="http://localhost:3000">新着順</a>
            </li>
            <li>
              <a href="http://localhost:3000">価格が低い順</a>
            </li>
            <li>
              <a href="http://localhost:3000">価格が高い順</a>
            </li>
            <li>
              <a href="http://localhost:3000">レビュー件数順</a>
            </li>
          </ul>
        </>
      </div>
      <button>もっと見る</button>
      <div id="category2">
        <h1>PICKUP ITEM</h1>
        <h2>スタッフおすすめ</h2>
      </div>
      <button>もっと見る</button>
      <div id="category3">
        <h1>NEW ARRIVAL</h1>
        <h2>新商品</h2>
      </div>
      <button>もっと見る</button>
      <Event />

      <div>
        <h2>NOTICE</h2>
        <h3>お知らせ</h3>
        <img src={notice} alt="공지" />
      </div>
      <div>
        <p>2022.09.29</p>
        <a href="/notice">☆生産中止予定商品7種復活のお知らせ☆ </a>
        <a href="/notice">
          <img link="/notice" src={stroke} alt="이동하기" />
        </a>
      </div>
      <div>
        <p>2022.09.29</p>
        <a href="/notice">☆生産中止予定商品7種復活のお知らせ☆ </a>
        <a href="/notice">
          <img link="/notice" src={stroke} alt="이동하기" />
        </a>
      </div>
      <div>
        <p>2022.09.29</p>
        <a href="/notice">☆生産中止予定商品7種復活のお知らせ☆ </a>
        <a href="/notice">
          <img link="/notice" src={stroke} alt="이동하기" />
        </a>
      </div>
      <button>もっと見る</button>
    </>
  );
}

export default Main;
