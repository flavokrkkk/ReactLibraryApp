import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../../utils/const";
import Form from "../../components/UI/Form/Form.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";

const AuthPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(CATALOG);
  };
  0;
  const handleAuthRoute = () => {
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
          onClick={handleNavigation}
          label={`Don't have an account? Register`}
          labelNavigate={handleAuthRoute}
          marginTop={"m-200"}
        />
      ) : (
        <Form
          isBorder
          data={registerData}
          label={`Do you have an account? Sign in`}
          onClick={handleNavigation}
          labelNavigate={handleAuthRoute}
        />
      )}
    </Wrapper>
  );
};

export default AuthPage;
