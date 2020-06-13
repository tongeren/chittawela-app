import React from 'react';
import { RetreatInfoProps } from './types';

const RetreatInfo:React.FunctionComponent<RetreatInfoProps> = ({ date, location }):React.ReactElement => {
    return (
        <h2 className="retreat-layout retreat">
            <span className="retreat-layout__date">{ date }</span>
            <span className="retreat-layout__divider line">-</span>
            <span className="retreat-layout__location">{ location }</span>
        </h2>
    );
};

RetreatInfo.displayName = "RetreatInfo";

export default RetreatInfo;

