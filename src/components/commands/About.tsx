import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
      Hey there fellow developers 🖖! My name is <HighlightSpan>Surendar</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>an Infosec student </HighlightAlt> who loves nothing more than 
        <br/>diving into the world of Python and networking.
      </p>
      <p>
       I’m also a security researcher at heart, always on the<br />
       lookout for the next big vulnerability to uncover.
      </p>
    </AboutWrapper>
  );
};

export default About;
