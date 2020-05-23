import PropTypes from 'prop-types';

const ResultLayout = ({ results }) => {
    return (
        <div className="result-layout">
            { results.map((result, key) => 
                <div key={ key } className="result">
                    { result }
                </div>
            )}
        </div>
    );
};

export default ResultLayout;

ResultLayout.propTypes = {
    results: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
};