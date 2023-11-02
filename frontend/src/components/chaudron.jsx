import PropTypes from "prop-types";

function Chaudron({ bg }) {
  return <div id={bg}>rien</div>;
}
Chaudron.propTypes = {
  bg: PropTypes.string.isRequired,
};
export default Chaudron;
