import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  margin-bottom: 100px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

export const Section = styled.div`
  flex: 1;
  position: relative;
  background: ${(props) => `url(${props.backgroundImage})`} no-repeat center;
  background-size: cover;
  padding: 40px;
  color: ${(props) => props.theme.COLORS.WHITE};
  text-align: center;
  min-height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* Máscara escura para melhorar contraste do texto */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5); /* Transparência ajustada */
    z-index: 0;
  }

  * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
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


export const SectionTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 10px;
`;

export const OrangeLine = styled.div`
  width: 5px;
  background-color: ${(props) => props.theme.COLORS.ORANGE};
  transform: skewY(-20deg); /* Inclinação da linha */
  flex-shrink: 0; /* Evita que a linha seja redimensionada */
  height: 100%; /* Mantém o tamanho igual ao das seções */

  @media (max-width: 768px) {
    width: 100%;
    height: 5px;
    transform: skewX(-20deg); /* Inclinação horizontal no mobile */
  }
`;
