import styled from "styled-components";

export const Container = styled.main`
  max-width: 960px;
  margin: auto;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 10px;
`;

export const GridItem = styled.div`
  background: #fff;
  padding: 10px 11px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
