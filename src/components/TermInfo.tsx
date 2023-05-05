import { User, WebsiteName, Wrapper } from "./styles/TerminalInfo.styled";

const TermInfo = () => {
  return (
    <Wrapper>
      <User>root</User>@<WebsiteName>0xanon</WebsiteName>#
    </Wrapper>
  );
};

export default TermInfo;
