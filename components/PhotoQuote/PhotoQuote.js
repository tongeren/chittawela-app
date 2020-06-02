import React from 'react';
import PropTypes from 'prop-types';

const PhotoQuote = ({ photo, quote }) => {
    return (
        <div className="photo-quote-layout">
            <div className="photo-quote-layout__photo u-margin-bottom-small">{ photo }</div>
            <div className="photo-quote-layout__quote u-text-center">{ quote }</div>
        </div>
    );
};

export default PhotoQuote;

PhotoQuote.propTypes = {
    photo: PropTypes.element.isRequired,
    quote: PropTypes.string.isRequired
};



