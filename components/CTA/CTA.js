import PropTypes from 'prop-types';

const CTA = ({ headline, explanation, retreatInfo, ctaButton }) => {
    return (
        <div className="cta">
                    <div className="cta__text-box">
                        <h1 className="cta__primary heading-primary ">{ headline }</h1>
                        <span className="cta__secondary subheadline">{ explanation }</span>
                        <hr className="cta__horizontal" />
                        <div className="cta__retreat">{ retreatInfo }</div>
                    </div>
                    <div className="cta__container">
                        { ctaButton }
                    </div>
                </div>
    );
};

export default CTA;

CTA.propTypes = {
    headline: PropTypes.string.isRequired,
    explanation: PropTypes.string.isRequired,
    retreatInfo: PropTypes.element.isRequired,
    ctaButton: PropTypes.element.isRequired
};
