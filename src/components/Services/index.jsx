import { Container, Title, CardsWrapper, Card } from "./styles";

export function Services() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Container>
      <Title>Conheça seus benefícios</Title>
      <CardsWrapper>
        <Card className="musculacao" onClick={() => scrollToSection("musculation-section")}>
          <h3>Musculação inteligente e personalizada!</h3>
          <p className="text">Sempre acompanhado por um personal trainer compartilhado</p>
          <p className="text">Treinos sem planilha, adaptados para cada aluno</p>
          <p className="cta">Saiba mais</p> 
        </Card>

        <Card className="pilates" onClick={() => scrollToSection("pilates-section")}>
          <h3>Pilates para força, flexibilidade e reabilitação!</h3>
          <p className="text"><strong>Tipos:</strong> Aparelho, Solo, Funcional</p>
          <p className="text"><strong>Benefícios:</strong> Melhora da postura, fortalecimento muscular e bem-estar</p>
          <p className="cta">Saiba mais</p>
        </Card>
      </CardsWrapper>
    </Container>
  );
}
