import { useState, useEffect } from "react";
import { Container, Content, Logo, Title, Subtitle, Button, HeroImageWrapper, HeroImage, ImageOverlay } from "./styles";
import musculation1 from '../../assets/musculation1.jpeg';
import musculation2 from '../../assets/musculation2.jpeg';
import musculation3 from '../../assets/musculation3.jpeg';
import pilates1 from '../../assets/pilates1.jpeg';
import pilates2 from '../../assets/pilates2.jpeg';
import pilates3 from '../../assets/pilates3.jpeg';
import arrowRight from '../../assets/arrow-right.svg';

const images = [
  musculation1,
  musculation2,
  musculation3,
  pilates1,
  pilates2,
  pilates3,
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
        <Logo src="/logo.svg" alt="Logo da academia" />
        <Title>Mais que uma academia, um espaço para cuidar da sua saúde!</Title>
        <Subtitle>
          Treinamento personalizado com acompanhamento profissional e sem risco de lesões. Venha conhecer!
        </Subtitle>
        <Button
          onClick={() => window.open("https://venda.nextfit.com.br/57925c69-c7d1-4a81-bb92-5465d612f244/contratos", "_blank")}
        >
          Escolha seu plano e comece hoje mesmo
          <img src={arrowRight} alt="seta para seguir" />
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
