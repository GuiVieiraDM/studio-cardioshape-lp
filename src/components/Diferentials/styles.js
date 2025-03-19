// components/sections/SectionThree.styles.ts

import styled from "styled-components";

export const Container = styled.section`
  padding: 80px;
  background: ${(props) => props.theme.COLORS.BACKGROUND_900};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  gap: 40px;

  @media (max-width: 1343px) {
    flex-direction: column;
    align-items: center;
    padding: 32px;
  }
`;

export const Content = styled.div`
  max-width: 600px;
  color: ${(props) => props.theme.COLORS.WHITE};
  text-align: left;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  p {
    @media (max-width: 768px) {
    text-align: left;
  }
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-size: 1.6rem;
  text-align: left;
  flex-wrap: wrap;
  max-width: 700px;
  width: 100%;

`;

export const BulletIcon = styled.div`
  width: 16px;
  height: 16px;
  background-color: ${(props) => props.theme.COLORS.ORANGE};
  border-radius: 50%;
  margin-right: 15px;
`;

export const Text = styled.p`
  flex: 1;
  margin: 0;
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-size: 1.6rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  flex-shrink: 0;
  max-width: 600px;
  width: 100%;
  /* padding: 20px; */
  text-align: center;

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
  }

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;
