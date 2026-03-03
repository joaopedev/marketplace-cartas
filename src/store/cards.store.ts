import { create } from "zustand";
import type { Card } from "../types/card.types";

interface CardsStore {
  cards: Card[];
  myCards: Card[];
  setCards: (cards: Card[]) => void;
  setMyCards: (cards: Card[]) => void;
}

export const useCardsStore = create<CardsStore>((set) => ({
  cards: [],
  myCards: [],
  setCards: (cards) => set({ cards }),
  setMyCards: (myCards) => set({ myCards }),
}));