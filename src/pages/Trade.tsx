import { useEffect, useState } from "react";
import { useCards } from "../hooks/useCard";
import { useCardsStore } from "../store/cards.store";
import { useTrades } from "../hooks/useTrades";
import type { TradeCard } from "../types/trade.types";
import {
  Container,
  Header,
  Title,
  Content,
  CardGrid,
  CardItem,
  Button,
  SectionTitle,
  TradeBox,
  TradeSection,
} from "./Marketplace.styles";
import { useNavigate } from "react-router-dom";

export default function Trades() {
  const { fetchCards, fetchMyCards } = useCards();
  const { cards, myCards } = useCardsStore();
  const { trades, fetchTrades, createTrade, deleteTrade, loading } =
    useTrades();
  const navigate = useNavigate();  
  const [offered, setOffered] = useState<string[]>([]);
  const [wanted, setWanted] = useState<string[]>([]);

  useEffect(() => {
    fetchCards();
    fetchMyCards();
    fetchTrades();
  }, []);

  function getCardsByType(
    tradeCards: TradeCard[],
    type: "OFFERING" | "RECEIVING",
  ) {
    return tradeCards.filter((tc) => tc.type === type);
  }

  return (
    <Container>
      <Header>
        <Title>Área de Trocas</Title>
         <Button onClick={() => navigate("/marketplace")}>
            Voltar ao Marketplace
          </Button>
      </Header>

      <Content>
        <SectionTitle>Escolha cartas para oferecer</SectionTitle>

        <CardGrid>
          {myCards.map((card) => (
            <CardItem key={card.id}>
              <input
                type="checkbox"
                checked={offered.includes(card.id)}
                onChange={() =>
                  setOffered((prev) =>
                    prev.includes(card.id)
                      ? prev.filter((id) => id !== card.id)
                      : [...prev, card.id],
                  )
                }
              />
              <img src={card.imageUrl} />
              <p>{card.name}</p>
            </CardItem>
          ))}
        </CardGrid>

        <SectionTitle>Escolha cartas que deseja receber</SectionTitle>

        <CardGrid>
          {cards.map((card) => (
            <CardItem key={card.id}>
              <input
                type="checkbox"
                checked={wanted.includes(card.id)}
                onChange={() =>
                  setWanted((prev) =>
                    prev.includes(card.id)
                      ? prev.filter((id) => id !== card.id)
                      : [...prev, card.id],
                  )
                }
              />
              <img src={card.imageUrl} />
              <p>{card.name}</p>
            </CardItem>
          ))}
        </CardGrid>

        <Button
          onClick={() => createTrade(offered, wanted)}
          disabled={!offered.length || !wanted.length}
        >
          Criar troca
        </Button>

        <SectionTitle>Trocas abertas</SectionTitle>

        {loading && <p>Carregando...</p>}

        {trades.map((trade) => {
          const offering = getCardsByType(trade.tradeCards, "OFFERING");
          const receiving = getCardsByType(trade.tradeCards, "RECEIVING");

          return (
            <TradeBox key={trade.id}>
              <strong>{trade.user.name}</strong>

              <TradeSection>
                <p>Oferecendo:</p>
                {offering.map((tc) => (
                  <span key={tc.id}>{tc.card.name}</span>
                ))}
              </TradeSection>

              <TradeSection>
                <p>Quer receber:</p>
                {receiving.map((tc) => (
                  <span key={tc.id}>{tc.card.name}</span>
                ))}
              </TradeSection>

              <Button variant="danger" onClick={() => deleteTrade(trade.id)}>
                Deletar
              </Button>
            </TradeBox>
          );
        })}
      </Content>
    </Container>
  );
}
