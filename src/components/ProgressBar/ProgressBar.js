/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const ProgressBar = ({ value, size }) => {
  // const height = (size) => {
  //   if(size === 'small') {
  //     return 8;
  //   } else if(size === 'medium') {
  //     return 12;
  //   }
  //   return 24;
  // }

  // const padding = size === 'large'? 2 : 0;

  const STYLES = {
    small: {
      height: 8,
      padding: 0,
    },
    medium: {
      height: 12,
      padding: 0,
    },
    large: {
      height: 24,
      padding: 2,
    },
  };
  const style = STYLES[size];
  if (!style) {
    throw new Error("The size you gave as input is not correct");
  }
  return (
    <OuterBar
      style={{
        "--height": style.height + "px",
        "--padding": style.padding + "px",
      }}
      aria-valuenow={value}
      aria-label="progressbar"
      role="progressbar"
    >
      <VisuallyHidden value={value}></VisuallyHidden>

      <FilledBar
        style={
          {
           "--width": value + "%", 
           "--padding": style.padding + "px",
           "--radius": value === 99? '4px': '8px 0px 0px 8px'
          }}
      ></FilledBar>
    </OuterBar>
  );
};

const OuterBar = styled.div`
  background: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  width: 370px;
  height: var(--height);
  overflow: hidden;
  padding: var(--padding);
`;

const FilledBar = styled.div`
  background: ${COLORS.primary};
  border-radius: var(--radius);
  width: var(--width);
  height: 100%;
  padding: var(--padding);
`;

export default ProgressBar;
