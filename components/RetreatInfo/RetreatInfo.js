import PropTypes from 'prop-types';

const RetreatInfo = ({ date, location }) => {
    return (
        <h2 className="retreat-layout">
            <span className="retreat-layout__date">{ date }</span>
            <span className="retreat-layout__divider line">-</span>
            <span className="retreat-layout__location">{ location }</span>
        </h2>
    );
};

export default RetreatInfo;

RetreatInfo.propTypes = {
    date: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired
};

