// Import Footer, Hero, Movies, Navbar Component
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";

function Home() {

  return (
    <>
      <Hero /><br />
      <Movies title='Latest Movies'/>
    </>
  );
}

export default Home;
