import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f5f9;
`;

export const Header = styled.header`
  height: 70px;
  background-color: #191919;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const HeaderActions = styled.div`
  display: flex;
  gap: 0.8rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
`;

export const Content = styled.main`
  padding: 2rem;
`;

export const SectionTitle = styled.h2`
  margin-bottom: 1.5rem;
  color: #0f172a;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

export const CardItem = styled.div`
  background: #191919;
  color: white;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    border-radius: 8px;
    margin-bottom: 0.5rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.85rem;
    color: #9ca3af;
    margin-bottom: 1rem;
  }
`;

interface ButtonProps {
  variant?: "primary" | "danger";
}

export const Button = styled.button<ButtonProps>`
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s ease;

  background: ${({ variant }) =>
    variant === "danger" ? "#dc2626" : "#1e3a8a"};

  color: white;

  &:hover {
    background: ${({ variant }) =>
      variant === "danger" ? "#b91c1c" : "#2563eb"};
  }
`;

export const TradeBox = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  strong {
    display: block;
    margin-bottom: 1rem;
    color: #0f172a;
  }
`;

export const TradeSection = styled.div`
  margin-bottom: 1rem;

  p {
    font-weight: 600;
    color: #0f172a;
    margin-bottom: 0.5rem;
  }

  span {
    display: inline-block;
    background: #e2e8f0;
    color: #0f172a;
    padding: 0.3rem 0.6rem;
    border-radius: 6px;
    margin-right: 0.5rem;
    font-size: 0.85rem;
  }
`;