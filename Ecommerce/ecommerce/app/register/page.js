import Image from "next/image";
import styles from "./page.module.css";

export default function Register() {
  return (
    <article>
      <form action="/api/sessions/register" method="post">
        <header>
          <h1>Registro</h1>
        </header>
        <input type="text" name="first_name" placeholder="Nombre" required />
        <input type="text" name="last_name" placeholder="Apellido" required />
        <input type="email" name="email" placeholder="Correo" required />
        <input type="number" name="age" placeholder="Edad" required />
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
      <a href="/login" role="button" style="width:50%;background-color:green;">
        Ya estoy registrado
      </a>
    </article>
  );
}
