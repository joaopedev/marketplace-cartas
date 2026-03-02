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
  RegisterText,
  StyledLink,
} from "./Login.styles";

export default function Login() {
  return (
    <Container>
      <LeftSide>
        <LogoWrapper>
          <h1>Marketplace</h1>
        </LogoWrapper>
      </LeftSide>

      <RightSide>
        <FormWrapper>
          <Title>Login</Title>

          <Form>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Senha" />
            <Button type="submit">Entrar</Button>
          </Form>

          <RegisterText>
            Não possui conta? <StyledLink to="/register">Cadastre-se</StyledLink>
          </RegisterText>
        </FormWrapper>
      </RightSide>
    </Container>
  );
}