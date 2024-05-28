import { useState } from "react";
import styles from "./address.module.css";
import { Header } from "../../components/header";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../providers/auth";

export function Address() {
  const { user, setUser } = useAuth();
  const [address, setAdress] = useState('');
  const [num, setNum] = useState('');
  const navigate = useNavigate()

  function handleEndereco(e) {
    e.preventDefault();

    setUser((prevUser) => ({
      ...prevUser,
      addresses: [
        ...prevUser.addresses,
        {address: address, num: num},
      ],
    }))
    setAdress('')
    setNum('')

    navigate("/painel");
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main className={styles.content}>
          <div>
            <Link to="/painel">Voltar para o painel</Link>
          </div>

          <section className={styles.address}>
            <h2>Meu endereço:</h2>

            <input
              type="text"
              className={styles.input}
              placeholder="Ex: Rua centro"
              value={address}
              onChange={(e) => setAdress(e.target.value)}
            />
            <input
              type="text"
              className={styles.input}
              placeholder="Numero"
              value={num}
              onChange={(e) => setNum(e.target.value)}
            />

            <button className={styles.button} onClick={handleEndereco}>
              Salvar Alteração
            </button>
          </section>
        </main>
      </div>
    </>
  );
}
