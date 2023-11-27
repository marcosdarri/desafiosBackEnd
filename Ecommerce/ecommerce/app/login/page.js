import Image from "next/image";
import styles from "./page.module.css";

export default function Login() {
  return (
    <article>
      <form action="/api/sessions/login" method="post">
        <header>
          <h1>Login</h1>
        </header>
        <input type="email" name="email" placeholder="Correo" required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <footer>
          <input type="submit" value="Enviar" />
        </footer>
      </form>
      <a href="/register" role="button" style="background-color:green;">
        Quiero registrarme
      </a>
      <a href="/api/sessions/github" role="button">
        Entrar con Github
      </a>
    </article>
  );
}
