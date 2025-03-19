// components/sections/SectionBenefitsMusculacao.styles.ts

import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 10%;
  background: ${(props) => props.theme.COLORS.BACKGROUND_900};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 600px) {
    padding: 32px ;
  }
`;

export const Carousel = styled.div`
  width: 100%;
  max-width: calc(300px * 3); ;
  overflow: hidden;
  position: relative;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 0;
    width: 10%;
    height: 100%;
    z-index: 2;
  }
`;

export const CarouselTrack = styled.div`
  display: flex;
  align-items: center;
  width: calc(320px * 6); /* 6 imagens para continuidade */
  animation: scroll 15s linear infinite;
  margin-bottom: 40px;
  animation-play-state: running;
  
  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

export const CarouselImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  flex-shrink: 0; /* Mantém as imagens fixas */
  margin: 0 10px;
`;

export const Content = styled.div`
  max-width: 800px;
  color: ${(props) => props.theme.COLORS.WHITE};
  text-align: center;

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const Title = styled.h2`
  font-size: 2.4rem;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const BulletIcon = styled.div`
  min-width: 16px;
  min-height: 16px;
  background-color: ${(props) => props.theme.COLORS.ORANGE};
  border-radius: 50%;
  margin-right: 15px;
`;

export const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

export const InfoItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
  color: ${(props) => props.theme.COLORS.GRAY_100};
  font-size: 1.6rem;
  text-align: left;
  flex-wrap: nowrap;
  max-width: 700px;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: ${(props) => props.theme.COLORS.ORANGE};
  color: ${(props) => props.theme.COLORS.WHITE};
  font-size: 1.6rem;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 30px;
  transition: 0.3s ease-in-out;
  justify-self: center;

  &:hover {
    background: ${(props) => props.theme.COLORS.RED};
  }

  @media (max-width: 768px) {
    margin-top: 0;
    padding: 7.5px 15px;
  }
`;
