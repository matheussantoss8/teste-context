import styles from "./header.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";

export function Header() {
  const navigate = useNavigate();
  const { user } = useAuth()

  function handleLogout() {
    navigate("/");
  }

  return (
    <header>
      <div className={styles.content}>
        <Link to="/painel">
          <h1>
            Context<span>Api</span>
          </h1>
        </Link>

        {user.name ? ( 
          <button onClick={handleLogout} className={styles.login}>
            Sair
          </button>
        ) : (
          <Link to="/" className={styles.login}> 
            Fazer login
          </Link>
        )}
      </div>
    </header>
  );
}
