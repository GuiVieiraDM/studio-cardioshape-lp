import { useState, useEffect } from "react";
import { Container, Content, Logo, Title, Subtitle, Button, HeroImageWrapper, HeroImage, ImageOverlay } from "./styles";

const images = [
  "/src/assets/Musculação 01.jpeg",
  "/src/assets/Musculação 02.jpeg",
  "/src/assets/Musculação 03.jpeg",
  "/src/assets/Pilates 01.jpeg",
  "/src/assets/Pilates 02.jpeg",
  "/src/assets/Pilates 03.jpeg",
];

export function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Troca a cada 5 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Content>
        <Logo src="/public/logo.svg" alt="Logo da academia" />
        <Title>Mais que uma academia, um espaço para cuidar da sua saúde!</Title>
        <Subtitle>
          Treinamento personalizado com acompanhamento profissional e sem risco de lesões. Venha conhecer!
        </Subtitle>
        <Button
          onClick={() => window.open("https://venda.nextfit.com.br/57925c69-c7d1-4a81-bb92-5465d612f244/contratos", "_blank")}
        >
          Escolha seu plano e comece hoje mesmo
          <img src="/src/assets/arrow-right.svg" alt="seta para seguir" />
        </Button>
      </Content>

      <HeroImageWrapper>
        {images.map((image, index) => (
          <HeroImage
            key={index}
            src={image}
            alt="Ambiente da academia"
            className={index === currentImage ? "active" : ""}
          />
        ))}
        <ImageOverlay />
      </HeroImageWrapper>
    </Container>
  );
}
