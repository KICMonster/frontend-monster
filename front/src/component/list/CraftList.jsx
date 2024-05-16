import { Link } from "react-router-dom";
const craft = [
    {
        title: '바텐딩 기초: 칵테일 계량',
        img: "https://poland-ukraine.com.ua/wp-content/uploads/2021/05/barmen.jpg",
        Optional: '계량'

    },
    {
        title: '바텐딩 기초: 쉐이커와 스트레이너',
        img: "https://s3.absolutdrinks.com/2019/10/16x9_learn_the_cobbler_shaker.jpg?imwidth=500",
        Optional: '스트레이너'
    },
    {
        title: '바텐딩 기초: 글래스 타입',
        img: "https://ae01.alicdn.com/kf/Sd80d3bace3d74118820b363f18fff433J/-.jpg",
        Optional: '글래스'
    },
    {
        title: '클래식 칵테일 배워보기',
        img: "https://www.hakushika.co.jp/kr/enjoy/images/img09_fantastic_lake.jpg",
        Optional: '칵테일'
    },
];
function CraftList() {
    return (
        <aside>
            <header className="CraftListHaeader"><h3>믹솔로지 배워보기</h3></header>
            <div className="CraftList">
                {craft.map((recipe, index) => (
                    <Link to={`/craft/${index}`} key={index}>
                        <article className="CraftListArticle">
                            <img src={recipe.img} />
                            <h4>{recipe.title}</h4>
                        </article>
                    </Link>
                ))}
            </div>
        </aside>
    );
}
export default CraftList;