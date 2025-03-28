// components/sections/SectionBenefitsMusculacao.tsx

import { Container, Carousel, CarouselImage, Content, Title, Text, InfoList, InfoItem, BulletIcon, Button, Subtitle, CarouselTrack } from "./styles";
import { useState, useRef, useEffect  } from "react";
import musculation1 from '../../assets/musculation1.jpeg';
import musculation2 from '../../assets/musculation2.jpeg';
import musculation3 from '../../assets/musculation3.jpeg';
import arrowRight from '../../assets/arrow-right.svg';

const images = [
  musculation1,
  musculation2,
  musculation3,
];

export function Musculation() {
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    if (!trackRef.current) return;
    
    if (isPaused) {
      trackRef.current.style.animationPlayState = "paused";
    } else {
      trackRef.current.style.animationPlayState = "running";
    }
  }, [isPaused]);

  return (
    <Container id="musculation-section">
      <Carousel 
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        <CarouselTrack ref={trackRef}>
          {[...images, ...images].map((src, index) => (
            <CarouselImage key={index} src={src} alt={`Imagem da Musculação ${index + 1}`} />
          ))}
        </CarouselTrack>
      </Carousel>
      <Content>
        <Title>Benefícios da Musculação</Title>
        <Subtitle>
          A musculação é uma das melhores formas de alcançar e manter uma saúde de ferro. Além de aumentar a massa muscular, ela traz inúmeros benefícios para o corpo e a mente, como:
        </Subtitle>
        <InfoList>
          <InfoItem>
            <BulletIcon />
            <Text>Aumento da força e resistência física, permitindo um melhor desempenho nas atividades diárias.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Melhora da postura, prevenindo dores musculares e articulares.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Auxílio na queima de gordura, com resultados visíveis na definição muscular e redução de peso.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Melhora do bem-estar mental, com a redução do estresse e da ansiedade.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Fortalecimento dos ossos, prevenindo doenças como a osteoporose.</Text>
          </InfoItem>
        </InfoList>
        <Button
          onClick={() => window.open("https://agendamento.nextfit.com.br/9181c853-af25-4bb4-8618-b31f91361a47", "_blank")}
        >
          Faça uma aula grátis e comece seu treino agora
          <img src={arrowRight} alt="seta para seguir" />
        </Button>
      </Content>
    </Container>
  );
}
