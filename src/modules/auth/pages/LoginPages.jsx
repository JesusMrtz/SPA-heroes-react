import { useNavigate } from "react-router-dom"


export const LoginPages = () => {
  const navigate = useNavigate();

  function onLogin() {
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
