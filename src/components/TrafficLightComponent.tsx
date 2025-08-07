import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const blink = ($color: string, $shadow: string, $keyframeColor: string) =>
  keyframes`
  0% {
    background-color: ${$color};
    box-shadow: 0 0 6em ${$shadow};
  }
  50% {
    background-color: ${$keyframeColor};
    box-shadow: 0 0 0em transparent;
  }
`;

const createBlinkAnimation = (
  $color: string,
  $shadow: string,
  $keyframeColor: string
) => css`
  animation: ${blink($color, $shadow, $keyframeColor)} 1.1s step-end infinite;
`;

const TrafficLight = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #333;
  width: 120px;
  height: 320px;
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px 0;
`;

const LightButton = styled.button<{
  $color: string;
  $shadow: string;
  $keyframeColor: string;
  $activeColor: string;
}>`
  width: 80px;
  height: 80px;
  background-color: ${({ $activeColor, $color }) =>
    $activeColor === $color ? $color : "gray"};
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;
  box-shadow: ${({ $activeColor, $color, $shadow }) =>
    $activeColor === $color ? `0 0 6em ${$shadow}` : "none"};
  &:hover {
    ${({ $color, $shadow, $keyframeColor }) =>
      createBlinkAnimation($color, $shadow, $keyframeColor)}
  }
`;

export default function TrafficLightComponent() {
  const [activeColor, setActiveColor] = useState("gray");
  return (
    <>
      <TrafficLight>
        <LightButton
          $color="#ff0000"
          $shadow="#ff3333"
          $keyframeColor="#b30000"
          $activeColor={activeColor}
          onClick={() => setActiveColor("#ff0000")}
        />
        <LightButton
          $color="#ffff00"
          $shadow="#ffff33"
          $keyframeColor="#b2b300"
          $activeColor={activeColor}
          onClick={() => setActiveColor("#ffff00")}
        />
        <LightButton
          $color="#00ff00"
          $shadow="#33ff33"
          $keyframeColor="#00b300"
          $activeColor={activeColor}
          onClick={() => setActiveColor("#00ff00")}
        />
      </TrafficLight>
    </>
  );
}
