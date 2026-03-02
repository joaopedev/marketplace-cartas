import {
  Container,
  LeftSide,
  LogoWrapper,
  RightSide,
  FormWrapper,
  Title,
  Form,
  Input,
  Button,
  LoginText,
  StyledLink,
} from "./Register.styles";

export default function Register() {
  return (
    <Container>
      <LeftSide>
        <LogoWrapper>
          <h1>Marketplace</h1>
        </LogoWrapper>
      </LeftSide>

      <RightSide>
        <FormWrapper>
          <Title>Cadastro</Title>

          <Form>
            <Input type="text" placeholder="Nome" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button type="submit">Criar Conta</Button>
          </Form>

          <LoginText>
            Já possui conta? <StyledLink to="/login">Entrar</StyledLink>
          </LoginText>
        </FormWrapper>
      </RightSide>
    </Container>
  );
}