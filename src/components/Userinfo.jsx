import React from "react";
import image from "../assets/img/port02.jpg";

function Userinfo({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <section id="userinfo">
        <div className="Overlay">
            <div className="ModalWrap">
            <div Button = "CloseButton" onClick={handleClose}>
                <i className="fa-solid fa-xmark"></i>
            </div>
            <div Contents>
                <img src={image} alt="smile" />
                <h1>This is a Modal Dialog</h1>
                <div Button = "Button" onClick={handleClose}>Close</div>
            </div>
            </div>
        </div>
    </section>
  );
}

export default Userinfo;