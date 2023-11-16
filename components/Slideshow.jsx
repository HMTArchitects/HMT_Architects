"use client";
import React from "react";
import styled, { keyframes, css } from "styled-components";
import award1 from "assets/AwardPics/award1.jpg";
import award2 from "assets/AwardPics/award2.jpg";
import akshaya1h from "assets/Website - Update/Akshaya Hospital/1 H.jpg";
import srinivasan8 from "assets/Website - Update/Srinivasan, Karanodai/8.jpg";
import farmhouse3 from "assets/Website - Update/Farm House, Devaneri/3.jpg";
import siva7 from "assets/Website - Update/Siva, Karur/7.jpg";
import karthika2 from "assets/Website - Update/Karthika, Dindigul/2.jpg";
import NextImage from "next/image"; // Use an alias like NextImage

const Slideshow = () => {
  const row1 = [award1, award2, akshaya1h,srinivasan8,farmhouse3,siva7,karthika2];

  return (
    <AppContainer>
      <Marquee>
        <MarqueeGroup>
          {row1.map((el, index) => (
            <NextImage
              key={index}
              src={el}
              alt={`Image ${index}`}
              width={400}
              height={300}
              priority
            />
          ))}
        </MarqueeGroup>
        <MarqueeGroup>
          {row1.map((el, index) => (
            <NextImage
              key={index}
              src={el}
              alt={`Image ${index}`}
              width={400}
              height={300}
              priority
            />
          ))}
        </MarqueeGroup> 
      </Marquee>
    </AppContainer>
  );
};
export default Slideshow;

const AppContainer = styled.div`
  color: #000000;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%; // Set the width to 100% to fill the entire available space
  height: 100vh; // Set the height to 100vh to make it full height of the viewport
`;


const Text = styled.div`
  font-size: 35px;
  font-weight: 500;
  margin-bottom: 10px;
  color: #02203c;
`;

const Note = styled.div`
  font-size: 18px;
  font-weight: 200;
  margin-bottom: 40px;
  color: #7c8e9a;
`;

const Marquee = styled.div`
  display: flex;
  width: 600px;
  overflow: hidden;
  user-select: none;
  height: 100vh;

  mask-image: linear-gradient(
    to right,
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 10%,
    hsl(0 0% 0% / 1) 90%,
    hsl(0 0% 0% / 0)
  );
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  ${'' /* width: 100%; */}
  animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: 50%; // Set the width to 100% to fit the div
  padding: 2%; // Use a relative padding (adjust as needed)
  margin-right: 10px; // Add right margin for the gap between images
`;


const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 0.5rem;
  aspect-ratio: 16/9;
  padding: 5px 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
