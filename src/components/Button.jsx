import PropTypes from "prop-types";

const Button = ({ icon, text, onClick, disabled }) => {
  return (
    <button className="ctrl-btn" onClick={onClick} disabled={disabled}>
      {icon} {text}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.any,
  text: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.any,
};

export default Button;
