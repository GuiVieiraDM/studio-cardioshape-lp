// components/sections/SectionBenefitsPilates.tsx

import { Container, Carousel, CarouselImage, Content, Title, Text, InfoList, InfoItem, BulletIcon, Button, Subtitle, CarouselTrack } from "./styles";
import { useState, useRef, useEffect  } from "react";

const images = [
  "/src/assets/Pilates 01.jpeg",
  "/src/assets/Pilates 02.jpeg",
  "/src/assets/Pilates 03.jpeg",
];

export function Pilates() {
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
        <Title>Benefícios do Pilates</Title>
        <Subtitle>
          O Pilates é um método eficaz para melhorar a flexibilidade, a força e o equilíbrio do corpo. Ele traz benefícios incríveis para a saúde física e mental, como:
        </Subtitle>
        <InfoList>
          <InfoItem>
            <BulletIcon />
            <Text>Melhora da postura, ajudando a alinhar a coluna e prevenindo dores.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Aumento da flexibilidade, promovendo a mobilidade das articulações.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Fortalecimento do core, que é fundamental para o equilíbrio e a estabilidade do corpo.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Prevenção de lesões, ao melhorar o controle e a coordenação motora.</Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Redução do estresse, ajudando na concentração e no bem-estar mental.</Text>
          </InfoItem>
        </InfoList>
        <Button>
          Experimente o Pilates e transforme seu corpo e mente
          <img src="/src/assets/arrow-right.svg" alt="seta para seguir" />
        </Button>
      </Content>
    </Container>
  );
}
