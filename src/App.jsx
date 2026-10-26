import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from "./components/About";
import FeaturedArticles from "./components/FeaturedArticles";
import FeaturedTutorials from "./components/FeaturedTutorials";
import Gallery from "./components/Gallery";
import Newsletter from "./components/Newsletter";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <About />
      <FeaturedArticles />
      <FeaturedTutorials />
      <Gallery />
      <Newsletter />
      <Contact />
      <Footer />
    </>
  );
}

export default App;