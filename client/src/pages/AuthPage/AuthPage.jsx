import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../../utils/const";
import Form from "../../components/UI/Form/Form.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";

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
    <Wrapper>
      {isAuth ? (
        <Form
          isBorder
          data={authData}
          onClick={navigateTo}
          label={`Нет аккаунта? Зарегистрируйтесь`}
          labelNavigate={authRoute}
          marginTop={"m-200"}
        />
      ) : (
        <Form
          isBorder
          data={registerData}
          label={`Есть аккаунт? Войдите`}
          onClick={navigateTo}
          labelNavigate={authRoute}
        />
      )}
    </Wrapper>
  );
};

export default AuthPage;
