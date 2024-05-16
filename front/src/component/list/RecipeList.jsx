import { Link } from "react-router-dom";
const recipe = [
    {
        title: '바텐딩 기초: 칵테일 계량',
        img: "",
        Optional: 계량

    },
    {
        title: '바텐딩 기초: 쉐이커와 스트레이너',
        img: "",
        Optional: 스트레이너
    },
    {
        title: '바텐딩 기초: 글래스 타입',
        img: "",
        Optional: 글래스
    },
    {
        title: '클래식 칵테일 배워보기',
        img: "",
        Optional: 칵테일
    },
];
function RecipeList({ ...recipe }) {
    return (
        <aside>
            <head><h3>믹솔로지 배워보기</h3></head>
            <Link to={'/Recipe'}>
                <aticle>
                    <img src={recipe.img} />
                    <h4>{recipe.title}</h4>
                </aticle>

            </Link>
        </aside>
    );
}
export default RecipeList;