import styles from "./home.module.css";
import { Header } from "../../components/header";
import { Link } from "react-router-dom";
import { useAuth } from "../../providers/auth";

export function Home() {
  const { user, setUser } = useAuth()

  function handleDeleteAddress(index) {
    // alert("Endereço deletado com sucesso!");
    setUser((prevUser) => {
      const updatedAddresses = [...prevUser.addresses];
      updatedAddresses.splice(index, 1); 
      return {
        ...prevUser,
        addresses: updatedAddresses,
      };
    });
  }

  return (
    <>
      <Header />
      <div className={styles.container}>
        <nav className={styles.nav}>
          <Link to="/" className={styles.link}>
            Login
          </Link>
          <Link to="/painel" className={styles.link}>
            Painel
          </Link>
          <Link to="/address" className={styles.link}>
            Meus endereços
          </Link>
        </nav>

        <main className={styles.content}>
          <div className={styles.message}>
            <h1 className={styles.title}>Olá {user.name} bem vindo!</h1>
            <p>Aqui fica armazenado todos os seus dados</p>

            <span>Email: {user.email}</span>

            <strong className={styles.addressLabel}>Endereço atual:</strong>
            <br />
            {user.addresses.map((address, index) => (
              <div className={styles.address} key={index}>
                <span>Endereço: {address.address}</span>
                <span>Número: {address.num}</span>
                <button onClick={() => handleDeleteAddress(index)}>
                  Deletar endereço
                </button>
              </div>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}