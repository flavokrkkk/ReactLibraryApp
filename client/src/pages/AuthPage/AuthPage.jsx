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
        <div>
          <form>
            {isAuth == true ? (
              <h2 className="title">Login</h2>
            ) : (
              <h2 className="title">Registration</h2>
            )}
            <div>
              <Input
                border={"b-purple-2"}
                isOutline={true}
                type="email"
                isFullWidth={true}
                required
                placeholder="E-mail"
              />
            </div>
            <div>
              <Input
                border={"b-purple-2"}
                isOutline={true}
                type="password"
                isFullWidth={true}
                required
                placeholder="Password"
              />
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
              <Button
                isBorderRadius={true}
                variant={"light-purple"}
                isFullWidth={true}
                onClick={navigateTo}
              >
                Sign in
              </Button>
            ) : (
              <Button
                isBorderRadius={true}
                isFullWidth={true}
                variant="light-purple"
                onClick={navigateTo}
              >
                Sign up
              </Button>
            )}

            <Link to={CATALOG} className="auth_link">
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
