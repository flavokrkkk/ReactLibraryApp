import React from "react";
import * as S from "./styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Title from "../../Title/Title";

const Form = ({ data, onClick, label, labelNavigate, isBorder, marginTop }) => {
  return (
    <S.FormStyleContainer isBorder={isBorder} marginTop={marginTop}>
      <form>
        {data.map(({ title, subPlace, buttonText, id }) => (
          <div key={id}>
            <Title>{title}</Title>
            {subPlace &&
              subPlace.map((place) => (
                <Input
                  isFullWidth={true}
                  border={"b-purple-2"}
                  placeholder={place}
                />
              ))}
            {label && (
              <S.FormLabel onClick={labelNavigate}>{label}</S.FormLabel>
            )}
            <Button onClick={onClick} isFullWidth={true} isBorderRadius={true}>
              {buttonText}
            </Button>
          </div>
        ))}
      </form>
    </S.FormStyleContainer>
  );
};

export default Form;

Form.propTypes = {
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  label: PropTypes.string,
  labelNavigate: PropTypes.func,
  isBorder: PropTypes.bool,
  marginTop: PropTypes.oneOf(["m-100", "m-200"]),
};

Form.defaultProps = {
  data: [],
  isBorder: false,
  marginTop: "m-200",
};
