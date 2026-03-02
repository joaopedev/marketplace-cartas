import { LeftSide, Button } from "./Login.styles";
import {
  Container,
  LogoWrapper,
  RightSide,
  FormWrapper,
  Title,
  Form,
  Input,
  LoginText,
  StyledLink,
} from "./Register.styles";
import Logo from "../assets/image.png";

export default function Register() {
  return (
    <Container>
      <LeftSide>
        <LogoWrapper>
          <img src={Logo} alt="Logo INMETA" />
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