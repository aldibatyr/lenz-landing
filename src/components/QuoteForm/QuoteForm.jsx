import React from "react";
import "./QuoteForm.scss";
import backgroundImage from "../../assets/stolovaya.jpg";
import gsap from "gsap";
import { useRef } from "react";
import { useEffect } from "react";
const QuoteForm = ({ formState, toggleQuoteForm }) => {
  const mainContainer = useRef(null);

  const handleMouseMove = (e) => {
    parallax(e, ".backgroundImage", -30);
  };

  const parallax = (e, target, movement) => {
    let parent = mainContainer.current.getBoundingClientRect();
    let relX = e.pageX - parent.left;
    let relY = e.pageY - parent.top;

    gsap.to(target, 1, {
      x: ((relX - parent.width / 2) / parent.width) * movement,
      y: ((relY - parent.height / 2) / parent.height) * movement,
    });
  };

  const animateOnHover = () => {
    gsap.to(".submitButton", { y: -5, duration: 0.1 });
  };

  const animateOffHover = () => {
    gsap.to(".submitButton", { y: 5, duration: 0.1 });
  };

  const animateCloseButtonOnHover = () => {
    gsap.to(".closeButton", { y: -3, duration: 0.1 });
  };

  const animateCloseButtonOffHover = () => {
    gsap.to(".closeButton", { y: 3, duration: 0.1 });
  };

  useEffect(() => {
    if (formState) {
      gsap.to(".quoteFormContainer", {
        width: "100vw",
        duration: 0.5,
        ease: "power1.inOut",
      });
      gsap.to(".closeButton", { visibility: "visible" });
    } else {
      gsap.to(".quoteFormContainer", {
        width: 0,
        duration: 0.5,
        ease: "power1.inOut",
      });
    }
  }, [formState]);
  return (
    <div
      className="quoteFormContainer"
      ref={mainContainer}
      onMouseMove={(e) => {
        handleMouseMove(e);
      }}
    >
      <div className="quoteFormContent">
        <img
          className="backgroundImage"
          src={backgroundImage}
          alt="table in a room decoration"
        />
        <div className="quoteForm">
          <form>
            <div
              onMouseEnter={animateCloseButtonOnHover}
              onMouseLeave={animateCloseButtonOffHover}
              className="closeButton"
              onClick={toggleQuoteForm}
            >
              <span className="criss"></span>
              <span className="cross"></span>
            </div>
            <p className="formTitle">Обратная связь</p>
            <p className="formText">
              Пожалуйста, заполните форму и наши менеджеры свяжутся с вами.
            </p>
            <div className="inputGroup">
              <div>
                <span>Ваше имя:</span>
              </div>
              <input
                type="text"
                placeholder="Введите ваше имя"
                name="name"
                autoComplete="off"
                autoCapitalize="words"
                required
              />
            </div>
            <div className="inputGroup">
              <div>
                <span>Телефон:</span>
              </div>
              <input
                type="tel"
                name="number"
                placeholder="Контактный телефон"
                id="number"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
            </div>
            <button
              className="submitButton"
              onMouseEnter={animateOnHover}
              onMouseLeave={animateOffHover}
              type="submit"
            >
              Свяжитесь со мной
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
