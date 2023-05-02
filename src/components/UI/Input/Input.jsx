import React from "react";
import styled from "styled-components";

const Input = (props) => {
  return (
    <FormBox className="form2">
      <label htmlFor="text">{props.children}</label>
      <input
        className="input"
        style={{ marginBottom: props.marginBottom, marginTop: props.marginTop }}
        type={props.type}
        value={props.value}
        onChange={props.onChange}
      />
    </FormBox>
  );
};
export default Input;

const FormBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-weight: 600;
  input {
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 10px;
    outline: none;
    margin-top: 8px;
    margin-bottom: 20px;
    padding: 20px 15px 20px 23px;
  }
`;
