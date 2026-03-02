import {
  Container,
  Header,
  Title,
  Content,
  CardGrid,
  Card,
} from "./Marketplace.styles";

export default function Marketplace() {

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  }
  return (
    <Container>
      <Header>
        <Title>Marketplace de Trocas</Title>
        <button onClick={handleLogout}>Sair</button>
      </Header>

      <Content>
        <CardGrid>
          <Card>
            <h3>Troca #1</h3>
            <p>Oferece: Carta A</p>
            <p>Quer: Carta B</p>
          </Card>

          <Card>
            <h3>Troca #2</h3>
            <p>Oferece: Carta X</p>
            <p>Quer: Carta Y</p>
          </Card>
        </CardGrid>
      </Content>
    </Container>
  );
}