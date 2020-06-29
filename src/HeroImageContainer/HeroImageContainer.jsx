import React, { useEffect } from "react";
import heroImage from "../assets/hero.jpg";
import architectureSign from "../assets/architecture-sign.png";
import gsap from "gsap";
import './HeroImageContainer.scss'

const HeroImageContainer = () => {

	useEffect(() => {
		gsap.from(".image", {y: 400, opacity: 0, duration: 0.8, ease: "power4.easeOut", delay: 3.4})
	}, [])

  return (
    <div className="imageWrapper">
      <div className="image">
        <div className="imagesStack">
          <img
            id="foreground"
            src={architectureSign}
            alt="architecture knockout letters"
          />
          <img id="background" src={heroImage} alt="shell house prototype" />
        </div>
      </div>
    </div>
  );
};

export default HeroImageContainer;
