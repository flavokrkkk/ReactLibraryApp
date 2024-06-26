import { FormLabel, FormStyleContainer } from "./styles";
import Input from "../Input/Input";
import Button from "../Button/Button";
import PropTypes from "prop-types";
import Title from "../Title/Title";

const Form = ({ isBorder, marginTop, data, label, labelNavigate, onClick }) => {
  return (
    <FormStyleContainer isBorder={isBorder} marginTop={marginTop}>
      <form>
        {data.map(({ title, subPlace, buttonText, id }) => (
          <div key={id}>
            <Title>{title}</Title>
            {subPlace &&
              subPlace.map((place) => (
                <Input
                  isFullWidth
                  key={place}
                  border={"b-purple-2"}
                  placeholder={place}
                />
              ))}
            {label && <FormLabel onClick={labelNavigate}>{label}</FormLabel>}
            <Button isFullWidth isBorderRadius onClick={onClick}>
              {buttonText}
            </Button>
          </div>
        ))}
      </form>
    </FormStyleContainer>
  );
};

export default Form;

Form.propTypes = {
  isBorder: PropTypes.bool,
  label: PropTypes.string,
  marginTop: PropTypes.oneOf(["m-100", "m-200"]),
  data: PropTypes.array.isRequired,
  onClick: PropTypes.func,
  labelNavigate: PropTypes.func,
};

Form.defaultProps = {
  isBorder: false,
  marginTop: "m-200",
  label: "",
  data: [],
  onClick: () => console.log("Function onClick not defined!"),
  labelNavigate: () => console.log("Function labelNavigate not defined!"),
};
