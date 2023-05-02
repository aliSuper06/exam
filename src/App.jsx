import { useEffect, useState } from "react";
import { Login } from "./components/login/Login";
import { Header } from "./components/header/Header";
import { ExpenseForm } from "./components/expenseForm/ExpenseForm";

function App() {
  const [login, setLogin] = useState(false);

  useEffect(() => {
    const loginLocalStorage = localStorage.getItem("Auth");
    setLogin(loginLocalStorage);
  }, [login]);

  const loginHandler = () => {
    setLogin(true);
    localStorage.setItem("Auth", !login);
  };

  const logOutHandler = () => {
    setLogin(false);
    localStorage.removeItem("Auth");
  };

  return (
    <>
      <Header login={login} logOutHandler={logOutHandler} />

      {login ? (
        <>
          <ExpenseForm />
        </>
      ) : (
        <>
          <Login loginHandler={loginHandler} />
        </>
      )}
    </>
  );
}

export default App;
