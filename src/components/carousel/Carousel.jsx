import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import cert2 from "../../assets/certificates/javascript.png";
import cert3 from "../../assets/certificates/frontendlibs.png";
import cert1 from '../../assets/certificates/fullstack.png'
import cert4 from "../../assets/certificates/legacyqa.png";
import cert5 from "../../assets/certificates/apisandmicro.png";
import cert6 from "../../assets/certificates/qa.png";
import cert7 from "../../assets/certificates/datavis.png";
import cert8 from "../../assets/certificates/webdesign.png";
import cert9 from "../../assets/certificates/okcoders.png";

export default function ImageCarousel() {
	return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: "60%",
          color: "green",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          paddingTop: "90px",
        }}
      >
        <Carousel autoplay>
          <div>
            <img src={cert9} alt="fullstack" />
          </div>
          <div>
            <img src={cert1} alt="fullstack" />
          </div>
          <div>
            <img src={cert2} alt="javascript" />
          </div>
          <div>
            <img src={cert3} alt="frontendlibraries" />
          </div>
          <div>
            <img src={cert4} alt="legacyqa" />
          </div>
          <div>
            <img src={cert4} alt="legacyqa" />
          </div>
          <div>
            <img src={cert5} alt="apisandmicroservices" />
          </div>
          <div>
            <img src={cert6} alt="qualityassurance" />
          </div>
          <div>
            <img src={cert7} alt="datavisualization" />
          </div>
          <div>
            <img src={cert8} alt="webdesign" />
          </div>
        </Carousel>
      </div>
    </div>
  );
}
