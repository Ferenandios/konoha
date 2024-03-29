import styled from "styled-components";

export const ImageAnsoc = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 477px;
  margin-bottom: 48px;
`;

export const StyledImage = styled.img.attrs<{ image: string | undefined }>(
  (props) => ({
    src: props.image
      ? props.image
      : "https://media1.tenor.com/m/I_QTwoqts0IAAAAC/mellstroy.gif" /*"https://placehold.co/1140x600"*/,
    alt: "Post Image",
  })
)`
  width: 848px;
  height: 100%;
`;
