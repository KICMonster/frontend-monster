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
import CraftList from '../component/list/CraftList';
import Craft from '../pages/detail/Craft';

const Loading = <div className={'bg-red-800'}>Loading...</div>
const root = createBrowserRouter([
  {
    path: '',
    element: <Suspense fallback={Loading}><Home /></Suspense>
  },
  {
    path: '/login',
    element: <Suspense fallback={Loading}><LoginPage /></Suspense>,
    children: LoginRouter() // LoginRouter()가 객체를 반환하므로 이를 바로 사용
  },
  {
    path: '/join',
    element: <Suspense fallback={Loading}><Join />,</Suspense>,
    children: JoinRouter()
  },
  {
    path: '/additional',
    element: <Suspense fallback={Loading}><AdditionalForm /></Suspense>
  },
  {
    path: '/mypage',
    element: <Suspense fallback={Loading}><Mypage /></Suspense>
  },
  {
    path: '/ViewPage',
    element: <Suspense fallback={Loading}><ViewPage /></Suspense>
  },
  {
    path: '/Ingredient',
    element: <Suspense fallback={Loading}><IngredientPage /></Suspense>
  },
  {
    path: '/TodayCocktail',
    element: <Suspense fallback={Loading}><IndexPage /></Suspense>
  },
  {
    path: '/history',
    element: <Suspense fallback={Loading}><HistoryPage /></Suspense>
  },
  {
    path: '/craft/:key',
    element: <Suspense fallback={Loading} ><Craft /></Suspense>
  },

]);

export default root;