import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import Icon from "../Icon";
import { getDisplayedValue } from "./Select.helpers";

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <NativeSelect value={value} onChange={onChange}>
        {children}
      </NativeSelect>
      <PresentationalBit>
        {displayedValue}
        <MyIconWrapper style={{ "--size": 24 + "px" }}>
          <Icon id={"chevron-down"} size={24} />
        </MyIconWrapper>
      </PresentationalBit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
  isolation: ;
`;

const NativeSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  appearance: none;
  opacity: 0;
`;

const PresentationalBit = styled.div`
  color: ${COLORS.gray700};
  background-color: ${COLORS.transparentGray15};
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 1rem;
  font-family: "Roboto";
  font-weight: 700;
  padding-right: 52px;

  ${NativeSelect}:focus + & {
    outline: 1px dotted #212121;
    outline: 1px solid -webkit-focus-ring-color;
  }
  ${NativeSelect}:hover + & {
    color: black;
  }
`;


const MyIconWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 10px;
  bottom: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

export default Select;
