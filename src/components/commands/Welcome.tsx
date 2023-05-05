import {
  Cmd,
  HeroContainer,
  Link,
  PreImg,
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`  
                          ⢀⣴⠗⠀⢀⣠⣴⠋⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⣿⣯⣶⣿⣿⣿⣥⣶⣤⣤⣀⡀⠀⠀⠀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠀⠀⠈⠛⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣶⠶⠚⠀⠀
          ⠀⠀⠀⠀⠀⢠⣠⣤⣴⣿⣿⣿⣿⣿⣿⡿⠋⠈⢻⣿⢿⣿⣿⣿⣿⣿⣯⡀⠀⠀⠀⠀
          ⠀⠀⠀⠀⠀⠀⠉⣻⣿⣿⣿⣿⡟⢱⠏⠀⠀⢀⠘⢿⠈⢿⣿⣿⣿⣿⣿⣿⣶⣦⣄⡠
          ⠀⠀⠀⠀⠐⢾⣾⣿⣿⣿⣿⣿⣴⣷⣶⣆⣉⣑⠃⠸⠀⢸⣟⣿⣹⣿⣿⣿⣿⣿⡿⠃
          ⠀⠀⠀⠀⠀⡠⢮⣿⣿⣿⡟⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣶⣾⣤⣿⣿⣿⣿⣅⠀⠀
          ⠀⠀⠀⣠⢪⣴⣿⣿⣿⣿⠀⢿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿⡏⠻⡆⠀
          ⠀⢠⣺⣾⣿⣿⣿⢹⣻⡿⠀⠀⠉⠛⠛⠛⠛⢋⢠⠇⢿⣿⣿⣿⣿⣿⣿⡿⣿⡀⠀⠀
          ⡰⣳⣿⣿⣿⣿⣿⣞⢬⢏⡀⠀⠀⠀⠀⣀⣀⣤⣬⣤⢤⣼⠯⠝⣳⣾⣿⡇⠈⠁⠀⠀
          ⣿⣿⣿⣿⣿⣿⣿⣿⣿⣾⣏⢄⠀⠀⠁⠀⠉⠀⠀⠀⠀⠀⠀⣔⢿⣿⣧⡸⡀⠀⠀⠀
          ⠻⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡧⣆⠀⠀⠀⠀⠀⠀⠀⢀⣀⢼⣾⣿⣿⣿⣧⢱⠀⠀⠀
          ⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⡿⠀⠙⣶⣄⣀⡀⣀⣀⢤⣦⣿⣿⣿⣿⣿⣿⣷⢾⡄⠀⠀
          ⣄⠀⣸⣿⣿⣿⣿⣿⣿⢏⡀⡄⠀⠈⢿⣿⡿⠶⠊⣹⣿⣿⣿⣿⣿⣿⣿⣿⡎⡆⠀⠀
          ⡗⣰⣿⣿⣿⣿⣿⣿⠧⣀⠙⣿⣀⠀⠀⠉⠁⠀⢰⣿⣿⣿⣿⣿⣿⣿⣿⣿⣗⡇⠀⠀
          ⣿⣿⣿⣿⣿⣿⣿⡟⠀⠀⠱⣿⣿⣷⠀⡀⢀⣤⣿⣿⣿⣿⣿⣿⣿⣿⠫⠚⡰⣇⠀⠀
          
          Orewa Monkey.D.Luffy! 
          `}
        </PreName>
        <div>Hey!! look at me, I have a shell now. I'm practically a hacker.</div>
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
          <Seperator></Seperator>
        </div>
      </div>
      
    </HeroContainer>
  );
};

export default Welcome;
