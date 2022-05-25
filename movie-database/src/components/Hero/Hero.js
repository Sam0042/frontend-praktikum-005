import StyledHero from "./Hero.styled";
import gambar01 from "./Assets/gambar-1.jpg";
import Button from "../ui/Button";
import Heading from "../ui/Typography/Heading";
import Paragraph from "../ui/Typography/Paragraph";

function Hero() {
  return (
    <StyledHero>
      <section>
        <div className='hero__left'>
          <Heading variant='secondary' size='xxl'>Spiderman</Heading>
          <h3>
            Genre: Thriller, Drama, Romance
          </h3>
          <Paragraph variant='grey' size='lg'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            cum accusamus quisquam earum velit ea nobis maiores exercitationem
            nam temporibus.
          </Paragraph>
          <Button variant='primary' size=''>Watch Movie</Button>
        </div>
        <div className="hero__right">
          <img
            src={gambar01}
            alt="placeholder"
          />
        </div>
      </section>
    </StyledHero>
  );
}

export default Hero;
