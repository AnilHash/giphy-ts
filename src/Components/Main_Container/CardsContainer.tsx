import React, { useState } from "react";
import Card from "./Card";

import "../../styles/components/cardcontainer.scss";
import Modal from "../Modal";
import { gifType } from "../../App";

interface Props {
  cards : gifType[];
}

const CardsContainer:React.FC<Props> = ({ cards }) => {
  const [id, setId] = useState('');
  const [showModal, setShowModal] = useState(false);
  function handleModal(card_id:string) {
    setId(card_id);
    setShowModal(true);
  }
  return (
    <div className="cards-container">
      {cards?.map((gif) => (
        <Card key={gif.id} gif={gif} handleModal={handleModal} />
      ))}

      {showModal && (
        <Modal onClose={() => setShowModal(false)} id={id} />
      )}
    </div>
  );
};

export default CardsContainer;
