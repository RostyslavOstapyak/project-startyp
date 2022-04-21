import './BaseTemplate.css';
import PropTypes from 'prop-types'


const BaseTemplate = ({textProp}) => {
    return (
        <div className='container'>
            {textProp}
        </div>
    );
};

BaseTemplate.prototype = {
    textProp: PropTypes.string
}

export default BaseTemplate;