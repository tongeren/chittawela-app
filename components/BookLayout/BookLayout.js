import PropTypes from 'prop-types';

const BookLayout = ({ left, right }) => {
    return (
        <div className="book-layout">
            <div className="book-layout__left">{ left }</div>
            <div className="book-layout__right">{ right }</div>            
        </div>
    );
};

export default BookLayout;

BookLayout.propTypes = {
    left: PropTypes.element.isRequired,
    right: PropTypes.element.isRequired
};