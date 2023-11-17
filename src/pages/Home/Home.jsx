import "./Home.scss";
import Carousel from "./Carousel";
import BestSeller from "./BestSeller";
const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Carousel />
      <BestSeller />
    </div>
  );
};

export default Home;
