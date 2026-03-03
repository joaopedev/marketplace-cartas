import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../api/axios";
import { useCardsStore } from "../store/cards.store";
import type { MeResponse, PaginatedCards } from "../types/card.types";

export function useCards() {
  const [loading, setLoading] = useState(false);
  const { setCards, setMyCards } = useCardsStore();

  async function fetchCards(page = 1) {
    try {
      setLoading(true);

      const { data } = await api.get<PaginatedCards>("/cards", {
        params: { rpp: 10, page },
      });

      setCards(data.list);
    } catch {
      toast.error("Erro ao buscar cartas");
    } finally {
      setLoading(false);
    }
  }

  async function fetchMyCards() {
  try {
    setLoading(true);

    const { data } = await api.get<MeResponse>("/me");

    setMyCards(data.cards); 

  } catch {
    toast.error("Erro ao buscar suas cartas");
  } finally {
    setLoading(false);
  }
}

  async function addCards(cardIds: string[]) {
    try {
      await api.post("/me/cards", { cardIds });
      toast.success("Cartas adicionadas!");
      fetchMyCards();
    } catch {
      toast.error("Erro ao adicionar cartas");
    }
  }

  return {
    fetchCards,
    fetchMyCards,
    addCards,
    loading,
  };
}