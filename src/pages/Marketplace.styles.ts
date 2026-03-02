import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  background-color: #f1f5f9;
`;

export const Header = styled.header`
  height: 70px;
  background-color: #0f172a;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Title = styled.h1`
  font-size: 1.2rem;
`;

export const Content = styled.main`
  padding: 2rem;
`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
`;

export const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`;