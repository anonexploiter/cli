import { useContext } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Cv: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  if (rerender && currentCommand[0] === "cv") {
    window.open("https://drive.google.com/file/d/1SdFZYYPwDc1q0A3gM6WVSbdIToYzRkje/view", "_blank");
  }

  return <span></span>;
};

export default Cv;
