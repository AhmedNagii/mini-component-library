import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const SIZES = {
  small: {
    "--fontSize": "14px",
    iconSize: "20px",
  },
  large: {
    "--fontSize": "18px",
    iconSize: "24px",
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = SIZES[size];

  return (
    <Wrapper role="input">
      <VisuallyHidden>{label}</VisuallyHidden>
      <TextInput width={width} style={styles} placeholder={label} />
      <MyIconWrapper style={{ "--size": 24 + "px" }}>
        <Icon id={icon} size={styles.iconSize} />
      </MyIconWrapper>
    </Wrapper>
  );
};

const TextInput = styled.input`
  font-size: var(--fontSize);
  color: ${COLORS.gray700};
  font-family: "Roboto";
  padding: 0;
  margin: 0;
  outline: none;
  border: none;
  width: ${(p) => p.width};
`;
const Wrapper = styled.div`
  position: relative;

  width: fit-content;
  border-bottom: 1px solid ${COLORS.gray500};
  padding: 4px;
  padding-left: 24px;
  color: ${COLORS.gray700};
  &:hover {
    color: ${COLORS.black};
    border-bottom: 1px solid ${COLORS.black};
  }
  &:hover ${TextInput} {
    color: ${COLORS.black};
  }
  &:focus {
    outline: 1px dotted #212121;
    outline: 1px solid -webkit-focus-ring-color;
  }
`;

const MyIconWrapper = styled.div`
  position: absolute;
  top: 2px;
  left: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

export default IconInput;
