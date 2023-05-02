import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

export const Header = ({ login, logOutHandler }) => {
  return (
    <HeadersForms>
      {login && (
        <ButtonsHeader>
          <Button onClick={logOutHandler}>Logout</Button>
        </ButtonsHeader>
      )}
    </HeadersForms>
  );
};
const HeadersForms = styled.header`
  width: 100%;
  height: 15vh;
  background-color: grey;
`;
const ButtonsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 20px;
  padding-top: 20px;
`;
