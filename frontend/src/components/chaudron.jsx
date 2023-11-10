import PropTypes from "prop-types";

function Chaudron({ bg }) {
  return <div id={bg} />;
}
Chaudron.propTypes = {
  bg: PropTypes.string.isRequired,
};
export default Chaudron;
