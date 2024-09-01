import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  return (
    <Wrapper>
      <TextInput placeholder={"Search..."} />
      <MyIconWrapper style={{ "--size": 24 + "px" }}>
        <Icon id={"search"} size={18} />
      </MyIconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: fit-content;
  border-bottom: 1px solid ${COLORS.gray500};
  padding: 4px;
  padding-left: 24PX;
`;
const TextInput = styled.input`
  border: none;
`;

const MyIconWrapper = styled.div`
  position: absolute;
  top: 4px;
  left: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
`;

export default IconInput;
