import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 70%;
  background-color: #191919;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 70%;
    height: auto;
  }
`;

export const RightSide = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f9fafb;
`;

export const FormWrapper = styled.div`
  width: 80%;
  max-width: 350px;
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Input = styled.input`
  padding: 0.8rem;
  border-radius: 6px;
  border: 1px solid #d1d5db;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #3b82f6;
  }
`;

export const Button = styled.button`
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
  background-color: #191919;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: grey;
  }
`;

export const RegisterText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

export const StyledLink = styled(Link)`
  color: #191919;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: grey;
  }
`;