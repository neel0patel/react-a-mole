import { useEffect, useState } from "react";
import moleImg from "./pics/mole.png";

const Mole = (props) => {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 10000);
    let timer = setTimeout(() => {
      props.toggle(false);
    }, randomSeconds);
    return () => clearInterval(timer);
  });
  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={moleImg}
        onClick={props.handleClick}
      ></img>
    </div>
  );
};
export default Mole;
