import { useState } from "react";
import bird from "../svg/bird.svg";
import cat from "../svg/cat.svg";
import cow from "../svg/cow.svg";
import dog from "../svg/dog.svg";
import gator from "../svg/gator.svg";
import horse from "../svg/horse.svg";
import heart from "../svg/heart.svg";
import "../styles/AnimalShow.css";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

function AnimalShow({ type }) {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div onClick={handleClick} className="animal-show">
      <img alt={type} src={svgMap[type]} className="animal" />
      <img alt="heart" src={heart} style={{width: 10 + 10 * clicks + "px"}} className="heart"/>
    </div>
  );
}

export default AnimalShow;
