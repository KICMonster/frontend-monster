import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import LoginRouter from './LoginRouter';
import Mypage from '../pages/Mypage';
import JoinRouter from './JoinRouter';
import Join from '../pages/Join';
import AdditionalForm from '../component/AdditionalForm';
import { Suspense } from 'react';
import ViewPage from '../pages/VIewPage';
import IngredientPage from '../pages/IngredientPage';
import IndexPage from '../pages/todo/IndexPage';
import HistoryPage from '../pages/detail/HistoryPage';
import Craft from '../pages/detail/Craft';
import CocktailDetail from '../pages/CocktailDetail';

const Loading = <div className={'bg-red-800'}>Loading...</div>
const root = createBrowserRouter([
  {
    path: '',
    element: <Suspense fallback={Loading}><Home /></Suspense>         //메인화면
  },
  {
    path: '/login',
    element: <Suspense fallback={Loading}><LoginPage /></Suspense>,
    children: LoginRouter() // LoginRouter()가 객체를 반환하므로 이를 바로 사용     //로그인
  },
  {
    path: '/join',
    element: <Suspense fallback={Loading}><Join />,</Suspense>,
    children: JoinRouter()
  },
  {
    path: '/additional',
    element: <Suspense fallback={Loading}><AdditionalForm /></Suspense>           //회원가입   
  },
  {
    path: '/mypage',
    element: <Suspense fallback={Loading}><Mypage /></Suspense>                   //프로필
  },
  {
    path: '/ViewPage',
    element: <Suspense fallback={Loading}><ViewPage /></Suspense>                  //칵테일리스트

  },
  // {
  //   path: '/CocktailDetail',
  //   element: <Suspense fallback={Loading}><CocktailDetail /></Suspense>                  //칵테일 상세페이지

  // },
  {
    path: '/cocktail/martini',
    element: <Suspense fallback={Loading}><CocktailDetail /></Suspense> // 칵테일 상세페이지(더미 데이터)
  },
  {
    path: '/Ingredient',
    element: <Suspense fallback={Loading}><IngredientPage /></Suspense>             //재료리스트
  },
  {
    path: '/TodayCocktail',
    element: <Suspense fallback={Loading}><IndexPage /></Suspense>                  //추천칵테일
  },
  {
    path: '/history',
    element: <Suspense fallback={Loading}><HistoryPage /></Suspense>                //역사 페이지
  },
  {
    path: '/craft/:key',
    element: <Suspense fallback={Loading} ><Craft /></Suspense>                     //기초제조법페이지
  },

]);

export default root;