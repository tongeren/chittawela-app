import React from 'react';
import { CTAProps } from './types';
import RetreatInfo from '../RetreatInfo/RetreatInfo';
import CTAButton from './CTAButton/CTAButton';

const CTA: React.FunctionComponent<CTAProps> = ({ headline, explanation, retreatInfo, ctaButtonText }): React.ReactElement => {
    return (
        <div className="cta">
            <div className="cta__text-box">
                <h1 className="cta__primary heading-primary ">{ headline }</h1>
                <span className="cta__secondary subheadline">{ explanation }</span>
                <hr className="cta__horizontal" />
                <div className="cta__retreat">
                    <RetreatInfo { ...retreatInfo } />
                </div>
            </div>
            <div className="cta__container">
                <CTAButton cta={ ctaButtonText } /> 
            </div>
        </div>
    );
};

export default CTA;

