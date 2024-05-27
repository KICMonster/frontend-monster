
import './styles/Grid.css'; // 추가된 CSS 파일을 import 합니다.
import { Link } from 'react-router-dom';


function Grid() {



  return (
    <div className="container" style={{display:'flex'}}>
      <div className="home-container">
        <h1 className="font">당신을 위한 칵테일</h1>
        <div >한 잔은 이미 초라해진 나를 위하여 또 한잔은 너와 나의 영원했던 사랑을 위하여</div>
        <Link to={'/#'}>Get started</Link>
      </div>
    </div>
  );
}

export default Grid;
