import PropTypes from 'prop-types';

const Application = () => {
    return (
        <div className="application">
            <div className="application__disc">
                <svg className="application__icon">
                    <use href="img/svg/icon-defs.svg#star"></use>
                </svg>
            </div>
            <div className="application__text">
                <h3 className="application__header heading-tertiary">
                    <span className="limited">Only 12 spots available</span>
                </h3>
                <div className="application__cta">
                    Is one of them yours?
                </div>
                <div className="application__btn">
                    <div className="button-center-box">
                        <a href="" className="button button--white-orange">Apply now</a>
                    </div>
                </div>
            </div>
        </div>
    );   
};

export default Application;

