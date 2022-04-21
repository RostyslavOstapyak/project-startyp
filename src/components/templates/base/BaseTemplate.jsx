import './BaseTemplate.css';
import PropTypes from 'prop-types';

function BaseTemplate({ textProp }) {
  return <div className="container">{textProp}</div>;
}

BaseTemplate.propTypes = {
  textProp: PropTypes.string.isRequired,
};

export default BaseTemplate;
