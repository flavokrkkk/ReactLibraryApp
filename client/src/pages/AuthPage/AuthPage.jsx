import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CATALOG } from "../../utils/const";
import Form from "../../components/UI/Form/Form.jsx";
import Wrapper from "../../components/UI/Wrapper/Wrapper.jsx";
import { authData, registerData } from "../../utils/mockData.js";

const AuthPage = () => {
  const [isAuth, setIsAuth] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(CATALOG);
  };

  const handleAuthRoute = () => {
    setIsAuth(!isAuth);
  };

  return (
    <Wrapper>
      {isAuth ? (
        <Form
          isBorder
          data={authData}
          label={`Don't have an account? Register`}
          marginTop={"m-200"}
          labelNavigate={handleAuthRoute}
          onClick={handleNavigation}
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
