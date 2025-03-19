// components/sections/SectionFour.tsx

import { Container, Content, Title, Text, InfoList, InfoItem, BulletIcon, Button, MapContainer, Subtitle } from "./styles";

export function StructureLocation() {
  return (
    <Container>
      <Content>
        <Title>Estrutura & Localização</Title>
        <Subtitle>
          Treine com conforto no Centro Comercial Gold Center, em Unamar, Cabo Frio
        </Subtitle>
        <InfoList>
          <InfoItem>
            <BulletIcon />
            <Text>Endereço completo: <strong>Av. Sideral, s/n. Centro Comercial Gold Center, Verão Vermelho, em Unamar, Cabo Frio-RJ.</strong></Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Ponto de referência: <strong>Centro Comercial Gold Center.</strong></Text>
          </InfoItem>
          <InfoItem>
            <BulletIcon />
            <Text>Estacionamento: <strong>Sim, estacionamento disponível.</strong></Text>
          </InfoItem>
        </InfoList>
        <Button 
          onClick={() => window.open("https://venda.nextfit.com.br/57925c69-c7d1-4a81-bb92-5465d612f244/contratos", "_blank")}
          className="webLocalizationCTA"
        >
          Venha nos visitar! Agende sua aula agora
          <img src="/src/assets/arrow-right.svg" alt="seta para seguir" />
        </Button>
      </Content>

      <MapContainer>
        <iframe
          title="Mapa - Centro Comercial Gold Center"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.1688188991556!2d-42.0048585!3d-22.6612601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x97a953e8829d25:0x8dcb6ad822fa5eb8!2sGold+Center!5e0!3m2!1spt-BR!2sbr!4v1675034134856!5m2!1spt-BR!2sbr"
          width="100%"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </MapContainer>

      <Button 
        onClick={() => window.open("https://venda.nextfit.com.br/57925c69-c7d1-4a81-bb92-5465d612f244/contratos", "_blank")}
        className="mobileLocalizationCTA"
      >
        Venha nos visitar! Agende sua aula agora
        <img src="../src/assets/arrow-right.svg" alt="seta para seguir" />
      </Button>
    </Container>
  );
}
