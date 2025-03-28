import styled from "styled-components";

export const Container = styled.section`
  position: relative;
  width: 100%;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: ${(props) => props.theme.COLORS.BACKGROUND_900};
  overflow: hidden;

  @media (max-width: 600px) {
    align-items: center;
  }

`;

export const Content = styled.div`
  z-index: 2;
  padding: 32px;
  text-align: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 600px;
  background-color: ${(props) => props.theme.COLORS.BACKGROUND_800};
  color: ${(props) => props.theme.COLORS.WHITE};
  border-radius: 0 16px 16px 0;

  @media (max-width: 600px) {
    margin-top: 20px;
    align-items: center;
    border-radius: 0;
    gap: 20px;
    padding: 16px;
    background: transparent;
    color: ${(props) => props.theme.COLORS.WHITE};
  }
`;

export const Logo = styled.img`
  max-width: 500px;
  margin-bottom: 20px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 250px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.COLORS.ORANGE};
  color: ${(props) => props.theme.COLORS.WHITE};
  font-size: 1.2rem;
  padding: 15px 30px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
  max-width: fit-content;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${(props) => props.theme.COLORS.RED};
  }


  @media (max-width: 600px) {
    margin-top: 0;
  }
`;

export const HeroImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const HeroImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 1.5s ease-in-out;

  &.active {
    opacity: 1;
  }
`;

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* Máscara branca suave */

  @media (max-width: 600px) {
    background: rgba(0, 0, 0, 0.4);
  }
`;
