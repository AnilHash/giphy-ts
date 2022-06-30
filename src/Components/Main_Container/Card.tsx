import React from "react";
import { gifType } from "../../App";

interface cardProps {
  gif: gifType,
  handleModal: (card_id:string)=> void;
}

const Card: React.FC<cardProps> = ({ gif, handleModal }) => {
  return (
    <div className="card" onClick={() => handleModal(gif.id)}>
      <img src={gif.images.preview_gif.url}  alt=""/>
    </div>
  );
};

export default Card;
