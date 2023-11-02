import PropTypes from "prop-types";

function Chaudron({ bg }) {
  return (
    <div id={bg} className="w-full h-full bg-cover bg-no-repeat">
      rien
    </div>
  );
}
Chaudron.propTypes = {
  bg: PropTypes.string.isRequired,
};
export default Chaudron;
