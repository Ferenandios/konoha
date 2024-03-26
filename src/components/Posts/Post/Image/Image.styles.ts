import styled from "styled-components";

export const ImageAnsoc = styled.div`
  width: 100%;
  height: 600px;
  background-color: lime;
`;

export const PostImage = styled.img.attrs({
  src: (props) => (props.image ? props.image : "https://placehold.co/"),
})`
  width: 100%;
  height: 100%;
`;
