// components/sections/SectionBenefitsMusculacao.styles.ts

import styled from "styled-components";

export const Container = styled.section`
  padding: 80px 10%;
  background: ${(props) => props.theme.COLORS.BACKGROUND_800};
  display: flex;
  align-items: center;
  justify-content: center;
  
  .mobileLocalizationCTA {
    display: none;
  }
  
  @media (max-width: 1350px) {
    flex-direction: column;
    padding: 32px ;

    .mobileLocalizationCTA {
      display: flex;
    }

    .webLocalizationCTA {
      display: none;
    }
  }
`;

export const Content = styled.div`
  max-width: 800px;
  color: ${(props) => props.theme.COLORS.WHITE};
  text-align: left;
  
  
  @media (max-width: 1350px) {
    text-align: center;
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

  @media (max-width: 1350px) {
    margin-top: 0;
    padding: 7.5px 15px;
    justify-self: center;
  }
`;


export const MapContainer = styled.div`
  flex: 1;
  margin: 40px 0;
  border-radius: 10px;
  max-width: 800px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 350px;
    border: 0;
  }

  @media (max-width: 1350px) {
    margin: 20px 0;
    width: 100%;
  }
`;
