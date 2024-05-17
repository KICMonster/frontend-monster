import BasicLayout from '../layouts/BasicLayout';
import "../layouts/BasicLayout.css"
import ImageClicker from '../component/mian/ImageClicker';
import InteractiveImage from '../component/mian/InteractiveImage';
import CocktailLink from '../component/mian/CocktailLink';

function Home() {

  return (
    <BasicLayout >

      <ImageClicker />

      <InteractiveImage />

      <CocktailLink />
      
    </BasicLayout>
  );
}
export default Home;