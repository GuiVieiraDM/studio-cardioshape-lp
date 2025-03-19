import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 10%;
  background: ${(props) => props.theme.COLORS.BACKGROUND_900};
  text-align: center;
  justify-content: center;
  margin: 0 auto;

  @media (max-width: 600px) {
    padding: 32px;
  }
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: ${(props) => props.theme.COLORS.WHITE};
`;

export const CardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Card = styled.button`
  background: ${(props) => props.theme.COLORS.BACKGROUND_800};
  border: none;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 370px;

  text-align: left;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
  }

  h3, p {
    position: relative;
    z-index: 2; /* Garante que o texto fique acima da imagem de fundo */
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: ${(props) => props.theme.COLORS.ORANGE};
    transition: color 0.3s ease-in-out;
  }

  &:hover h3 {
    color: ${(props) => props.theme.COLORS.WHITE}; 
  }


  p {
    font-size: 1rem;
    margin-bottom: 8px;
    color: ${(props) => props.theme.COLORS.GRAY_100};
    transition: color 0.3s ease-in-out;
  }

  .cta {
    color: ${(props) => props.theme.COLORS.ORANGE};
    display: flex;
    align-items: center;
    gap: 5px;

    img {
      width: 15px;
      height: 15px;
    }
  }

  &:hover .text {
    color: ${(props) => props.theme.COLORS.WHITE}; 
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    z-index: 1; /* Garante que o efeito fique atrás do texto */
  }

  &.pilates:hover::after {
    background-image: url("../src/assets/pilates2.jpeg");
    opacity: 0.4;
  }

  &.musculacao:hover::after {
    background-image: url("../src/assets/musculation2.jpeg");
    opacity: 0.4;
  }

  @media (max-width: 600px) {
    width: auto;
  }
`;