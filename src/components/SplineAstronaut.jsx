import React from "react";
import Spline from "@splinetool/react-spline";

export function SplineAstronaut(props) {
  return (
    <div
      style={{
        width: "110%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        transform: "scale(1.2)",
      }}
    >
      <Spline
        scene="https://prod.spline.design/bIs1euSG1Jatf4Yr/scene.splinecode"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
} 