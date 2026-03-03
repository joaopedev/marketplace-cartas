import { useLogin } from "../hooks/useLogin";
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
import Logo from "../assets/image.png";

export default function Login() {
  const { login, loading } = useLogin();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);

    login({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });
  }

  return (
    <Container>
      <LeftSide>
        <LogoWrapper>
          <img src={Logo} alt="Logo INMETA" />
        </LogoWrapper>
      </LeftSide>

      <RightSide>
        <FormWrapper>
          <Title>Login</Title>
          <Form onSubmit={handleSubmit}>
            <Input type="email" name="email" placeholder="Email" />
            <Input type="password" name="password" placeholder="Senha" />
            <Button type="submit" disabled={loading}>
              {loading ? "Entrando..." : "Entrar"}
            </Button>
          </Form>
          <RegisterText>
            Não possui conta?{" "}
            <StyledLink to="/register">Cadastre-se</StyledLink>
          </RegisterText>
        </FormWrapper>
      </RightSide>
    </Container>
  );
}
