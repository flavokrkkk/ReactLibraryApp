import "./AuthPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CATALOG } from "../../utils/const";
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

const AuthPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(CATALOG);
  };

  const noAuthRoute = () => {
    setIsAuth(false);
  };

  const checkAuthRoute = () => {
    setIsAuth(true);
  };

  return (
    <section className="main-block">
      <div className="form-box">
        <div className="form-value">
          <form action="">
            {isAuth == true ? (
              <h2 className="title">Login</h2>
            ) : (
              <h2 className="title">Registration</h2>
            )}
            <div className="inputbox">
              <Input type="email" required placeholder="E-mail" />
            </div>
            <div className="inputbox">
              <Input type="password" required placeholder="Password" />
            </div>
            <div className="forget">
              {isAuth == true ? (
                <label>
                  Нет аккаунта ?
                  <a href="#" onClick={noAuthRoute}>
                    Зарегестрируйтесь!
                  </a>
                </label>
              ) : (
                <label>
                  Есть аккаунт ?
                  <a className="label__href" href="#" onClick={checkAuthRoute}>
                    Войдите!
                  </a>
                </label>
              )}
            </div>
            {isAuth == true ? (
              <Button className="btn-log" onClick={navigateTo}>
                Sign in
              </Button>
            ) : (
              <Button className="btn-log" onClick={navigateTo}>
                Sign up
              </Button>
            )}

            <Link to={CATALOG} style={{ textDecoration: "none" }}>
              <div className="register">
                <p>
                  <a href="#">Sbook</a>
                </p>
              </div>
            </Link>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AuthPage;
