export interface Card {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  createdAt: string;
}

export interface MeResponse {
  id: string;
  name: string;
  email: string;
  cards: Card[];
}

export interface PaginatedCards {
  list: Card[];
  rpp: number;
  page: number;
  more: boolean;
}