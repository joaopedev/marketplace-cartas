import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LeftSide = styled.div`
  width: 70%;
  background: linear-gradient(135deg, #0f172a, #1e293b);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const LogoWrapper = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
`;

export const RightSide = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f8fafc;
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
  border: 1px solid #cbd5e1;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #0f172a;
  }
`;

export const Button = styled.button`
  padding: 0.8rem;
  border-radius: 6px;
  border: none;
  background-color: #0f172a;
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export const LoginText = styled.p`
  margin-top: 1.5rem;
  text-align: center;
  font-size: 0.9rem;
`;

export const StyledLink = styled(Link)`
  color: #0f172a;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;