import React, { useEffect, useState } from 'react';
import sicexam from '../../img/sicexam.png';
import ImageClicker from './ImageClicker';
import '../../App.css';

function Grid() {

    return(
        <>
    <div style={{
        gridColumn: '1 / span 3',
        gridRow: '1 / span 2',

      }}>
        <h1>이미지</h1>
        <img src='https://www.thecocktaildb.com/images/media/drink/xwxyux1441254243.jpg' style={{height:'500px'}} />
      </div>

      <div style={{
        gridColumn: '4 / span 5',
        gridRow: '1',


      }}>
        <h1>설명</h1>
        <p className='historyCokatail'>
          칵테일은 술과 여러 종류의 음료, 첨가물 등을 섞어 만든 혼합주를 일컫는다.
          다만, 무알콜 칵테일도 있으며 이들은 목테일(Mocktail, Mock과 Cocktail의 합성어)
          이라고 부른다. 사람의 기호와 취향에 맞추어 독특한 맛과 빛깔을 낼 수 있다.
          명칭의 유래에 대해서는 여러 가지 설이 있지만, 1795년쯤 미국 루이지애나주
.
        </p>
      </div>

      <div style={{
        gridColumn: '5 / span 2',
        gridRow: '2',

      }}>
        <h1>조작</h1>
        <ImageClicker />
      </div>

      <div style={{
        gridColumn: '8',
        gridRow: '2',

      }}>
        <h1>컨텐츠</h1>
        <img src={sicexam} style={{height:'300px'}} />
      </div>

      <div style={{
        gridRow: '3',

      }}>
        <h1>광고</h1>
      </div>
      </>
    );
}

export default Grid;
