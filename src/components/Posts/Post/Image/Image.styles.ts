import styled from "styled-components";

export const ImageAnsoc = styled.div`
  width: 100%;
  height: 600px;
  background-color: #dddddd;
`;

export const PostImage = styled.img.attrs<{ image: string }>((props) => ({
  src: props.image ? props.image : "https://placehold.co/1140x600",
  alt: "Post Image",
}))`
  width: 100%;
  height: 100%;
`;
