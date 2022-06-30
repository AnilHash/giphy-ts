import React from "react";
import { cardProps } from "../../Types";


const Card: React.FC<cardProps> = ({ gif, handleModal }) => {
  return (
    <div className="card" onClick={() => handleModal(gif.id)}>
      <img src={gif.images.preview_gif.url}  alt=""/>
    </div>
  );
};

export default Card;
