import styled from "styled-components";

export const StyledInner = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 24px;
  margin-top: 24px;
  &:first-child {
    margin-top: 0;
  }
`;

export const PostColumns = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 24px;
`;

export const PostColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;
