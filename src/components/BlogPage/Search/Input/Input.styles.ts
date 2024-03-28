import styled from "styled-components";

export const StyledDiv = styled.div`
  position: relative;
  width: 100%;
  height: 48px;
`;

const TextInput = styled.input.attrs({
  type: "text",
  placeholder: "Поиск по названию статьи",
})`
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  width: 100%;
  height: 100%;
  /* gap: 10px; */
  border-radius: 6px;
  border: 1px solid #919eab52;
  padding-left: 46px;
  &::placeholder {
    color: #333333;
  }
`;

export default TextInput;
