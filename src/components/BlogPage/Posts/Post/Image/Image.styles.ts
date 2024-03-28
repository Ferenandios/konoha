import styled from "styled-components";

export const ImageAnsoc = styled.div`
  width: 100%;
  height: 600px;
  background-color: #dddddd;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

export const PostImage = styled.img.attrs<{ image: string | undefined }>(
  (props) => ({
    src: props.image
      ? props.image
      : "https://media1.tenor.com/m/I_QTwoqts0IAAAAC/mellstroy.gif" /*"https://placehold.co/1140x600"*/,
    alt: "Post Image",
  })
)`
  width: 100%;
  height: 100%;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;
