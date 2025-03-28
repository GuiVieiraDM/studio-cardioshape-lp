import { Container, Section, SectionTitle, Button, OrangeLine } from "./styles";
import cta1 from '../../assets/cta1.jpg';
import cta2 from '../../assets/cta2.jpg';
import cta3 from '../../assets/cta3.webp';
import arrowRight from '../../assets/arrow-right.svg';
import whats from '../../assets/whats.png';
import insta from '../../assets/insta.png';

export function CTASection() {
  return (
    <Container>
      <Section backgroundImage={cta1}>
        <SectionTitle>Encontre o plano ideal para você</SectionTitle>
        <Button
          onClick={() => window.open("https://venda.nextfit.com.br/57925c69-c7d1-4a81-bb92-5465d612f244/contratos", "_blank")}
        >
          Conheça nossos planos
          <img src={arrowRight} alt="seta para seguir" />
        </Button>
      </Section>

      <OrangeLine />

      <Section backgroundImage={cta2}>
        <SectionTitle>Fale conosco no WhatsApp</SectionTitle>
        <Button
          onClick={() => window.open("https://wa.me/5522992328338", "_blank")}
        >
          Atendimento personalizado
          <img src={whats} width={16} height={16} alt="seta para seguir" />
        </Button>
      </Section>

      <OrangeLine />

      <Section backgroundImage={cta3}>
        <SectionTitle>Visite nosso Instagram</SectionTitle>
        <Button
          onClick={() => window.open("https://www.instagram.com/studiocardioshape?igsh=MWUxdTA4NDk4MzVyMg==", "_blank")}
        >
          @studiocardioshape
          <img src={insta} width={16} height={16} alt="seta para seguir" />
        </Button>
      </Section>
    </Container>
  );
}
