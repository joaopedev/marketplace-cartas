import { create } from "zustand";
import type { Trade } from "../types/trade.types";

interface TradesState {
  trades: Trade[];
  setTrades: (trades: Trade[]) => void;
  addTrade: (trade: Trade) => void;
  removeTrade: (id: string) => void;
}

export const useTradesStore = create<TradesState>((set) => ({
  trades: [],
  setTrades: (trades) => set({ trades }),
  addTrade: (trade) =>
    set((state) => ({ trades: [trade, ...state.trades] })),
  removeTrade: (id) =>
    set((state) => ({
      trades: state.trades.filter((t) => t.id !== id),
    })),
}));