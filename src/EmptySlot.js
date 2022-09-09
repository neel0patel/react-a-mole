import { useEffect } from "react";
import molehill from "./pics/molehill.png";

const EmptySlot = (props) => {
  useEffect(() => {
    let randomSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randomSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img style={{ width: "30vw" }} src={molehill}></img>
    </div>
  );
};
export default EmptySlot;
