import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

function Carousel() {
    const [currindex, setcurrIndex] = useState(0);

    const handleNext = () => {
        setcurrIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setcurrIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <>
            <div className="mainContainer">
                <div className="arrowIcon"><ArrowBackIosIcon onClick={handlePrev} /></div>
                <div className="imageBox">
                    <img src={images[currindex].img} alt="" />
                </div>
                <div className="imageContainer">
                    <div className="titleBox">
                        <p>{images[currindex].title}</p>
                    </div>
                    <div className="subTitleBox">
                        <p>{images[currindex].subtitle}</p>
                    </div>
                </div>
                <div className="arrowIcon1"><ArrowForwardIosIcon onClick={handleNext} /></div>
            </div>
        </>
    );
}

export default Carousel;
