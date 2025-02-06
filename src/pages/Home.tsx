import Header from "../component/Header/Header";
import Main from "../component/Main/Main";
import ProductCategories from "../component/Navbar/ProductCategories";
import ImageSlider from "../component/Slider/ImageSlider";

const Home = () => {

  return (
    <>
      <Header />
      <ProductCategories />
      <ImageSlider />
      <Main />
    </>
  );
};

export default Home;
