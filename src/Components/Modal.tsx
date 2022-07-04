import React, { useEffect, useState } from "react";
import "../styles/components/modal.scss";
import { gifType, modalProps } from "../Types";

const Modal: React.FC<modalProps> = ({ id, onClose }) => {
  const [gif, setGif] = useState<gifType>();

  useEffect(() => {
    fetch(
      `https://api.giphy.com/v1/gifs/${id}?api_key=fzzmkHZQdDPrFCl9NnL2w2tqYlTIEnRR`
    )
      .then((res) => res.json())
      .then((data) => setGif(data.data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {!gif?.title ? (
          <div className="loader"></div>
        ) : (
          <>
            <div className="modal-header">
              <button className="button" onClick={onClose}>
                X
              </button>
              <h4 className="modal-title">{gif?.title}</h4>
            </div>
            <div className="modal-body">
              <img src={gif?.images.original.url} alt="" />
            </div>
            <div className="modal-footer"></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Modal;
