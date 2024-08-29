/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--borderRadius": "4px",
    "--padding": "0px",
    "--height": "8px",
  },
  medium: {
    "--borderRadius": "4px",
    "--padding": "0px",
    "--height": "12px",
  },
  large: {
    "--borderRadius": "8px",
    "--padding": "2px",
    "--height": "24px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];
  return (
    <BaseProgressBar style={styles} id="file" value={value} max="100">
      <VisuallyHidden>Progress Bar</VisuallyHidden>
    </BaseProgressBar>
  );
};

const BaseProgressBar = styled.progress`
  font-size: var(--fontSize);
  font-family: "Roboto", sans-serif;
  border-radius: var(--borderRadius);
  box-shadow: 0px 2px 4px 0px hsla(0, 0%, 50%, 0.35) inset;
  max-height: var(--height);
  &::-webkit-progress-bar {
    padding: var(--padding);
    border-radius: var(--borderRadius);
    background-color: ${COLORS.transparentGray15};
  }
  
  &::-webkit-progress-value {
    border-radius: var(--borderRadius);
    background-color: ${COLORS.primary};
  }
`;

export default ProgressBar;
