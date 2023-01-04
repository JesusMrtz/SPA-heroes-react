import { useContext } from "react";
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../context";

export const LoginPages = () => {
  const navigate = useNavigate();
  /** Damos acceso al context */
  const { login } = useContext(AuthContext);

  function onLogin() {
    login( 'Jesus Martínez' );

    navigate('/', {
      replace: true
    });
  }

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <button className="btn btn-primary" onClick={ onLogin }>Login</button>
    </>
  )
}
