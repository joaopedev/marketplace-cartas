import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCards } from "../hooks/useCard";
import { useCardsStore } from "../store/cards.store";
import {
  Container,
  Header,
  Title,
  Content,
  CardGrid,
  CardItem,
  Button,
  HeaderActions,
  SectionTitle,
} from "./Marketplace.styles";

export default function Marketplace() {
  const { fetchCards, fetchMyCards, addCards, loading } = useCards();
  const { cards, myCards } = useCardsStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchCards();
    fetchMyCards();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };

  return (
    <Container>
      <Header>
        <Title>Marketplace de Trocas</Title>

        <HeaderActions>
          <Button onClick={() => navigate("/trades")}>
            Ir para Trocas
          </Button>

          <Button variant="danger" onClick={handleLogout}>
            Sair
          </Button>
        </HeaderActions>
      </Header>

      <Content>
        <SectionTitle>Todas as Cartas</SectionTitle>

        {loading ? (
          <p>Carregando...</p>
        ) : (
          <CardGrid>
            {cards.map((card) => (
              <CardItem key={card.id}>
                <img src={card.imageUrl} alt={card.name} />
                <h3>{card.name}</h3>
                <p>{card.description}</p>

                <Button onClick={() => addCards([card.id])}>
                  Adicionar à minha conta
                </Button>
              </CardItem>
            ))}
          </CardGrid>
        )}

        <SectionTitle>Minhas Cartas</SectionTitle>

        <CardGrid>
          {myCards.length === 0 ? (
            <p>Você ainda não possui cartas.</p>
          ) : (
            myCards.map((card) => (
              <CardItem key={card.id}>
                <img src={card.imageUrl} alt={card.name} />
                <h3>{card.name}</h3>
                <p>{card.description}</p>
              </CardItem>
            ))
          )}
        </CardGrid>
      </Content>
    </Container>
  );
}