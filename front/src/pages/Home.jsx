import BasicLayout from '../layouts/BasicLayout';
import "../layouts/BasicLayout.css"
import ImageClicker from '../component/mian/ImageClicker';
import InteractiveImage from '../component/mian/InteractiveImage';
import CocktailLink from '../component/mian/CocktailLink';
import Grid from '../component/mian/Grid';
import sicexam from '../img/sicexam.png';
import MapContainer from '../component/detail/MapContainer';


function Home({dummyData}) {

  return (
    <BasicLayout >
      <Grid />

      {/* <ImageClicker /> */}
      {/* <InteractiveImage /> */}

      {/* <CocktailLink /> */}

    </BasicLayout>
  );
}
export default Home;