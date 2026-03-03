import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../api/axios";

export function useTrades() {
  const [loading, setLoading] = useState(false);
  const [trades, setTrades] = useState<any[]>([]);

  async function fetchTrades(page = 1, rpp = 10) {
  try {
    setLoading(true);

    const { data } = await api.get("/trades", {
      params: { page, rpp },
    });

    setTrades(data.list);
  } catch {
    toast.error("Erro ao buscar trocas");
  } finally {
    setLoading(false);
  }
}

  async function createTrade(
    offeredCardIds: string[],
    wantedCardIds: string[],
  ) {
    try {
      const cards = [
        ...offeredCardIds.map((id) => ({
          cardId: id,
          type: "OFFERING",
        })),
        ...wantedCardIds.map((id) => ({
          cardId: id,
          type: "RECEIVING",
        })),
      ];

      await api.post("/trades", { cards });

      toast.success("Troca criada!");
      await fetchTrades();
    } catch {
      toast.error("Erro ao criar troca");
    }
  }

  async function deleteTrade(tradeId: string) {
    try {
      await api.delete(`/trades/${tradeId}`);
      toast.success("Troca removida");
      fetchTrades();
    } catch {
      toast.error("Erro ao deletar troca");
    }
  }

  return {
    trades,
    loading,
    fetchTrades,
    createTrade,
    deleteTrade,
  };
}
