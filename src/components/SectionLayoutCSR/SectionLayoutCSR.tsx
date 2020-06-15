import { Fragment } from 'react';
import { useMounted } from '../../hooks/useMounted/useMounted';
import SectionLayout, { ISectionLayout } from '../SectionLayout/SectionLayout';
import Loading from '../Loading/Loading';

/* eslint-disable-next-line */
export interface ISectionLayoutCSR extends ISectionLayout { }

const SectionLayoutCSR: React.FunctionComponent<ISectionLayoutCSR> = ({ id, heading, children, color, topMargin, bottomMargin }):React.ReactElement => { 
    const mounted = useMounted();

    return (
        <Fragment>{ mounted ?
            <SectionLayout
                id={ id } 
                heading={ heading } 
                color={ color } 
                topMargin={ topMargin }
                bottomMargin={ bottomMargin }>
                { children }
            </SectionLayout>
            : <Loading /> }
        </Fragment>
    );
};

SectionLayoutCSR.displayName = "SectionLayoutCSR";

export default SectionLayoutCSR;