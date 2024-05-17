import { Link } from "react-router-dom";
import './BasicMenu.css'
import '../App.css'

function BasicMenu() {
    return (
        <nav id='navbar'>
            <div className="header">
                <ul>
                    <li><Link to={'/'}>메인페이지</Link></li>
                    <li><Link to={'/ViewPage'}>칵테일</Link></li>
                    <li><Link to={'/Ingredient'}>재료</Link></li>
                    <li><Link to={'/TodayCocktail'}>안주</Link></li>
                </ul>
            </div>
        </nav>
    );
}

export default BasicMenu;
