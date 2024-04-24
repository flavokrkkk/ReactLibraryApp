import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../../utils/const";
import Form from "../../components/UI/Form/Form.jsx";
import * as C from "../../styles/components.js";

const AuthPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const navigateTo = () => {
    navigate(CATALOG);
  };

  const authRoute = () => {
    setIsAuth(!isAuth);
  };

  const registerData = [
    {
      id: 1,
      title: "Registration",
      subPlace: ["E-mail", "Password"],
      buttonText: "Sign In",
    },
  ];

  const authData = [
    {
      id: 2,
      title: "Authorization",
      subPlace: ["E-mail", "Password"],
      buttonText: "Sign Up",
    },
  ];

  return (
    <C.Wrapper>
      {isAuth ? (
        <Form
          isBorder={true}
          data={authData}
          onClick={navigateTo}
          label={`Нет аккаунта? Зарегистрируйтесь`}
          labelNavigate={authRoute}
          marginTop={"m-200"}
        />
      ) : (
        <Form
          isBorder={true}
          data={registerData}
          label={`Есть аккаунт? Войдите`}
          onClick={navigateTo}
          labelNavigate={authRoute}
        />
      )}
    </C.Wrapper>
  );
};

export default AuthPage;
