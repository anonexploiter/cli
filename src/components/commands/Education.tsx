import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "B.Tech-IT CyberSecurity",
    desc: "Hindustan Institute of Technology and Science, Chennai | 2020 ~ present",
  },
  {
    title: "B.Tech IT",
    desc: " Shibaura Institute of Technology, Omiya| 2022 - 2023",
  },

];

export default Education;
