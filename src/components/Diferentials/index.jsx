// components/sections/SectionThree.tsx

import { Container, Content, Title, List, ListItem, BulletIcon, Text, ImageContainer } from "./styles";
import musculation3 from '../../assets/musculation3.jpeg';

export function Diferentials() {
  return (
    <Container>
      <ImageContainer>
        <img src={musculation3} alt="Imagem do estúdio" />
      </ImageContainer>
      <Content>
        <Title>Por que escolher o nosso estúdio?</Title>
        <List>
          <ListItem>
            <BulletIcon />
            <Text>Treinamento Personalizado: Cada treino é adaptado para as suas necessidades.</Text>
          </ListItem>
          <ListItem>
            <BulletIcon />
            <Text>Pilates + Musculação no mesmo plano: Flexibilidade de escolha, sem custos adicionais.</Text>
          </ListItem>
          <ListItem>
            <BulletIcon />
            <Text>Atendimento Exclusivo: Apenas 3 alunos por personal, com foco individualizado.</Text>
          </ListItem>
          <ListItem>
            <BulletIcon />
            <Text>Ambiente Climatizado e Aconchegante.</Text>
          </ListItem>
          <ListItem>
            <BulletIcon />
            <Text>Treinos Agendados: Sem superlotação, sem espera.</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}
